import React, { useEffect, useRef } from "react";
import "./Profile.css";
import { init } from "ityped";
import { useLanguage } from "../../context/LanguageContext";

const Profile = () => {
  const { t, language } = useLanguage();
  const textRef = useRef(null);
  useEffect(() => {
    if (textRef.current) {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: t('profile.technologies'),
      });
    }

    return () => {
      // Cleanup to prevent memory leaks
      if (textRef.current) {
        textRef.current.textContent = '';
      }
    };
  }, [language, t]);
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
        <p className="section__text__p1">{t('profile.greeting')}</p>
        <h1 className="title">Nicolas Venzmer</h1>
        <p className="section__text__p2">{t('profile.title')}</p>
        <span ref={textRef}></span>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={handleCurriculum}>
            {t('profile.downloadCV')}
          </button>
          <button className="btn btn-color-1" onClick={handleContact}>
            {t('profile.contactInfo')}
          </button>
        </div>
        <div id="socials-container">
          <img
            src="./assets/linkedin.png"
            alt={t('profile.linkedinAlt')}
            className="icon"
            onClick={handleLinkedIn}
          />
          <img
            src="./assets/github.png"
            alt={t('profile.githubAlt')}
            className="icon"
            onClick={handleGithub}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
