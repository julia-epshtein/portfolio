import React from "react";
import HeaderStyle from "../utilities/HeaderStyle";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { motion } from "framer-motion";

const Skills = () => {
  const techs = [
    {
      id: 1,
      title: "Coursework",
      items: [
        "Algorithms",
        "Data Structures",
        "Machine Learning",
        "Software Engineering",
        "Database Management",
        "Programming Methodology",
        "Statistics",
        "Discrete Math",
        "Linear Algebra",
        "Multivariate Calculus",
        "Abstract Algebra",
        "Computer Systems Principles",
      ],
      icon: <BsFillBookmarkCheckFill size={40} />,
      style: {
        border: "1px solid #ff66b2", 
        boxShadow: "0 0 6px #ff66b2", 
      },
    },
    {
      id: 2,
      title: "Languages",
      items: [
        "Javascript",
        "Typescript",
        "Java",
        "Python",
        "C/C++",
        "SQL",
        "HTML",
        "CSS",
        "MATLAB",
      ],
      icon: <FaLaptopCode size={40} />,
      style: {
        border: "1px solid #ff0000", 
        boxShadow: "0 0 6px #ff0000", 
      },
    },
    {
      id: 3,
      title: "Developer Tools & Libraries",
      items: [
        "GitHub",
        "Git",
        "React",
        "Tailwind",
        "Jupyter",
        "Anaconda",
        "Google Colab",
        "Notion",
        "Confluence",
      ],
      icon: <FaTools size={40} />,
      style: {
        border: "1px solid #800080", 
        boxShadow: "0 0 6px #800080", 
      },
    },
    {
      id: 4,
      title: "Frameworks & Development",
      items: [
        "NumPy",
        "Pandas",
        "SciPy",
        "Sci-Kit",
        "Linux",
        "Windows",
        "MacOS",
        "Kubernetes",
        "Docker",
      ],
      icon: <FaChartBar size={40} />,
      style: {
        border: "1px solid #0000ff", 
        boxShadow: "0 0 6px #0000ff", 
      },
    },
  ];

  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.05 }, // Scale up on hover
  };

  return (
    <div name="skills" className="bg-gradient-to-b from-black to-deep-blue w-full">
      <div className="max-w-screen-lg mx-auto pb-20 text-white pt-40">
        <div>
          <HeaderStyle headerText="Skills" />
          <p className="py-6">
            Here are the tools and technologies I have experience in.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 px-4 sm:px-8">
          {techs.map(({ id, title, items, icon, style }) => (
            <motion.div
              key={id}
              initial="hidden"
              animate="visible"
              variants={boxVariants}
              whileHover="hover" 
              className={`hoscale-105 flex duration-500 py-2 rounded-lg`}
              style={style}
            >
              <div className="flex items-start justify-center p-4">{icon}</div>
              <div className="flex flex-col justify-start p-4 w-full">
                <h2 className="font-bold text-lg">{title}</h2>
                <ul className="mt-2">
                  {items.map((course, index) => (
                    <li key={index} className="mt-1">
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
