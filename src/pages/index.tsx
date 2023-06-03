import React from "react"
import AboutUs from "@/components/home/about-us/about-us"
import HomeHero from "@/components/home/home-hero"
import Layout from "@/components/layout"



interface HomePageProps {
  data?: number
}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Layout>
      <HomeHero />
       <AboutUs />
    </Layout>

  )
}

export default HomePage
