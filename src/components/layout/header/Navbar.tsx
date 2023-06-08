import React, { useState } from "react"
import Image from "next/image"

import HamburgerIcon from "@/assets/image/Icon.png"
import logo from "@/assets/image/logo.png"

interface NavbarProps {
  hamburgerIcon?: string
}

const Navbar: React.FC<NavbarProps> = ({ hamburgerIcon }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-black-900 fixed top-0 z-10 w-full py-1">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="">
            <Image className="h-14" src={logo} alt="Logo" width={70} />
          </a>
          <a href="">
            <span className="ml-2 text-sm font-bold text-gray-300 md:text-base lg:text-lg">
              E-CELL
            </span>
          </a>
        </div>
        <div
          className={`text-center lg:flex-grow lg:text-center ${
            isMenuOpen ? "hidden lg:block" : ""
          }`}
        >
          <a href="#" className={`hidden px-4 py-2 text-gray-300 hover:text-white lg:inline-block`}>
            Home
          </a>
          <a
            href="#"
            className={`min-w-32 sm:min-w-48 md:min-w-64 lg:min-w-80 hidden whitespace-nowrap px-4 py-2 text-gray-300 hover:text-white lg:inline-block`}
          >
            About Us
          </a>
          <a
            href="#"
            className={`min-w-32 min-w-32 sm:min-w-48 md:min-w-64 lg:min-w-80 hidden whitespace-nowrap px-4 py-2 text-gray-300 hover:text-white lg:inline-block`}
          >
            Contact Us
          </a>
          <a href="#" className={`hidden px-4 py-2 text-gray-300 hover:text-white lg:inline-block`}>
            Team
          </a>
        </div>
        <div className="lg:hidden">
          <button
            className="flex items-center px-3 py-2 text-gray-300 hover:text-white"
            onClick={toggleMenu}
          >
            <Image src={HamburgerIcon} alt="Hamburger Icon" width={40} height={24} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-black-900 text-center lg:hidden">
          <a href="#" className="block py-2 text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#" className="block py-2 text-gray-300 hover:text-white">
            About Us
          </a>
          <a href="#" className="block py-2 text-gray-300 hover:text-white">
            Contact Us
          </a>
          <a href="#" className="block py-2 text-gray-300 hover:text-white">
            Team
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
