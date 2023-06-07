import React from "react"
import Image from "next/image"
import HomeBackgroundImage from "@/assets/image/home-background.jpg"
import Button from "@/components/atoms/button"

const HomeHero = () => {
  return (
    <>
      <div className="h-screen bg-cover bg-center">
        <div className="absolute inset-0 -z-50">
          <Image src={HomeBackgroundImage} alt="" fill className="z-0" />
        </div>

        <div className="container mx-60">
          <div className="left">
            <div className="mt-60 font-sans text-7xl font-bold tracking-widest text-white">
              E-CELL
            </div>
            <div className="mt-10 break-words text-5xl font-bold text-white">
              The place where ideas come to reality
            </div>
            <p className="mt-5 text-white">
              Indian Institue of Information and Technology, Lucknow
            </p>
            <Button
              className="my-2 mt-10 w-72 rounded-md bg-gradient-to-r from-blue-400 to-pink-500 py-3 
          text-center font-semibold text-white"
            >
              Explore More
            </Button>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </>
  )
}

export default HomeHero
