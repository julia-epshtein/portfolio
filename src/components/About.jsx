import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import HeaderStyle from "../utilities/HeaderStyle";
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
  };

  return (
    <div name="about" className="w-full h-full pb-24 bg-black text-white">
      <div className="max-w-screen-lg h-full mx-auto p-4 pb-24 md:flex md:items-center">
        <div className="md:w-1/2 flex md:justify-end items-center md:flex-col md:space-y-4 px-8 space-x-4 md:space-x-0 py-12 pb-24">
          <Image src={ucsdprofile} alt="UCSD Profile" />
        </div>
        <div className="md:w-1/2 md:pr-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
          >
            <div className="ml-4">
              {" "}
              <HeaderStyle headerText="About Me" />
            </div>
            <Paragraph>
              Welcome! I am currently studying{" "}
              <span className="text-blue-500">Computer Science</span> and{" "}
              <span className="text-blue-500">Data Science</span> at the
              University of Massachusetts Amherst. I am interested in{" "}
              <span className="text-blue-500">machine learning</span> and the
              intersection of computer science and education.
            </Paragraph>
            <Paragraph>
              I have experience in research on software development and
              education, and I love working on personal projects in ML.
            </Paragraph>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Paragraph = ({ children }) => (
  <p className="text-2xl max-w-1/2 leading-relaxed pt-8 font-paragraph ml-4">
    {children}
  </p>
);

const Image = ({ src, alt }) => (
  <div className="relative w-[60%] md:w-[80%] max-h-[60%]">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover border-indigo-400 border-spacing-4 border-8"
    />
  </div>
);

export default About;
