// Column.js
import React from 'react';
import '../styles/Coulumn.css'; // Assuming it should be 'Column' instead of 'Coulumn'
import Options from './Options';

const Column = () => {
  const options = [
    {
      text: "Project-1",
      topHeight:"25%", // You can adjust the top height for each option
    },
    {
      text: "Project-2",
      topHeight:"35%",
    },
    {
      text: "Project-3",
      topHeight:"45%",
    },
    {
      text: "Project-4",
      topHeight:"55%",
    },
    {
      text: "Project-5",
      topHeight:"65%",
    },
    {
      text: "Project-6",
      topHeight:"75%",
    }
  ];

  return (
    <>
      <div className="line"></div>
      {options.map((item, index) => (
        <Options key={index} text={item.text} topHeight={item.topHeight} />
      ))}
    </>
  );
}

export default Column;
