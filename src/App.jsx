import React from 'react'
import Navbar from "../src/components/Navbar/Navbar"
import Hero from "../src/components/Hero/Hero"
import HeroSection from '../src/components/Hero/Hero'
import Section from './components/Section/Section'
import OurTeamSection from './components/Team/OurTeamSection'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'



const App = () => {
  return (


    <>
      <Navbar />
      <HeroSection />
      <Section />
      <OurTeamSection />
      <Contact/>
      <Footer />
    </>



  )
}

export default App