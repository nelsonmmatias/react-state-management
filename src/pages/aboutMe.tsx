// AboutMe.tsx
import { FC } from "react";
import "./styles/aboutMe.css"
import myPhoto from "../assets/images/1715591843095.jpeg";

export const AboutMe: FC = () => {
  return (
    <div className="about-me" id="about-me">
      <h1>About Me</h1>
      <div className="about-me-content">
        <img src={myPhoto} alt="Profile" className="profile-photo" />

        <div className="about-me-text">
          <h2>Fullstack Software Developer @ VWDS (CODE)</h2>
          <div>
            <span>
              <strong>TEAM: </strong>
            </span>
            <span>BAZE</span>
          </div>
          <div>
            <span>
              <strong>Hobbies: </strong>
            </span>
            <span>Musician (The Walks) </span>
            <a
              href="https://open.spotify.com/artist/45BZYUaeMRxq0AaeRvZCOd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Spotify Artist Page
            </a>
          </div>
          <div>
            <span>
              <strong>PET LOVER: </strong>
            </span>
            <span>Have two wonderful cats (Julie & Manel)</span>
          </div>
          <div>
            <span>
              <strong>LINKEDIN: </strong>
            </span>
            <a
              href="https://www.linkedin.com/in/nelson-matias-5bb46910b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/nelson-matias-5bb46910b/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
