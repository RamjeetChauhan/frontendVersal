
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import { ShoppingCart } from "lucide-react"
import axios from 'axios'
import { toast } from 'sonner'
import { useDispatch, useSelector } from "react-redux"
import { setUser } from '@/redux/userSlice'


const Navbar = () => {
  const { user } = useSelector(store => store.user)
  const accessToken = localStorage.getItem('accessToken')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = async () => {
    try {
      const res = await axios.post(`http://localhost:8000/api/v1/user/logout`, {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      if (res.data.success) {
        dispatch(setUser(null))
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <header className=" fixed top-0 w-full z-20 bg-pink-300 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4">
         <div>
          <img
            src="/EkartGallery/eKartPNG.png"
            alt="ShoppingImage"
            className="w-[80px]"
          />
        </div>
        <nav className="flex gap-10 items-center text-black font-bold text-[18px]">
          <ul className="flex gap-7 items-center">
            <Link to="/"><li>Home</li></Link>
            <Link to="/products"><li>Product</li></Link>
            {
             user && (<Link to="/Profile"> <li>Hi,{user.firstName}</li> </Link>)
             }
           </ul>

          <Link to="/cart" className="relative">
            <ShoppingCart />
            <span className="absolute -top-3 -right-5 rounded-full bg-pink-500 text-white text-xs px-2">0</span>
          </Link>

          {
          user ? <Button onClick={logoutHandler} className="bg-pink-500 text-white cursor-pointer px-3">Logout</Button> : <Button onClick={()=>navigate('/login')} className="bg-pink-500 text-white cursor-pointer px-3">Login </Button>
          }
        </nav>
      </div>
    </header>
  )
}

export default Navbar

