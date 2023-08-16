import React from 'react';
import HeaderStyle from '../utilities/HeaderStyle';

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-black to-blue-800 text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <HeaderStyle headerText="about-me" />
                <div className="py-8">
                </div>
                <p className="text-xl max-w-[75%] leading-relaxed">
                    Welcome! I'm currently studying computer science, statistics, and data science student at the University of Massachusetts Amherst honors college.
                </p>
                <br />
                <p className="text-xl max-w-[75%] leading-relaxed">
                    Other than my working in Frontend, Software Development, and computer science education, I love to ballroom dance.
                    I ballroom dance competitively and perform in showcases, and I was the captain of the UMass Ballroom Dance Team before I moved on to the Executive Board of the UMass Recreational Math Club.
                </p>
                <br />
                <p className="text-xl max-w-[75%] leading-relaxed">
                A fun fact about me, I love languages! I am bilingual in English and Russian, can have a plausible conversation in Spanish and ancient Latin, and I am currently learning Hebrew and Ukranian.
                </p>
            </div>
        </div>
    )
}

export default About;