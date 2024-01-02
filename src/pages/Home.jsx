import React from 'react'
import '../styles/Home.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className='main'>
        <Navbar />
        <Hero />
    </div>
  )
}

export default Home