import React from "react"


import HomeHero from "@/components/home/home-hero"
import Layout from "@/components/layout"



interface HomePageProps {
  data?: number
}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Layout>
      <HomeHero />
    </Layout>
  )
}

export default HomePage
