import React from "react";

const HeaderStyle = ({ headerText }) => {
  return (
    <div className="flex items-center justify-start">
      <span className=" text-purple-400 text-4xl font-bold">#</span>
      <span className="font-source text-white text-4xl mr-4">{headerText}</span>
      <div className="h-px bg-purple-400 w-80"></div>
    </div>
  );
}

export default HeaderStyle;
