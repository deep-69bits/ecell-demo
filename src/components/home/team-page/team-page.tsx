import Image from "next/image"

import user from "@/assets/image/User.svg"

import TeamCard from "./team-card"

const TeamPage = () => {
  return (
    <>
      <div className="h-screen select-none bg-gradient-to-r from-stone-950 from-30% via-stone-700 via-stone-800 via-50% via-70% to-stone-600 to-100% text-white">
        <div className="w-82 px-10 py-6 font-sans text-9xl font-bold italic tracking-tight shadow-lg shadow-zinc-800">
          MEET <br></br> OUR TEAM
        </div>
      <div className="justify-center flex">
      <TeamCard />
      </div>
      </div>
    </>
  )
}

export default TeamPage
