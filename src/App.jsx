import React from 'react'
// import { Button } from './components/ui/button'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import Signup from './Pages/Signup'  
import Login from './Pages/Login' 
import Verify from './Pages/Verify'
import VerifyEmail from './pages/VerifyEmail'
import Profile from './Pages/Profile'
// import Footer from './components/Footer'


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
        {/* <Footer /> */}
      </>
    ),
  },
  {
    path: '/home',
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/verify',
    element: <Verify />,
  },
  {
    path: '/verify/:token',
    element: <VerifyEmail />,
  },
  {
    path: '/profile',
    element:<Profile />,
  },
])


const App = () => {
  return (
    <>
    <RouterProvider router={router}/> 
    </>
  )
}

export default App
