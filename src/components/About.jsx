import React, { useEffect } from 'react';
import HeaderStyle from '../utilities/HeaderStyle';
import dance from "../assets/me/dance.jpg";
import ucsdprofile from "../assets/me/ucsdprofile.jpg";
import mannings from "../assets/me/mannings.jpg";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
    };

    return (
        <div name="about" className="w-full bg-gradient-to-b from-deep-blue to-black text-white">
            <div className="max-w-screen-lg mx-auto p-4 md:flex md:items-center">
                <div className="md:w-1/2 md:pr-8">

                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={fadeInVariants}
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
                <div className="md:w-1/2 flex md:justify-end items-center md:flex-col md:space-y-4 px-8 space-x-4 md:space-x-0">
                    <Image src={mannings} alt="My Picture" />
                    <Image src={dance} alt="Dance" />
                    <Image src={ucsdprofile} alt="UCSD Profile" />
                </div>
            </div>
        </div>
    );
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
