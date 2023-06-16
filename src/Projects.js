import { useEffect, useState, useRef } from "react";
import "../src/App.css";
import { VscCircleFilled } from "react-icons/vsc";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {

    const info = [
        <div className="project-wrap">
            <div className="project-title">
                <h3>
                    VendyLA - Street Vending Business Locator
                </h3>
            </div>
            <div className="project-date">
                <p>
                    April 2023 - May 2023
                </p>
            </div>


            <div className="project-desc">
                <p>
                    <VscCircleFilled /> A Food and Merchandise web application with a focus on street vending in Los Angeles, addressing the underrepresentation of street vendors in existing reviewer applications
                </p>

                <p><VscCircleFilled /> Developed using React, JavaScript for the front-end, and Express, Node for the backend
                </p>

                <p><VscCircleFilled /> Integrated Google Maps API to enable location based services and Yelp API for comprehensive data on street vendors
                </p>

                <p><VscCircleFilled /> Implemented Google Firebase SDK to enhance functionality by integrating our own street vendor location information on top of the data obtained from Yelp
                </p>
            </div>
            <div class="embed-responsive embed-responsive-16by9" className="yt-video">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/WOeQ369RX9Y" allowfullscreen="true" ></iframe>
            </div>

            <div className="github-proj-container">
                <a className="github-proj-button" href="https://github.com/Jrge-V/COMP584-vendyLA" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub />
                    View on GitHub
                </a>
            </div>
        </div>,

        <div className="project-wrap">
            <div className="project-title">
                <h3>
                    Multimedia System Design - Marks Automation Script
                </h3>
            </div>
            <div className="project-date">
                <p>
                    January 2023 - May 2023
                </p>
            </div>


            <div className="project-desc">
                <p>
                    <VscCircleFilled /> An automation script using Python, that automates 4 manual positions in the matter of seconds
                </p>

                <p><VscCircleFilled /> Python code reads proprietary data from Baselight and Flame machines to calculate filesystem locations of frames
                </p>

                <p><VscCircleFilled /> All requests saved to MongoDB and can be used for data analysis and worker efficiency
                </p>

                <p><VscCircleFilled /> Exports are basic CSV files to XLS files with timecode and thumbnail preview that can be uploaded to Frame.IO and/or Shotgrid
                </p>
            </div>

            <div className="github-proj-container">
                <a className="github-proj-button" href="https://github.com/Jrge-V/Multimedia-System-Design---Marks-Automation-Script" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub />
                    View on GitHub
                </a>
            </div>
        </div>,


        <div className="project-wrap">
            <div className="project-title">
                <h3>
                    MelloAmp - DMCA Free Music Player
                </h3>
            </div>
            <div className="project-date">
                <p>
                    August 2022 - May 2023
                </p>
            </div>


            <div className="project-desc">
                <p>
                    <VscCircleFilled /> Developed a full stack DMCA-free music player that allowed streaming of non-copyrighted music
                </p>

                <p><VscCircleFilled /> Utilized MongoDB for efficient data storage, ensuring smooth retrieval and management of music metadata
                </p>

                <p><VscCircleFilled /> Employed React.js on the front-end to create a user friendly interface and Node.js to handle server-side logic enabling communication between the front-end and MongoDB
                </p>

                <p><VscCircleFilled /> Implemented Google Firebase SDK to enhance functionality by integrating our own street vendor location information on top of the data obtained from Yelp
                </p>
            </div>
            <div class="embed-responsive embed-responsive-16by9" className="yt-video">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/1lO1hqTrV1Y" allowfullscreen="true" ></iframe>
            </div>

            <div className="github-proj-container">
                <a className="github-proj-button" href="https://github.com/Jrge-V/MelloAmp-MusicPlayer" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub />
                    View on GitHub
                </a>
            </div>
        </div>,


        <div className="project-wrap">
            <div className="project-title">
                <h3>
                    Video Rental Shop Inventroy Management System
                </h3>
            </div>
            <div className="project-date">
                <p>
                    Summer 2021
                </p>
            </div>


            <div className="project-desc">
                <p>
                    <VscCircleFilled /> Developed a Java-based application to simulate and manage the inventory of a video rental shop
                </p>

                <p><VscCircleFilled /> Implemented a system to store and update data on movies, including total number of DVDs, DVDs currently in stock, and waitlists for sold-out DVDs
                </p>

                <p><VscCircleFilled /> Designed functionally to add and removes names from waitlists, and saved and restored waitlists upon program termination
                </p>

                <p><VscCircleFilled /> Implemented commands for inventory management, including listing titles in order, finding items by title, and replacing/inserting new inventory
                </p>
            </div>

            <div className="github-proj-container">
                <a className="github-proj-button" href="https://github.com/Jrge-V/InventoryManagement-VideoRentalShop" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub />
                    View on GitHub
                </a>
            </div>
        </div>,

    ];

    const delay = 25000;



    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === info.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);



    return (
        <div className="slideshow-grid">

            <div className="slideshowDots">
                {info.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>

            <div className="slideshow-bg">
                <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {info.map((project, index) => (
                        <div
                            className="slide"
                            key={index}
                        >{project}</div>
                    ))}
                </div>

            </div>

        </div>
    );
}

export default Projects


