import React from 'react';
import './About.css';

const data = [
    {
        id: 1,
        icon: './assets/experience.png',
        alt: 'Experience icon',
        title: 'Experience',
        description: ['3+ years', 'Frontend Development'],
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
                            Experienced Frontend Engineer with a degree in Information Technology Management, specializing in React, Next.js, JavaScript, and Node.js to craft cutting-edge digital experiences. With over 3 years of expertise, I have transformed complex designs into optimized, user-friendly web applications and collaborated with backend engineers to integrate RESTful APIs. Additionally, I have worked alongside data scientists to harness and process data, implementing AI with Gen AI to drive innovation and deliver creative solutions. Fluent in English (advanced) and Spanish (native), I am passionate about leveraging technology's transformative power to revolutionize the tech landscape. I thrive on challenging norms and applying artificial intelligence to create impactful digital experiences. Let’s connect and shape the future of technology together!
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