

import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const VerifyEmail = () => {
  const { token } = useParams()
  const navigate = useNavigate()
  const [status, setStatus] = useState("Verifying...")

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/v1/user/verify",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        if (res.data.success) {
          setStatus("✅ Email Verified Successfully")
          setTimeout(() => {
            navigate("/login")
          }, 2000)
        }
      } catch (error) {
        console.log(error)
        setStatus("❌ Verification failed. Please try again")
      }
    }

    if (token) {
      verifyEmail()
    }
  }, [token, navigate])

  return (
    <div className="relative w-full h-screen bg-pink-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md text-center max-w-md">
        <h2 className="text-xl font-semibold text-gray-700">{status}</h2>
      </div>
    </div>
  )
}

export default VerifyEmail






