import React from 'react';
import portrait from '../assets/portrait.png';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Home = () => {

    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
            <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row-reverse items-center justify-center h-full px-4">
                <div className="md:w-1/2 flex items-center justify-center">
                    <img src={portrait} alt="my profile" className="rounded-3xl w-56 md:w-80 mx-auto md:ml-8" />
                </div>
                <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center py-8 md:py-0 md:pl-8">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-center md:text-left">
                        Hi, I'm Julia.
                    </h2>
                    <p className="text-gray-500 max-w-md text-center md:text-left">
                        Third year computer science, statistics, and data science student. I have experience in Typescript, Java, Python, C, and SQL.
                    </p>
                    <div className="mt-4">
                        <button className="group text-white px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-violet-400 to-purple-500 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
