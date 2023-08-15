import React from "react";

const HeaderStyle = ({ headerText }) => {
  return (
    <div className="flex items-center justify-start">
      <span className="font-source text-purple-400 text-4xl">#</span>
      <span className="font-source text-white text-4xl ml-1.5">{headerText}</span>
      <div className="h-0.5 bg-purple-400 w-48"></div>
    </div>
  );
}

export default HeaderStyle;
