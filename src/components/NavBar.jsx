import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

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
      id: 5,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div
      className={`flex justify-between items-center w-full h-20 px-4 text-white ${darkMode ? "bg-black" : "bg-white"
        } fixed`}
    >
      <div>
        <h1 className={`text-5xl font-signature ml-2 ${darkMode ? "text-white" : "text-black"}`}>Julia Epshtein</h1>
      </div>

      {/* Mobile navigation */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              {link}
            </li>
          ))}
        </ul>
      )}

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pl-4 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <ul className="hidden md:flex pr-4">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
      {/* Dark mode toggle icon */}
      <div
        className="cursor-pointer pl-4 text-gray-500"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <BsFillSunFill size={30} />
        ) : (
          <BsFillMoonStarsFill size={30} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
