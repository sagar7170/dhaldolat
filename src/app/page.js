import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function page() {
  return (
    <div className='h-screen '>
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default page
