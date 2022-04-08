import React from 'react'
import Navbar from './Components/Navbar/Navbar'

import {About, Footer, Header, Skills, Testimonials, Works } from './Containers'

const App = () => {
  return (
    <div className='App'>
        <Navbar/>
        <Header/>
        <About/>
        <Skills/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default App