import React, { useContext, useState } from 'react';
import '../styles/Coulumn.css';
import Options from './Options';
import UserContext from '../context/UserContext';

const Column = () => {
  const options = [
    {
      text: "Project-1",
      topHeight: "25%",
    },
    {
      text: "Project-2",
      topHeight: "35%",
    },
    {
      text: "Project-3",
      topHeight: "45%",
    },
    {
      text: "Project-4",
      topHeight: "55%",
    },
    {
      text: "Project-5",
      topHeight: "65%",
    },
    {
      text: "Project-6",
      topHeight: "75%",
    }
  ];

  const { flag, setFlag } = useContext(UserContext);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setFlag(index);
    setHoveredIndex(index);
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  }

  return (
    <>
      <div className="line" onMouseLeave={handleMouseLeave}></div>
      {options.map((item, index) => (
        <Options
          key={index}
          text={item.text}
          topHeight={item.topHeight}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          isHovered={hoveredIndex === index}
        />
      ))}
    </>
  );
}

export default Column;
