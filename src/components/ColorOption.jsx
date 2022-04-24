import React from "react";

const ColorOption = ({ bgcolor }) => {
 
  return (
    <div className={`${bgcolor} rounded-full h-5 w-5 shadow-md mr-2`}></div>
  );
};

export default ColorOption;
