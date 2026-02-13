import React from "react";
import "./Experience.css";
import { useLanguage } from "../../context/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  const frontend = [
    {
      id: 1,
      name: "React",
      level: t('experience.level'),
    },
    {
      id: 2,
      name: "Next.js",
      level: t('experience.level'),
    },
    {
      id: 3,
      name: "JavaScript",
      level: t('experience.level'),
    },
    {
      id: 4,
      name: "TypeScript",
      level: t('experience.level'),
    },
    {
      id: 5,
      name: "Material UI",
      level: t('experience.level'),
    },
    {
      id: 6,
      name: "Tailwind CSS",
      level: t('experience.level'),
    },
    {
      id: 7,
      name: "HTML5 & CSS3",
      level: t('experience.level'),
    },
  ];

  const backend = [
    {
      id: 1,
      name: "Node JS",
      level: t('experience.level'),
    },
    {
      id: 2,
      name: "Git & GitHub",
      level: t('experience.level'),
    },
    {
      id: 3,
      name: "PostgreSQL",
      level: t('experience.level'),
    },
    {
      id: 4,
      name: "Express JS",
      level: t('experience.level'),
    },
    {
      id: 5,
      name: "Amazon Web Services",
      level: t('experience.level'),
    },
    {
      id: 6,
      name: "Google Cloud",
      level: t('experience.level'),
    },
  ];
  const handleScroll = () => {
    window.location.href = "./#projects";
  };
  return (
    <section id="experience">
      <p className="section__text__p1">{t('experience.sectionTitle')}</p>
      <h1 className="title">{t('experience.heading')}</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">{t('experience.frontend')}</h2>
            <div className="article-container">
              {frontend.map((index, item) => (
                <article key={item}>
                  <img
                    src="./assets/checkmark.png"
                    alt={t('experience.iconAlt')}
                    className="icon"
                  />
                  <div>
                    <h3>{index.name}</h3>
                    <p>{index.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">{t('experience.backend')}</h2>
            <div className="article-container">
              {backend.map((index, item) => (
                <article key={item}>
                  <img
                    src="./assets/checkmark.png"
                    alt={t('experience.iconAlt')}
                    className="icon"
                  />
                  <div>
                    <h3>{index.name}</h3>
                    <p>{index.level}</p>
                  </div>
                </article>
              ))}
            </div>
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

export default Experience;
