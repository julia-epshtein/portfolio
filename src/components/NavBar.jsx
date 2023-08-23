import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Link = ({ link, selectedLink, setSelectedLink }) => {
  return (
    <RouterLink
      to={`/${link}`}
      className={`${selectedLink === link ? "text-purple-400" : ""} hover:text-purple-400`}
      onClick={() => setSelectedLink(link)}
    >
      {link}
    </RouterLink>
  );
};

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [selectedPage, setSelectedPage] = useState("home");

  const links = [
    {
      link: "home",
    },
    {
      link: "about",
    },
    {
      link: "experience",
    },
    {
      link: "portfolio",
    },
    {
      link: "contact",
    },
  ];

  return (
    <div className={"fixed top-0 flex justify-between items-center w-full h-20 px-4 text-white bg-black"}>
      <div>
        <h1 className={"text-4xl font-signature ml-2 text-white"}>Julia Epshtein</h1>
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ link }) => (
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link
                link={link}
                setSelectedLink={link}
              />
            </li>
          ))}
        </ul>
      )}

      <div className="md:hidden pr-4 z-10 text-gray-500">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      <ul className="hidden md:flex pr-4">
        {links.map(({ link }) => (
          <li
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link
              link={link}
              setSelectedLink={link}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
