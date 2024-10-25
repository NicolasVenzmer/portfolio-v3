import React from 'react';
import './About.css';

const data = [
    {
        id: 1,
        icon: './assets/experience.png',
        alt: 'Experience icon',
        title: 'Experience',
        description: ['2+ years', 'Frontend Development'],
    },
    {
        id: 2,
        icon: './assets/education.png',
        alt: 'Education icon',
        title: 'Education',
        description: ["Bachelor's Degree in Information Technology Management"],
    },
    {
        id: 3,
        icon: './assets/brain.png',
        alt: 'Interests icon',
        title: 'Interests',
        description: ['Technology', 'Finance', 'Science'],
    }
]

const About = () => {
    const handleScroll = () => {
        window.location.href = './#experience';
    }
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
                                    <img
                                        src={index.icon}
                                        alt={index.alt}
                                        className='icon'
                                    />
                                    <h3>{index.title}</h3>
                                    {index?.description.map((desc, i) => {
                                        return (
                                            <p key={i}>{desc}</p>
                                        )
                                    })}
                                </div>
                            );
                        })}
                    </div>
                    <div className="text-container">
                        <p>
                            Experienced Front-End Engineer with 2+ years of expertise
                            in JavaScript and frameworks, transforming complex designs into
                            optimized web applications. Fluent in English, Spanish, and
                            intermediate in German. Degree in Information Technology Management. Passionate, proactive,
                            and committed to continuous
                            learning. Let's collaborate to build innovative web solutions and
                            shape the future of technology.
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