import React from 'react'
import Navbar from './Components/Navbar/Navbar'

import {About, Footer, Header, Skills, Works } from './Containers'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Header/>
        <About/>
        <Works/>
        <Skills/>
        {/* <Testimonials/> */}
        <Footer/>
    </div>
  )
}

export default App