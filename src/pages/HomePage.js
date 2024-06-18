import React from 'react'
import WelcomeBanner from '../components/WelcomeBanner'
import NavBar from '../components/NavBar'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div>
         <NavBar/>
         <WelcomeBanner />
      <h1>homepage</h1>
      <NewsLetter/>
      <Footer />
    </div>
  )
}

export default HomePage
