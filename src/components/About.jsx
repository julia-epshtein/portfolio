import React from 'react';
import HeaderStyle from '../utilities/HeaderStyle';
import dance from "../assets/me/dance.jpg";
import ucsdprofile from "../assets/me/ucsdprofile.jpg";
import mannings from "../assets/me/mannings.jpg";
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-deep-blue to-black text-white flex flex-col-reverse md:flex-row">
            <div className="w-full h-full max-w-screen-lg mx-auto p-4 md:flex md:items-center md:justify-center md:px-4">
                <div className="md:w-1/2 md:pr-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
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
                    </motion.div>
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
    <p className="text-xl max-w-1/2 leading-relaxed pt-8">
        {children}
    </p>
);

const Image = ({ src, alt }) => (
    <div className="relative w-[40%] max-h-[25%] mx-auto rounded">
        <img src={src} alt={alt} className="w-full h-full object-cover rounded-xl" />
    </div>
);

export default About;