import React from "react";
import HeaderStyle from '../utilities/HeaderStyle';
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { motion } from "framer-motion";

const Experience = () => {

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
      style: "shadow-pink-500",
    },
    {
      id: 2,
      title: "Languages",
      items: "Javascript, Typescript, Java, Python, C/C++, SQL, HTML, CSS, MATLAB",
      icon: <FaLaptopCode size={40} />,
      style: "shadow-red-500",
    },
    {
      id: 3,
      title: "Developer Tools & Libraries",
      items: "GitHub, Git, React, Tailwind, Jupyter, Anaconda, Google Colab, Notion, Confluence",
      icon: <FaTools size={40} />,
      style: "shadow-purple-500",
    },
    {
      id: 4,
      title: "Frameworks and Development",
      items: "NumPy, Pandas, SciPy, Sci-Kit, Linux, Windows, MacOS, Kubernetes, Docker",
      icon: <FaChartBar size={40} />,
      style: "shadow-blue-500",
    },
  ];

  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div name="experience" className="bg-gradient-to-b from-black to-blue-950 w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <HeaderStyle headerText="Tools and Technologies" />
          <p className="py-6">Here are the tools and technologies I have experience in.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 px-4 sm:px-0">
          {techs.map(({ id, title, items, icon, style }) => (
            <motion.div
              key={id}
              initial="hidden"
              animate="visible"
              variants={boxVariants}
              className={`flex shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <div className="flex items-start justify-center p-4">
                {icon}
              </div>
              <div className="flex flex-col justify-start p-4 w-full">
                <h2 className="font-bold text-lg">{title}</h2>
                <ul className="mt-2">
                  {Array.isArray(items)
                    ? items.map((course, index) => (
                      <li key={index} className="mt-1">
                        {course}
                      </li>
                    ))
                    : <p className="mt-2">{items}</p>
                  }
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
