import Button from "@/components/atoms/button"

const HomeHero = () => {
  return (
    <>
      <div className="gradient h-screen overflow-hidden bg-black bg-gradient-to-b  from-black  from-5% via-[#04b6fc] to-black   to-60% bg-cover bg-center">
        <div className="container mx-auto px-4 pt-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col items-start justify-center">
              <div className="mt-12 bg-gradient-to-r from-[#FE3DCE] to-[#26AFE6] bg-clip-text font-sans text-4xl font-bold tracking-widest text-transparent lg:mt-32 lg:text-7xl">
                E-CELL
              </div>
              <div className="mt-4 break-words text-2xl font-bold text-white lg:mt-8 lg:text-5xl">
                The place where ideas come to reality
              </div>
              <p className="mt-4 text-white lg:mt-6">
                Indian Institute of Information and Technology, Lucknow
              </p>
              <Button
                className="my-2 mt-8 w-52 rounded-md bg-gradient-to-r from-blue-400 to-pink-500 py-3 text-center font-semibold 
                text-white lg:mt-10 lg:w-72"
              >
                Explore More
              </Button>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeHero
