import "../src/App.css";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="background-image">
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "20px",
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
          <div className="email-container">
            <MdEmail />
            example.@email.com
          </div>
        </div>

        <div>Github</div>
        <div>LinkedIn</div>
        <div>Projects</div>
      </div>
    </div>
  );
}
