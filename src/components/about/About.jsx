import React from "react";
import "./About.css";

const data = [
  {
    id: 1,
    icon: "./assets/experience.png",
    alt: "Experience icon",
    title: "Experience",
    description: ["4+ years", "Full Stack Development"],
  },
  {
    id: 2,
    icon: "./assets/education.png",
    alt: "Education icon",
    title: "Education",
    description: ["Bachelor's Degree in Information Technology Management"],
  },
  {
    id: 3,
    icon: "./assets/brain.png",
    alt: "Interests icon",
    title: "Interests",
    description: ["Technology", "Finance", "Science"],
  },
];

const About = () => {
  const handleScroll = () => {
    window.location.href = "./#experience";
  };
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="./assets/about-pic.png"
            alt="Profile picture"
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
            <p>
              I’m a Full Stack Engineer with a background in Information
              Technology Management, building modern, scalable web applications
              from end to end. Over the past 4+ years, I’ve worked across
              frontend and backend, turning complex business requirements into
              reliable, high-quality digital products. I’ve contributed to
              cloud-based applications using React, Next.js, Node.js, and AWS,
              collaborating closely with designers, backend engineers, data
              teams, and stakeholders to deliver secure and performant
              solutions. From building API-driven platforms and automation tools
              to implementing authentication systems and CI/CD pipelines, I
              enjoy owning features across the full development lifecycle. My
              journey started in data architecture, which shaped the way I think
              about systems: scalable, structured, and designed for long-term
              impact. Today, I focus on building products that not only work —
              but create real value for users and businesses. Fluent in English
              and Spanish, I’m driven by curiosity, continuous learning, and the
              challenge of building technology that solves meaningful problems.
            </p>
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
