import React from "react"
import clsx from "clsx"

import Footer from "./footer"
import Header from "./header"

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <>
      <Header />
      <main className={clsx("", className)}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
