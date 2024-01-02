import React from 'react'
import ImgBox from '../components/ImgBox'
import '../styles/About.css'
import Numbers from '../components/Numbers'
import Coulumn from '../components/Coulumn'
import Imaged from '../components/Imaged'
const About = () => {
  return (
    <div className='main'>
      <ImgBox />
      <Numbers />
      <Coulumn />
      <Imaged />
    </div>
  )
}

export default About