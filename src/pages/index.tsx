import React from "react"

import AboutUs from "@/components/home/about-us/about-us"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div>
      <AboutUs />
    </div>
  )
}

export default HomePage
