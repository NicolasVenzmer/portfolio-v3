import React, { useEffect, useRef } from "react";
import "./Profile.css";
import { init } from "ityped";

const Profile = () => {
  const textRef = useRef(null);
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "React",
        "Next JS",
        "JavaScript",
        "TypeScript",
        "Material UI",
        "Tailwind CSS",
        "CSS",
        "HTML",
        "Node JS",
        "Git & GitHub",
        "PostgreSQL",
        "Express JS",
        "AWS",
        "Google Cloud",
      ],
    });
  }, []);
  const handleCurriculum = () => {
    window.open("./assets/resume.pdf");
  };
  const handleContact = () => {
    window.location.href = "./#contact";
  };
  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/nicolasvenzmer/", "_blank");
  };
  const handleGithub = () => {
    window.open("https://github.com/NicolasVenzmer", "_blank");
  };
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="./assets/profile-pic.jpeg" alt="profile-pricture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Nicolas Venzmer</h1>
        <p className="section__text__p2">Full Stack Engineer</p>
        <span ref={textRef}></span>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={handleCurriculum}>
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={handleContact}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="./assets/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onClick={handleLinkedIn}
          />
          <img
            src="./assets/github.png"
            alt="My Github profile"
            className="icon"
            onClick={handleGithub}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
