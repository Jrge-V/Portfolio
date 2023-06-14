import { useEffect, useState } from "react";
import "../src/App.css";
import { MdEmail } from "react-icons/md";
import clipboardCopy from "clipboard-copy";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { RiFilePaper2Fill } from "react-icons/ri";
import { VscDebugBreakpointLog, VscCircleFilled } from "react-icons/vsc";
import { SiGlitch } from "react-icons/si";


export default function Home() {
  // function and logic to handle copy text to clipboard
  const [textToCopy, setTextToCopy] = useState(
    "jorgeg.verduzcoespinoza@gmail.com"
  );

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyText = () => {
    clipboardCopy(textToCopy)
      .then(() => {
        setIsCopied(true);
      })
      .catch((error) => {
        console.log("Failed to copy", error);
      });
  };

  useEffect(() => {
    let timeoutId;

    if (isCopied) {
      timeoutId = setTimeout(() => {
        setIsCopied(false);
      }, 3000); // Display the pop-up for 3 seconds
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isCopied]);



  return (
    <div className="background-image">
      <div className="grid-container">

        <div className="intro"><h3>Hi!, I'm </h3></div>
        <div className="full-name"><h1>Jorge G. Verduzco Espinoza</h1></div>

        {/* Contact */}
        <div className="contact-container">


          <div className="email-container">
            <button onClick={handleCopyText} className="email-button">
              <MdEmail />
              jorgeg.verduzcoespinoza@gmail.com
            </button>
          </div>

          {isCopied && (
            <div className="popup-container">
              <div className="popup-content">
                <BsFillEmojiSmileFill />
                <span>Copied to clipboard</span>
              </div>
            </div>
          )}


          <div className="resume-container">
            <a className="resume-button" href="https://drive.google.com/file/d/1pjUbXNR25kRQRAdyv4PH9r-kpBOwM2xi/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <RiFilePaper2Fill />
              View Resume
            </a>
          </div>




          <div className="github-container">
            <a className="github-button" href="https://github.com/Jrge-V" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
              github.com/Jrge-V
            </a>
          </div>


          <div className="linked-container">
            <a className="linked-button" href="https://www.linkedin.com/in/jorge-verduzco/" target="_blank" rel="noopener noreferrer" >
              <BsLinkedin />
              linkedin.com/in/jorge-verduzco
            </a>
          </div>

        </div>


        <div className="about-me">
          <h2>About Me</h2>
        </div>

        <div class="about-me-buttons">
          <div class="button-1">
            <button>B1</button>
          </div>
          <div class="button-2">
            <button>B2</button>
          </div>
          <div class="button-3">
            <button>B3</button>
          </div>
        </div>

        <div class="about-me-container"></div>



        {/* <div className="education-container">
          <h3 style={{ textAlign: "center" }}>Education</h3>
          <p style={{ textAlign: "center" }}>Aug 2019 - May 2023</p>
          <p style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>California State University Northridge <VscDebugBreakpointLog /> Bachelor of Science in Computer Science</p>
          <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "20px" }}>Coursework: Multimedia System Design, Advanced Web Engeneering, Database Design, Language Design and Compilers, Human-Computer Interaction, Combinatorial Algorithms, Automota, Advanced Data Structures, Operating Systems, Discrete Structures. </p>
        </div>

        <div className="experience-skills-container">
          <div className="experience-container">
            <h3 style={{ textAlign: "center" }}>Experience</h3>
            <p style={{ textAlign: "center" }}>Summer 2018</p>
            <p style={{ textAlign: "center", fontSize: "15px", fontWeight: "bold" }}>Salvadoran American Leadership and Educational Fund</p>
            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "15px", fontWeight: "bold", textAlign: "center" }}>Community Engagement Volunteer - Nonprofit Org </p>

            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "18px" }}><VscDebugBreakpointLog /> Collaborated with a diverse team of volunteers and staff, committed to making a positive impact by bridging gaps and providing valuable resources to underserved communities</p>

            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "18px" }}><VscDebugBreakpointLog /> Actively informed parents about citizenship services, ensuring they had access to resources and support</p>

            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "18px" }}><VscDebugBreakpointLog /> Engaged with students to promote Summer Bridge programs, providing information and guidance to help them make informed decisions about their educational pathways</p>

          </div>
          <div className="skills-container">
            <h3 style={{ textAlign: "center" }}>Skills</h3>

            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "15px", fontWeight: "bold" }}><VscDebugBreakpointLog /> Programming:</p>


            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "18px" }}>Python, Java, JavaScript, HTML, CSS, React, Node.js, MongoDB, Firebase, SQL</p>

            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "15px", fontWeight: "bold" }}><VscDebugBreakpointLog /> Development Tools:</p>

            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "18px" }}>Visual Studio Code, Eclipse, IntelliJ, PyCharm, Git</p>

            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "15px", fontWeight: "bold" }}><VscDebugBreakpointLog /> Other:</p>

            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "18px" }}>Jira, Postman, Trello, Figma, Canva</p>

          </div>
        </div>

        <div>
          <h2 className="about-me">Projects</h2>
        </div>

        <div className="projects-container">

          <div className="project-wrapper-1">
            <h3 style={{ textAlign: "center" }}>VendyLA - Street Vending Business Locator</h3>
            <p style={{ textAlign: "center" }}>April 2023 - May 2023</p>
            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "18px" }}><VscCircleFilled /> A Food and Merchandise web application with a focus on street vending in Los Angeles, addressing the underrepresentation of street vendors in existing reviewer applications</p>

            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "18px" }}><VscCircleFilled /> Developed using React, JavaScript for the front-end, and Express, Node for the backend</p>

            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "18px" }}><VscCircleFilled /> Integrated Google Maps API to enable location based services and Yelp API for comprehensive data on street vendors</p>

            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "18px" }}><VscCircleFilled /> Implemented Google Firebase SDK to enhance functionality by integrating our own street vendor location information on top of the data obtained from Yelp</p>

            <div class="embed-responsive embed-responsive-16by9" style={{ justifyContent: "center", alignItems: "center", display: "flex", paddingBottom: "2%" }}>
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/WOeQ369RX9Y" allowfullscreen="true" ></iframe>
            </div>

            <div className="github-proj-wrapper">
              <button className="github-proj-container">
                <a href="https://github.com/Jrge-V/COMP584-vendyLA" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}> <AiFillGithub /> View on GitHub</a>
              </button>
            </div>


          </div>

          <div className="project-wrapper-2">
            <h3 style={{ textAlign: "center" }}>Multimedia System Design - Marks Automation Script</h3>
            <p style={{ textAlign: "center" }}>January 2023 - May 2023</p>

            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "18px" }}><VscCircleFilled /> An automation script using Python, that automates 4 manual positions in the matter of seconds</p>

            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "18px" }}><VscCircleFilled /> Python code reads proprietary data from Baselight and Flame machines to calculate filesystem locations of frames</p>

            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "18px" }}><VscCircleFilled /> All requests saved to MongoDB and can be used for data analysis and worker efficiency</p>

            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "18px" }}><VscCircleFilled /> Exports are basic CSV files to XLS files with timecode and thumbnail preview that can be uploaded to Frame.IO and/or Shotgrid</p>

            <div className="github-proj-wrapper">
              <button className="github-proj-container">
                <a href="https://github.com/Jrge-V/Multimedia-System-Design---Marks-Automation-Script" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}> <AiFillGithub /> View on GitHub</a>
              </button>
            </div>
          </div>

          <div className="project-wrapper-1">
            <h3 style={{ textAlign: "center" }}>MelloAmp - DMCA Free Music Player</h3>
            <p style={{ textAlign: "center" }}>August 2022 - May 2023</p>

            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "18px" }}><VscCircleFilled /> Developed a full stack DMCA-free music player that allowed streaming of non-copyrighted music</p>

            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "18px" }}><VscCircleFilled /> Utilized MongoDB for efficient data storage, ensuring smooth retrieval and management of music metadata</p>

            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "18px" }}><VscCircleFilled /> Employed React.js on the front-end to create a user friendly interface and Node.js to handle server-side logic enabling communication between the front-end and MongoDB</p>

            <div class="embed-responsive embed-responsive-16by9" style={{ justifyContent: "center", alignItems: "center", display: "flex", paddingBottom: "2%" }}>
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/1lO1hqTrV1Y" allowfullscreen="true" ></iframe>
            </div>

            <div className="github-proj-wrapper">
              <button className="github-proj-container">
                <a href="https://github.com/Jrge-V/MelloAmp-MusicPlayer" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}> <AiFillGithub /> View on GitHub</a>
              </button>
            </div>

          </div>

          <div className="project-wrapper-2">
            <h3 style={{ textAlign: "center" }}>Video Rental Shop Inventroy Management System</h3>
            <p style={{ textAlign: "center" }}>Summer 2021</p>

            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "18px" }}><VscCircleFilled /> Developed a Java-based application to simulate and manage the inventory of a video rental shop</p>

            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "18px" }}><VscCircleFilled /> Implemented a system to store and update data on movies, including total number of DVDs, DVDs currently in stock, and waitlists for sold-out DVDs</p>

            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "18px" }}><VscCircleFilled /> Designed functionally to add and removes names from waitlists, and saved and restored waitlists upon program termination</p>

            <p style={{ paddingLeft: "5%", paddingRight: "5%", fontSize: "18px" }}><VscCircleFilled /> Implemented commands for inventory management, including listing titles in order, finding items by title, and replacing/inserting new inventory</p>

            <div className="github-proj-wrapper">
              <button className="github-proj-container">
                <a href="https://github.com/Jrge-V/InventoryManagement-VideoRentalShop" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}> <AiFillGithub /> View on GitHub</a>
              </button>
            </div>
          </div>

        </div>


        <div>
          <h2 className="more-container">More</h2>
        </div>


        <div className="projects-container-2">

          <div className="more-proj-wrapper-1">

            <div className="more-github-proj-wrapper">
              <button className="more-github-proj-container">
                <a href="https://github.com/Jrge-V?tab=repositories" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', marginLeft: "20%" }}> <AiFillGithub /></a>
              </button>
            </div>
          </div>

          <div className="more-proj-wrapper-2">
            <div className="more-github-proj-wrapper">
              <button className="more-github-proj-container">
                <a href="https://glitch.com/@JorgeV/class-projects" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: "magenta", marginLeft: "20%" }}><SiGlitch /></a>
              </button>
            </div>
          </div>
        </div> */}



      </div>
    </div>
  );
}
