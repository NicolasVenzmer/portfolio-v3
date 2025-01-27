import React from 'react';
import './Experience.css';

const frontend = [
    {
        id: 1,
        name: 'React',
        level: 'Experienced',
    },
    {
        id: 2,
        name: 'JavaScript',
        level: 'Experienced',
    },
    {
        id: 3,
        name: 'TypeScript',
        level: 'Experienced',
    },
    {
        id: 4,
        name: 'Material UI',
        level: 'Experienced',
    },
    {
        id: 5,
        name: 'CSS',
        level: 'Experienced',
    },
    {
        id: 6,
        name: 'HTML',
        level: 'Experienced',
    },
    {
        id: 7,
        name: 'SASS',
        level: 'Intermediate',
    },
]

const backend = [
    {
        id: 1,
        name: 'Node JS',
        level: 'Experienced',
    },
    {
        id: 2,
        name: 'Git',
        level: 'Experienced',
    },
    {
        id: 3,
        name: 'MongoDB',
        level: 'Intermediate',
    },
    {
        id: 4,
        name: 'PostgreSQL',
        level: 'Intermediate',
    },
    {
        id: 5,
        name: 'Express JS',
        level: 'Intermediate',
    },
];

const Experience = () => {
    const handleScroll = () => {
        window.location.href = './#projects';
    }
    return (
        <section id="experience">
            <p className="section__text__p1">Explore My</p>
            <h1 className="title">Experience</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    <div className="details-container">
                        <h2 className="experience-sub-title">Frontend Development</h2>
                        <div className="article-container">
                            {frontend.map((index, item) => (
                                <article key={item}>
                                    <img
                                        src="./assets/checkmark.png"
                                        alt="Experience icon"
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
                        <h2 className="experience-sub-title">Backend Development</h2>
                        <div className="article-container">
                            {backend.map((index, item) => (
                                <article key={item}>
                                    <img
                                        src="./assets/checkmark.png"
                                        alt="Experience icon"
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