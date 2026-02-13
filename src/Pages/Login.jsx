import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import axios from "axios"
import { toast } from "sonner"
import { useDispatch } from "react-redux"
import { setUser} from '@/redux/userSlice'
// import React from 'react'





const Login = () => {
   
       

  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
   
     const navigate = useNavigate()
     const dispatch = useDispatch()

     const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (res.data.success) {
         navigate("/home")
        dispatch(setUser(res.data.user))
        localStorage.setItem("accessToken", res.data.accessToken)
        toast.success(res.data.message)
       
      }
    } catch (error) {
      console.log(error)
      toast.error(
        error.response?.data?.message || "Server not responding"
      )
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-100">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login your account</CardTitle>
          <CardDescription>
            Enter required details below to login your account
          </CardDescription>
        </CardHeader>

        <CardContent>
           <form onSubmit={submitHandler} className="grid gap-4">
          

        
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="email@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required />
            </div>

            
            <div className="grid gap-2 relative">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Your password"
                value={formData.password}
                onChange={handleChange}
                required />
              <span
                className="absolute right-3 top-9 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>

            <Button  onClick={submitHandler} type="submit" className="w-full cursor-pointer  hower:bg-pink-500" disabled={loading}>
              {loading ? <><Loader2 className="h-4 animate-spin"/> Please Wait</> : "Login"}
            
            </Button>
          </form>
        </CardContent>

        <CardFooter>
          <p className="text-gray-700 text-sm text-center w-full">
            Don't Have An Account ?{" "}
            <Link to="/signup"
              className="hover:underline text-pink-800">
              Signup
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login
