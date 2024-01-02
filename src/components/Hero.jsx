import React from 'react';
import '../styles/Hero.css';
import test from '..//assets/test1.jpg';
import Boxed from '../components/Boxed';
import RightArrow from '../assets/RightArrow.svg';


const Hero = () => {
  const text = [
    {
      title: "A Web Developer",
      style: {
        color: "#222",
        position: 'absolute',
        top: "20%",
        right: "50%",
        border: "1px solid black",
      },
    },
    {
      title: "A Software Developer",
      style: {
        position: 'absolute',
        left: "90%",
        top: "20%",
        transform: "rotate(90deg)",
        width: "10vw",
        height: "6vh",
        border: "1px solid black",
      },
    },
  ];

  return (
    <div className='hero'>
      <div className="title"><span>Portfolio</span> <br /> Website</div>
      <div className="bx-h"></div>
      <div className="bx-v"><img src={test} alt="" /></div>
      {text.map((boxedText, index) => (
        <Boxed key={index} {...boxedText} />
      ))}
       <div className="bb"> 
       <img src={RightArrow} alt="" />
        </div>  
    </div>
  );
};

export default Hero;
