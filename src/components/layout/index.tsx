import React from "react"
import clsx from "clsx"

import Navbar from "./header/Navbar"
import Footer from "./footer"

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <>
      <Navbar />
      <main className={clsx("", className)}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
