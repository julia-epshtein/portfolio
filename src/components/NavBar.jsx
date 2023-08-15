import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ link, selectedLink, setSelectedLink }) => {
  return (
    <AnchorLink
      className={`${selectedLink === link ? "text-purple-400" : ""
        } hover:text-purple-400 transition duration-200`}
      href={`#${link}`}
      onClick={() => setSelectedLink(link)}
    >
      {link}
    </AnchorLink>
  );
};

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

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
        <h1 className={"text-5xl font-signature ml-2 text-purple-400"}>Julia Epshtein</h1>
      </div>

      {/* Mobile navigation */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ link }) => (
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link
                link={link}
                selectedLink={selectedLink}
                setSelectedLink={setSelectedLink}
              />
            </li>
          ))}
        </ul>
      )}

      {/* Toggle button for mobile navigation */}
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
              selectedLink={selectedLink}
              setSelectedLink={setSelectedLink}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
