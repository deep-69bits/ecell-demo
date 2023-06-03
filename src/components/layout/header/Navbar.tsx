import React from "react"
import Image from "next/image"

import Logo from "@/assets/image/logo.png"

interface HomePageProps {
  data?: number
}

const Navbar: React.FC<HomePageProps> = () => {
  return (
    <>
      <nav className="bg-black-900 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <a href="">
              <Image className="h-8" src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="flex-grow text-center">
            <a href="#" className="px-4 py-2 text-gray-300 hover:text-white">
              Home
            </a>
            <a
              href="#"
              className="min-w-32 sm:min-w-48 md:min-w-64 lg:min-w-80 whitespace-nowrap px-4 py-2 text-gray-300 hover:text-white"
            >
              About Us
            </a>
            <a
              href="#"
              className="min-w-32 min-w-32 sm:min-w-48 md:min-w-64 lg:min-w-80 whitespace-nowrap px-4 py-2 text-gray-300 hover:text-white"
            >
              Contact Us
            </a>
            <a href="#" className="px-4 py-2 text-gray-300 hover:text-white">
              Team
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
