import React from "react";
import "./About.css";
import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const data = [
    {
      id: 1,
      icon: "./assets/experience.png",
      alt: t('about.experience.alt'),
      title: t('about.experience.title'),
      description: [t('about.experience.years'), t('about.experience.field')],
    },
    {
      id: 2,
      icon: "./assets/education.png",
      alt: t('about.education.alt'),
      title: t('about.education.title'),
      description: [t('about.education.degree')],
    },
    {
      id: 3,
      icon: "./assets/brain.png",
      alt: t('about.interests.alt'),
      title: t('about.interests.title'),
      description: t('about.interests.items'),
    },
  ];
  const handleScroll = () => {
    window.location.href = "./#experience";
  };
  return (
    <section id="about">
      <p className="section__text__p1">{t('about.sectionTitle')}</p>
      <h1 className="title">{t('about.heading')}</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="./assets/about-pic.png"
            alt={t('about.profilePicAlt')}
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            {data.map((index, item) => {
              return (
                <div key={index.id} className="details-container">
                  <img src={index.icon} alt={index.alt} className="icon" />
                  <h3>{index.title}</h3>
                  {index?.description.map((desc, i) => {
                    return <p key={i}>{desc}</p>;
                  })}
                </div>
              );
            })}
          </div>
          <div className="text-container">
            <p>{t('about.bio')}</p>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={handleScroll}
      />
    </section>
  );
};

export default About;
