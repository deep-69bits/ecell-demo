import React from "react"
import clsx from "clsx"

interface HeaderProps {
  className?: string
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return <div className={clsx("", className)}>Header</div>
}

export default Header
