import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Images.css';
import img from '../assets/01.jpg';
import virus from '../assets/virus.png';
import shanks from '../assets/shanks.png';
const images = [
  img,
  virus,
  shanks
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='images' >
      <motion.div
        key={currentImageIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        style={{ width: '100%', height: '100%' }}
      >
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} style={{ width: '100%', height: '100%' }} />
      </motion.div>
      <div className="bx-1"></div>
    </div>
  );
};

export default ImageSlider;
