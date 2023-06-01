import { useEffect, useState } from "react";
import "../src/App.css";
import { MdEmail } from "react-icons/md";
import clipboardCopy from "clipboard-copy";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FiBookOpen } from "react-icons/fi";

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

  const gitRedirect = () => {
    window.open("https://github.com/Jrge-V", "_blank");
  };

  const linkedRedirect = () => {
    window.open("https://www.linkedin.com/in/jorge-verduzco/", "_blank");
  }


  return (
    <div className="background-image">
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "50px",
          }}
        >
          <img
            className="profile-image"
            src="/media/Jorge2.jpg"
            alt="profile"
          />
        </div>

        <div className="full-name">Jorge G. Verduzco Espinoza</div>

        <div className="header-image-container">
          <img
            className="header-image-static"
            src="/media/CSUNAlum.png"
            alt="header"
          />
          <img
            className="header-image-gif"
            src="/media/CSUNALUMNI.gif"
            alt="alumni gif"
          />
        </div>

        <div className="email-wrapper">
          <button onClick={handleCopyText} className="email-container">
            <MdEmail />
            jorgeg.verduzcoespinoza@gmail.com
          </button>
          {isCopied && (
            <div className="popup-container">
              <div className="popup-content">
                <BsFillEmojiSmileFill />
                <span>Copied to clipboard</span>
              </div>
            </div>
          )}
        </div>

        <div className="github-wrapper">
        <a href="https://github.com/Jrge-V" target="_blank" rel="noopener noreferrer" className="github-container" onClick={gitRedirect}>
            <AiFillGithub />
            github.com/Jrge-V
          </a>
        </div>


        <div className="linked-wrapper">
        <a href="https://www.linkedin.com/in/jorge-verduzco/" target="_blank" rel="noopener noreferrer" className="linked-container" onClick={linkedRedirect}>
            <BsLinkedin />
            linkedin.com/in/jorge-verduzco
          </a>
        </div>

        

      </div>
    </div>
  );
}
