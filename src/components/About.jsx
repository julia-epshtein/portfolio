import React from 'react';
import HeaderStyle from '../utilities/HeaderStyle';

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <HeaderStyle headerText="about-me" />
                <div className="pb-8">
                </div>
                <p className="text-xl mt-20">
                    Third year computer science and mathematics student, interested in software development, machine learning, and the intersection between computer science and education. I have experience in Javascript, Java, Python, C, and SQL. I love working on projects that push forward innovative ideas. I am currently researching how spreadsheets can be made safer for all users, creating pilot studies and programming with Python and ReactJS. I am also a mathematics tutor and an undergraduate course assistant for CS240: Reasoning Under Uncertainty.
                </p>

                <br />
                <p className="text-xl">
                    Lorem50
                </p>
            </div>
        </div>
    )
}

export default About;