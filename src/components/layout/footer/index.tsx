import React from "react"
import clsx from "clsx"

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return <div className={clsx("", className)}>Footer</div>
}

export default Footer
