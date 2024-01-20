import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Link = ({ link, selectedLink, setSelectedLink }) => {
  const handleClick = () => {
    setSelectedLink(link);
  };

  return (
    <ScrollLink
      to={link}
      spy={true}
      smooth={true}
      duration={500}
      activeClass="text-purple-400"
      className={`hover:text-purple-400`}
      onClick={handleClick}
    >
      {link}
    </ScrollLink>
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
      link: "projects",
    },
    {
      link: "experience",
    },
    {
      link: "contact",
    },
  ];

  const mediaLinks = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/juliaepshtein/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/julia-epshtein",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:jepshtein@umass.edu",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://www.dropbox.com/scl/fi/b5ghbdjlanlq2af82t1o1/Julia-Epshtein-Resume.pdf?rlkey=yf5tteri74y7mcrpnyv7hzryq&dl=0",
    },
  ];

  return (
    <div
      className={
        "fixed top-0 flex justify-between items-center w-full h-20 px-4 text-white bg-black z-50"
      }
    >
      <div>
        <h1 className={"text-xl font-mono ml-2 text-white"}>Julia Epshtein</h1>
      </div>
      <div className="md:hidden flex items-center gap-2 mr-4">
        {mediaLinks.map(({ id, child, href, download }) => (
          <a
            key={id}
            className="ml-4"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            download={download}
          >
            {child}
          </a>
        ))}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-full h-screen bg-gradient-to-b from-black to-deep-blue text-gray-500 font-source font-700">
          {links.map(({ link }) => (
            <li
              className="px-4 cursor-pointer capitalize py-6 text-4xl font-source"
              key={link}
            >
              <Link
                link={link}
                selectedLink={selectedLink}
                setSelectedLink={setSelectedLink}
              />
            </li>
          ))}
        </ul>
      )}

      <div className="flex items-center">
        <div className="md:hidden pr-4 z-10 text-gray-500">
          <div onClick={() => setNav(!nav)} className="cursor-pointer">
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>

      <ul className="hidden md:flex pr-4">
        {links.map(({ link }) => (
          <li
            className="font-source px-4 cursor-pointer capitalize font-bold text-gray-500 hover:scale-105 duration-200"
            key={link}
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
