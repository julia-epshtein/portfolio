import React from "react";
import HeaderStyle from "../utilities/HeaderStyle";

//icons
import { FaGithub } from "react-icons/fa";
import { Icon } from "@iconify/react";

const ProjectCard = ({ title, tools, description, githubLink }) => {
  return (
    <div className="rounded-xl bg-white p-8 transition duration-300 ease-in-out transform hover:bg-gray-200">
      <h2 className="text-3xl pb-8 text-black font-source font-bold">{title}</h2>
      <h3 className="text-slate-500 font-source font-semibold pb-8">{tools}</h3>
      <p className="mt-2 text-black font-source pb-4 leading-7">{description}</p>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 border-2 border-slate-700 text-black px-4 py-2 rounded-3xl inline-block hover:scale-105 duration-100"
      >
        <FaGithub size={20} className="inline-block mr-2" />
        GitHub
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full h-full bg-gradient-to-br from-sky-300 to-violet-400 text-white pt-20 pb-20"
    >
      <div className="max-w-screen-sm w-full mx-auto">
        <div className="text-black xs:ml-4">
          {" "}
          <HeaderStyle headerText="Projects" />
        </div>
      </div>
      <div className="flex flex-col gap-8 max-w-screen-sm w-full mx-auto mt-12">
        <ProjectCard
          title="Personify"
          tools={
            <>
              <span className="inline-flex items-center gap-2 text-4xl">
                <p className="text-lg">Made with:</p>
                <Icon icon="logos:react" />
                <Icon icon="skill-icons:tailwindcss-dark" />
                <Icon icon="logos:python" />
                <Icon icon="devicon:nextjs" />
                <Icon icon="devicon:tensorflow" />
                <Icon icon="devicon:keras-wordmark" />
                <Icon icon="devicon:scikitlearn" />
              </span>
            </>
          }
          description="Discover your personality through your music taste. Currently developing a web application that uses machine learning to predict personality traits based on a user's Spotify listening history."
          githubLink="https://github.com/julia-epshtein/spotify-personify"
        />

        <ProjectCard
          title="Titanic Survival Prediction"
          tools={
            <>
              <span className="inline-flex items-center gap-4 text-4xl">
                <p className="text-lg">Made with:</p>
                <Icon icon="logos:python" />
                <Icon icon="devicon:tensorflow" />
                <Icon icon="devicon:keras" />
                <Icon icon="devicon:scikitlearn" />
              </span>
            </>
          }
          description="Predicting the survival of passengers on the Titanic using machine learning. This project was completed as part of a Kaggle competition."
          githubLink="https://github.com/julia-epshtein/Kaggle-Titanic-Challenge"
        />

        <ProjectCard
          title="Gameify"
          tools={
            <>
              <span className="inline-flex items-center gap-4 text-4xl">
                <p className="text-lg">Made with:</p>
                <Icon icon="logos:react" />
                <Icon icon="devicon:mongodb-wordmark" />
                <Icon icon="skill-icons:expressjs-dark" />
                <Icon icon="logos:nodejs" />
              </span>
            </>
          }
          description="A phone app that turns your daily tasks into a game. Earn points and level up as you complete tasks and compete with friends to see who can complete the most tasks. This project was completed in a team of undergraduate students at UMass."
          githubLink="https://github.com/ibzimh/gameify"
        />

        <ProjectCard
          title="Liver Patient Prediction"
          tools={
            <>
              <span className="inline-flex items-center gap-4 text-4xl">
                <p className="text-lg">Made with:</p>
                <Icon icon="logos:python" />
                <Icon icon="devicon:scikitlearn" />
              </span>
            </>
          }
          description="Classified patients based on whether they have liver disease given chemical compositions in their bloodstream."
          githubLink="https://github.com/julia-epshtein/liverpatient"
        />
      </div>
    </div>
  );
};

export default Projects;
