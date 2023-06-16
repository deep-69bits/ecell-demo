import React from "react"

import AboutUs from "@/components/home/about-us/about-us"
import ContactUs from "@/components/home/contact-us/contact-us"
import HomeHero from "@/components/home/home-hero"
import TeamPage from "@/components/home/team-page/team-page"
import Layout from "@/components/layout"

interface HomePageProps {
  data?: number
}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Layout>

      <HomeHero />
      <AboutUs />
      <ContactUs />

      {/* <HomeHero /> */}
      {/* <AboutUs /> */}
      <TeamPage />

    </Layout>
  )
}

export default HomePage
