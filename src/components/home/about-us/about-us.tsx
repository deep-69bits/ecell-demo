const AboutUs = () => {
  return (
    <div className="about-us-container flex h-screen flex-col bg-[#060A0F] p-14 text-white">
      <div className="about-l flex w-full flex-col justify-center gap-y-6 sm:flex-row sm:gap-y-0">
        <div className="about-l-top flex-1 space-y-2">
          <div className="about-us font-bold md:text-lg lg:text-xl xl:text-3xl">
            <span className="bg-gradient-to-r from-[#FE3DCE] to-[#26AFE6] bg-clip-text text-transparent">
              About Us
            </span>
          </div>
          <div className="about-us-title text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-9xl">
            <span>Polars</span>
            <br />
            <span>Website</span>
          </div>
        </div>
        <div className="about-us-bottom flex-1">
          {/* <div className="circle"></div> */}
          {/* <div className="circle h-96 w-96 rounded-full bg-[#141922]"></div> */}
          <div className="about-r-top md:text-md text-slate-300 lg:text-xl xl:mt-10 xl:text-2xl">
            <span>
              The new DeFi concept for the Prediction Market. Make predictions and earn on the
              change in the price of polar token after the end of each event.
            </span>
          </div>
          <div className="about-r-bottom"></div>
        </div>
      </div>
      <div className="about-r md:text-md flex flex-1 sm:text-sm lg:text-lg xl:text-xl">
        <div className="circle-content flex w-fit flex-col justify-end font-bold sm:text-xl md:text-2xl lg:text-3xl xl:mb-16 xl:text-5xl ">
          <span>The New DeFi</span>
          <span>Concept For The</span>
          <span>Prediction Market </span>
        </div>
      </div>
    </div>
  )
}
export default AboutUs
