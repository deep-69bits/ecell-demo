import React from "react"
import Image from "next/image"

import user from "@/assets/image/User.svg"

const TeamCard = () => {
  return (
    <div className="flex flex-row ">
      <div className="flex flex-col">
        <Image src={user} alt="icon" width={165}></Image>
        <b>akshat bhansali</b>
      </div>
      <div>
        <div className="mt-5 rotate-90 font-thin">my post</div>
      </div>
    </div>
  )
}

export default TeamCard
