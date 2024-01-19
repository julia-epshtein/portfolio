import React from 'react';
import picture from '../assets/me/picture.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-deep-blue">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row-reverse items-center justify-center h-full px-4">
        <div class="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:rounded-t-[400px] before:w-full md:before:max-w-[500px] before:h-full before:border-2 before:border-purple-400 before:z-[-1]">
          <img src={picture} alt="my profile" class="rounded-t-full w-56 md:w-80 mx-auto md:ml-8 " />
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center py-8 md:py-0 md:pl-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-signature font-extrabold mb-4 text-center md:text-left py-4">
            Hi, I'm Julia!
          </h2>
          <p className="text-gray-500 max-w-md text-center md:text-left pb-4 font-paragraph text-2xl">
            CS & Data Science student looking for machine learning internships
          </p>
          <div className="mt-4">
            <ScrollLink
              to="experience" 
              spy={true}
              smooth={true}
              duration={500}
              className="font-paragraph text-xl group text-white px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-violet-500 to-violet-700 cursor-pointer"
            >
              Experience
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
