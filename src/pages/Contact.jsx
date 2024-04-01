import React from 'react'
import '../styles/Contact.css'
import shanks2 from '../assets/shanks2.png'
import Email from '../components/Email'
const Contact = () => {
  return (
    <div className='main'>
      <div className="center">
        <div className="sidetext">THANKS YOU FOR VIEWING</div>
        <div className="img-cont">
          <div className="fstcol">Portfolio</div>
          <div className="img-col">
            <img src={shanks2} alt="" />
          </div>
          <div className="sndcol">Feel free to drop down your suggestions</div>
        </div> 
      </div>
      <Email />
    </div>
  )
}

export default Contact