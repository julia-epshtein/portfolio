import React, { useEffect } from 'react';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import HeaderStyle from '../utilities/HeaderStyle';
import ucsdprofile from "../assets/me/ucsdprofile.jpg";

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
                        <HeaderStyle headerText="About Me" />
                        <Paragraph>
                            I am an honors CS & Data Science student at UMass. I have experience building React Apps, developing coursework, and teaching computer science and math, and I'm interested in frontend development, machine learning, and exploring the intersection between computer science and education. At UC San Diego, I'm researching the reliability of spreadsheet software by developing and piloting a custom Jupyter Notebooks Widget using Python, React, and the Javascript AG-Grid framework. I am also a course assistant for CS 240: Reasoning Under Uncertainty and a math tutor at the Russian School of Math.
                        </Paragraph>
                    </motion.div>
                </div>
                <div className="md:w-1/2 flex md:justify-end items-center md:flex-col md:space-y-4 px-8 space-x-4 md:space-x-0 py-12">
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
    <div className="relative w-[40%] md:w-[75%] max-h-[40%] mx-auto rounded">
        <img src={src} alt={alt} className="w-full h-full object-cover rounded-xl" />
    </div>
);

export default About;
