import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import cseIcon from "../assets/companies/cseIcon.jpg";
import cics from "../assets/companies/cics.png";
import wearableLearning from "../assets/companies/wearableLearning.png";
import rtc from "../assets/companies/rtc.jpg";
import rsm from "../assets/companies/rsm.jpg";
import ials from "../assets/companies/ials.png";
import hospital from "../assets/companies/hospital.jpg";

import HeaderStyle from '../utilities/HeaderStyle';

const TimelineElement = ({ date, title, subtitle, description, skills, icon }) => (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
            background: '#966fd6',
            color: 'black',
            boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
        }}
        date={
            <div>
                <h3 className="text-white text-[18px] font-bold">
                    {date}
                </h3>
            </div>
        }
        contentArrowStyle={{
            borderRight: '7px solid #966fd6',
        }}
        iconStyle={{ backgroundImage: `url(${icon})`, backgroundSize: "cover" }}
    >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{title}</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontStyle: 'italic' }}>{subtitle}</h4>
        <p>{description}</p>
        {skills && <p>Skills: {skills}</p>}
    </VerticalTimelineElement>
);



const Experience = () => {
    return (
        <div name="experience" className="w-full bg-gradient-to-b from-deep-blue to-black text-white pt-40">
            <div className="w-full max-w-screen-lg mx-auto flex flex-col justify-center pt-20">
                <HeaderStyle headerText="Experience" />
                <div className="w-full mt-20 flex flex-col">
                    <div className="vertical-timeline-container pb-40">
                        <VerticalTimeline>
                            {/* Research Intern */}
                            <TimelineElement
                                date="JUN 2023 - PRESENT"
                                title="Research Intern"
                                subtitle="UCSD CSE"
                                description="Implemented a feature for the Kale Jupyter Notebooks Widget that allows users to assign custom names to cells and reference them through formulas, and designed pilot studies."
                                skills="JavaScript, React.js, TypeScript, Jupyter, Git, Python"
                                icon={cseIcon}
                            />

                            {/* Undergraduate Course Assistant */}
                            <TimelineElement
                                date="SEP 2022 - PRESENT"
                                title="Undergraduate Course Assistant"
                                subtitle="UMass CICS"
                                description="Grade over 250 assignments on a weekly basis and help students grasp statistics concepts for CS 240: Reasoning Under Uncertainty."
                                icon={cics}
                            />

                            {/* Undergraduate Researcher */}
                            <TimelineElement
                                date="SEP 2022 - MAY 2023"
                                title="Undergraduate Researcher"
                                subtitle="Wearable Learning"
                                description="Analyzed data using natural language processing to understand gameplay processes and the development of computational thinking skills in the Wearable Learning platform."
                                skills="Git, LaTeX, BERT, NLP, Technical Writing, Python"
                                icon={wearableLearning}
                            />

                            {/* Member, Rewriting the Code */}
                            <TimelineElement
                                date="SEP 2021 - PRESENT"
                                title="Member"
                                subtitle="Rewriting the Code"
                                description="Part of the largest peer-to-peer network of women in tech, providing support, mentorship, and education for sustainable careers and equal opportunities."
                                icon={rtc}
                            />

                            {/* Mathematics Tutor */}
                            <TimelineElement
                                date="NOV 2018 - PRESENT"
                                title="Mathematics Tutor"
                                subtitle="Russian School of Math"
                                description="Tutor students in grades K-12, lead SAT workshops, and tailor math instruction to meet individual learning styles."
                                icon={rsm}
                            />

                            {/* Research Intern */}
                            <TimelineElement
                                date="MAY 2022 - AUG 2022"
                                title="Research Intern"
                                subtitle="UMass Institute for Applied Life Sciences"
                                description="Determined the accuracy of an insole that classifies events based on foot orientation during walking, tracked human motion, built models, processed data, and tested accuracy through MATLAB."
                                skills="REDCap, Visual3D, MATLAB, StepScan, Qualisys, Research, Python"
                                icon={ials}
                            />

                            {/* Liver Patient Prediction */}
                            <TimelineElement
                                date="MAY 2022 - AUG 2022"
                                title="Liver Patient Prediction"
                                subtitle="Project"
                                description="Predicted liver disease using classification methods with supervised machine learning algorithms, achieving 86% accuracy."
                                icon={hospital}
                            />
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
