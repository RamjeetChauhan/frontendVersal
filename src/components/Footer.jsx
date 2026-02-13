
import React from "react"
import { Link } from "react-router-dom"
// import Logo from "../assets/Logo.png"
import {
    FaFacebook,
    FaInstagram,
    FaPinterest,
    FaTwitterSquare,
} from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-10">
            <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between">

                {/* info */}
                <div className="mb-6 md:mb-0">
                    <Link to="/">
                        <img src="/EkartGallery/eKartPNG.png" alt="" className="w-32" />
                    </Link>

                    <p className="mt-2 text-sm">
                        Powering Your World with the Best in Electronics.
                    </p>
                    <p className="mt-2 text-sm">
                        Sector-16, Noida City
                    </p>
                    <p className="text-sm">Email: raamjeetvishunpur@gmail.com</p>
                    <p className="text-sm">Phone: (739)-871-6441</p>
                </div>

                {/* customer service link */}
                <div className="mb-6 md:mb-0">
                    <h3 className="text-xl font-semibold">Customer Service</h3>
                    <ul className="mt-2 text-sm space-y-2">
                        <li>Contact Us</li>
                        <li>Shipping & Returns</li>
                        <li>FAQs</li>
                        <li>Order Tracking</li>
                        <li>Size Guide</li>
                    </ul>
                </div>

                {/* social media links */}
                <div className="mb-6 md:mb-0">
                    <h3 className="text-xl font-semibold">Follow Us</h3>
                    <div className="flex space-x-4 mt-3 text-2xl">
                        <FaFacebook />
                        <FaInstagram />
                        <FaPinterest />
                        <FaTwitterSquare />
                    </div>
                </div>

            </div>

            <div className="text-center text-sm text-gray-400 mt-6">
                2026 Zaptro. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer


