import React from 'react'
import ImgBox from '../components/ImgBox'
import '../styles/About.css'
import Numbers from '../components/Numbers'
import Coulumn from '../components/Coulumn'
import Imaged from '../components/Imaged'
import UserContextProvider from '../context/UserContextProvider'
const About = () => {
  return (
    <UserContextProvider>
        <div className='main' >
          <ImgBox />
          <Numbers />
          <Coulumn />
          <Imaged />
        </div>
    </UserContextProvider>
  )
}

export default About