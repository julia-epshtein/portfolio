import React from 'react';
import HeaderStyle from '../utilities/HeaderStyle';
import dance from "../assets/dance.jpg";
import ucsdprofile from "../assets/ucsdprofile.jpg";
import mannings from "../assets/mannings.jpg";

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-deep-blue to-black text-white flex flex-col-reverse md:flex-row">
            <div className="max-w-screen-lg mx-auto p-4 md:flex md:items-center md:justify-center h-full md:px-4">
                <div className="md:w-1/2 md:pr-8">
                    <HeaderStyle headerText="about-me" />
                    <Paragraph>
                        Welcome! I'm currently studying computer science, statistics, and data science student at the University of Massachusetts Amherst honors college.
                    </Paragraph>
                    <Paragraph>
                        Other than my working in Frontend, Software Development, and computer science education, I love to ballroom dance.
                        I perform in showcases and dance competitively, and I was the captain of the UMass Ballroom Dance Team before I moved on to the Executive Board of the UMass Recreational Math Club.
                    </Paragraph>
                    <Paragraph>
                        A fun fact about me, I love languages! I am bilingual in English and Russian, can have a super basic conversation in Spanish and ancient Latin, and I am currently learning Hebrew and Ukrainian.
                    </Paragraph>
                </div>
                <div className="md:w-1/2 flex flex-col justify-end md:justify-center items-center px-8 space-y-4">
                    <Image src={mannings} alt="My Picture" />
                    <Image src={dance} alt="Dance" />
                    <Image src={ucsdprofile} alt="UCSD Profile" />
                </div>
            </div>
        </div>
    )
}

const Paragraph = ({ children }) => (
    <p className="text-xl max-w-[75%] leading-relaxed pt-8">
        {children}
    </p>
);

const Image = ({ src, alt }) => (
    <div className="relative w-[50%] max-h-[25%] mx-auto rounded">
        <img src={src} alt={alt} className="w-full h-full object-cover rounded-xl" />
    </div>
);

export default About;