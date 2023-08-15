import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "portfolio",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className={"flex justify-between items-center w-full h-20 px-4 text-white bg-black"}>
      <div>
        <h1 className={"text-5xl font-signature ml-2 text-purple-400"}>Julia Epshtein</h1>
      </div>

      {/* Mobile navigation */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link}) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <a href={`#${link}`} onClick={() => setNav(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <ul className="hidden md:flex pr-4">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
