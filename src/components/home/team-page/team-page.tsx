import Image from "next/image"

import user from "@/assets/image/User.svg"

const TeamPage = () => {
  return (
    <div className="h-screen select-none bg-gradient-to-r from-stone-950 from-30% via-stone-700 via-stone-800 via-50% via-70% to-stone-600 to-100% text-white">
      <div className="w-82 px-10 py-6 font-sans text-9xl font-bold italic tracking-tight shadow-lg shadow-zinc-800">
        MEET <br></br> OUR TEAM
      </div>
      <div className="font-arial my-5 flex justify-center py-5 text-4xl font-medium italic">
        Co-ordinators
      </div>
      <div className="my-5 flex flex-row justify-center gap-80 py-5">
        {/* <div className="w-46 border-2 border-white text-white">
          <Image src={user} alt="icon" width={165}></Image>
          Image comes here
        </div> */}
        <div className="border-2 border-white">
          <Image src={user} alt="icon" width={165}></Image>
        </div>
      </div>
    </div>
  )
}

export default TeamPage
