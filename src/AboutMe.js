import React from 'react'
import "../src/App.css";
import { useState } from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { TbPointFilled } from "react-icons/tb";
import { IoLogoPython, IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaNodeJs, FaJava } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiPhpmyadmin, SiMongodb, SiPhp, SiFirebase, SiReact, SiVisualstudiocode, SiPycharm, SiEclipseide, SiIntellijidea, SiPostman, SiJira, SiTrello, SiFigma, SiCanva } from "react-icons/si";
import { BsGit } from "react-icons/bs";





const AboutMe = () => {

    //buttons

    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    const buttonMessages = [

        // message 1
        <div>

            <div className="education-title">
                <h3>
                    Education
                </h3>
            </div>

            <div className="education-title">
                <p>
                    Aug 2019 - May 2023
                </p>
            </div>

            <div className="education-school">
                <p >California State University Northridge <VscDebugBreakpointLog /> Bachelor of Science in Computer Science</p>
            </div>

            <div className="education-coursework-title">
                <p>
                    Relevant Coursework
                </p>
            </div>

            <div className="education-coursework-container">
                <div>
                    <p>
                        < TbPointFilled /> Multimedia System Design
                    </p>
                </div>
                <div>
                    <p>
                        < TbPointFilled /> Advanced Web Engeneering
                    </p>
                </div>
                <div>
                    <p>
                        < TbPointFilled /> Database Design
                    </p>
                </div>
                <div>
                    <p>
                        < TbPointFilled /> Language Design and Compilers
                    </p>
                </div>
                <div>
                    <p>
                        < TbPointFilled /> Human-Computer Interaction
                    </p>
                </div>
                <div>
                    <p>
                        < TbPointFilled /> Combinatorial Algorithms
                    </p>
                </div>
                <div>
                    <p>
                        < TbPointFilled /> Software Engineering
                    </p>
                </div>
                <div>
                    <p>
                        < TbPointFilled /> Advanced Data Structures
                    </p>
                </div>
                <div>
                    <p>
                        < TbPointFilled /> Operating Systems
                    </p>
                </div>
                <div>
                    <p>
                        < TbPointFilled /> Discrete Structures
                    </p>
                </div>
                <div>
                    <p>
                        < TbPointFilled /> Concepts of Programming Languages
                    </p>
                </div>
                <div>
                    <p>
                        < TbPointFilled /> Automota
                    </p>
                </div>
            </div>

        </div>,


        //message 2
        <div>
            <div className="education-title">
                <h3>
                    Experience
                </h3>
            </div>

            <div className="education-title">
                <p>
                    Summer 2018
                </p>
            </div>

            <div className="education-school">
                <p >Salvadoran American Leadership and Educational Fund</p>
            </div>

            <div className="education-school">
                <p >Community Engagement Volunteer - Nonprofit Org</p>
            </div>

            <div className="experience-content">
                <p >< TbPointFilled /> Collaborated with a diverse team of volunteers and staff, committed to making a positive impact by bridging gaps and providing valuable resources to underserved communities.</p>
            </div>

            <div className="experience-content">
                <p >< TbPointFilled /> Actively informed parents about citizenship services, ensuring they had access to resources and support.</p>
            </div>

            <div className="experience-content">
                <p >< TbPointFilled /> Engaged with students to promote Summer Bridge programs, providing information and guidance to help them make informed decisions about their educational pathways.</p>
            </div>
        </div>,


        //message 3
        <div>
            <div className="education-title">
                <h3>
                    Skills
                </h3>
            </div>


            <div className="education-coursework-title">
                <p>
                    Programming
                </p>
            </div>

            <div className="skills-info-4 ">
                <p >
                    Python
                </p>

                <p>
                    Java
                </p>
                <p>
                    JavaScript
                </p>
                <p>
                    HTML
                </p>
                <p>
                    CSS
                </p>
                <p>
                    React
                </p>
                <p>
                    Node.js
                </p>
                <p>
                    MongoDB
                </p>
            </div>
            <div className="skills-info-3 ">
                <p>
                    Firebase
                </p>
                <p>
                    SQL
                </p>
                <p>
                    PHP
                </p>
            </div>

            <div className='experience-logo-6'>
                <div className='python-logo'>
                    <IoLogoPython />
                </div>
                <div className='java-logo '>
                    <FaJava />
                </div>
                <div className='js-logo'>
                    <IoLogoJavascript />
                </div>
                <div className='html-logo'>
                    <IoLogoHtml5 />
                </div>
                <div className='css-logo'>
                    <IoLogoCss3 />
                </div>
                <div className='react-logo'>
                    <SiReact />
                </div>
            </div>
            <div className='experience-logo-5'>
                <div className='node-logo '>
                    <FaNodeJs />
                </div>
                <div className='mongo-logo'>
                    <SiMongodb />
                </div>
                <div className='firebase-logo'>
                    <SiFirebase />
                </div>
                <div className='sql-logo'>
                    <DiMysql />
                </div>
                <div className='php-logo'>
                    <SiPhp />
                </div>
            </div>

            <div className='skill-pad'>
            </div>
            <div className="education-coursework-title">
                <p>
                    Development Tools
                </p>
            </div>

            <div className="skills-info-4">
                <p >
                    Visual Studio Code
                </p>

                <p>
                    PyCharm
                </p>
                <p>
                    Eclipse
                </p>
                <p>
                    IntelliJ
                </p>
            </div>
            <div className="skills-info-3">
                <p>
                    Git
                </p>
                <p>
                    phpMyAdmin
                </p>
                <p>
                    Postman
                </p>
            </div>

            <div className='experience-logo-4'>
                <div className='vsc-logo'>
                    <SiVisualstudiocode />
                </div>
                <div className='pycharm-logo'>
                    <SiPycharm />
                </div>
                <div className='eclipse-logo'>
                    <SiEclipseide />
                </div>
                <div className='intellij-logo'>
                    <SiIntellijidea />
                </div>
            </div>
            <div className='experience-logo-3'>
                <div className='git-logo'>
                    <BsGit />
                </div>
                <div className='myadmin-logo'>
                    <SiPhpmyadmin />
                </div>
                <div className='postman-logo'>
                    <SiPostman />
                </div>
            </div>


            <div className='skill-pad'>
            </div>
            <div className="education-coursework-title">
                <p>
                    Other
                </p>
            </div>

            <div className="skills-info-4 ">
                <p >
                    Jira
                </p>
                <p>
                    Trello
                </p>
                <p>
                    Figma
                </p>
                <p>
                    Canva
                </p>
            </div>

            <div className='experience-logo-4'>
                <div className='jira-logo'>
                    <SiJira />
                </div>
                <div className='trello-logo'>
                    <SiTrello />
                </div>
                <div className='figma-logo'>
                    <SiFigma />
                </div>
                <div className='canva-logo'>
                    <SiCanva />
                </div>

            </div>

        </div>,
    ];

    const handleButtonClick = (index) => {
        setActiveButtonIndex(index);
    };


    return (
        <>
            <div className="about-me-button-container">
                <div className="about-me-button-layout">
                    <button
                        className={`about-me-buttons ${activeButtonIndex === 0 ? "active" : ""}`}
                        onClick={() => handleButtonClick(0)}
                        id="button-1"
                    >
                        Education
                    </button>
                </div>
                <div className="about-me-button-layout">
                    <button
                        className={`about-me-buttons ${activeButtonIndex === 1 ? "active" : ""}`}
                        onClick={() => handleButtonClick(1)}
                        id="button-2"
                    >
                        Experience
                    </button>
                </div>
                <div className="about-me-button-layout">
                    <button
                        className={`about-me-buttons ${activeButtonIndex === 2 ? "active" : ""}`}
                        onClick={() => handleButtonClick(2)}
                        id="button-3"
                    >
                        Skills
                    </button>
                </div>
            </div>

            <div className="about-me-container">{buttonMessages[activeButtonIndex]}</div>
        </>
    )
}

export default AboutMe