import { useEffect, useState } from "react";
import "../src/App.css";
import { MdEmail } from "react-icons/md";
import clipboardCopy from "clipboard-copy";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin, BsFillChatSquareTextFill } from "react-icons/bs";
import { RiFilePaper2Fill } from "react-icons/ri";
import { SiGlitch } from "react-icons/si";
import AboutMe from "./AboutMe";
import Projects from "./Projects";


export default function Home() {
  // function and logic to handle copy text to clipboard
  const [textToCopy, setTextToCopy] = useState(
    "jorgeg.verduzcoespinoza@gmail.com"
  );

  const [isCopied, setIsCopied] = useState(false);
  const [buttonMessage, setButtonMessage] = useState("");

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


        {/* <div className="blog-container ">
          <div className="blogpost-container ">
            <a className="blogpost-button" href="https://jrge-v.github.io/Blog/" target="_blank" rel="noopener noreferrer" >
              <BsFillChatSquareTextFill />
              Check out my Blog!
            </a>
          </div>

        </div> */}


        <div className="about-me">
          <h2>About Me</h2>
        </div>

        <AboutMe />


        <div className="about-me">
          <h2>Projects</h2>
        </div>


        <Projects />

        <div className="about-me">
          <h2>More</h2>
        </div>

        <div className="more-container">

          <div className="more-content">
            <a className="more-content-button" href="https://github.com/Jrge-V?tab=repositories" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
          </div>

          <div className="more-content">
            <a className="more-content-glitch-button " href="https://glitch.com/@JorgeV/class-projects" target="_blank" rel="noopener noreferrer">
              <SiGlitch />
            </a>
          </div>

        </div>



      </div>
    </div>
  );
}
