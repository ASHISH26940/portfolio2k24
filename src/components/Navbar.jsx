import React from 'react';
import '../styles/Navbar.css';
const Navbar = () => {
  return (
    <div className='nav'>
        <div className="pt-1">Projects</div>
        <div className="pt-2">
            <a href="#">Home</a>
            <a href="#">Contact me</a>
        </div>
    </div>
  )
}

export default Navbar