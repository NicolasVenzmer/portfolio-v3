import React from 'react';
import './Projects.css';

const Projects = () => {
    const handleGitHub = (url) => {
        window.open(url, '_blank');
    };

    const handleLiveDemo = (url) => {
        window.open(url, '_blank');
    };

    const handleScroll = () => {
        window.location.href = './#contact';
    };

    const data = [
        {
            id: 1,
            image: './assets/netflix-logo.png',
            alt: 'netflix-logo',
            title: 'Netflix Clone',
            gitHub: {
                title: 'Github',
                url: "https://github.com/NicolasVenzmer/netflix-clone",
            },
            liveDemo: {
                title: 'Live Demo',
                url: "https://netflix-clone-dca91.web.app/",
            },
        },
        {
            id: 2,
            image: './assets/amazon-logo.png',
            alt: 'amazon-logo',
            title: 'Amazon Clone',
            gitHub: {
                title: 'Github',
                url: "https://github.com/NicolasVenzmer/amazon-clone",
            },
            liveDemo: {
                title: 'Live Demo',
                url: "https://amazon-clone0.netlify.app/",
            },
        },
        {
            id: 3,
            image: './assets/expenses-logo.png',
            alt: 'expenses-logo',
            title: 'My Expenses',
            gitHub: {
                title: 'Github',
                url: "https://github.com/NicolasVenzmer/AplicacionPresupuesto",
            },
            liveDemo: {
                title: 'Live Demo',
                url: "https://tusgastosdiarios.netlify.app/",
            },
        },
        {
            id: 4,
            image: './assets/employee-logo.png',
            alt: 'employee-logo',
            title: 'Employee Control',
            gitHub: {
                title: 'Github',
                url: "https://github.com/NicolasVenzmer/ControlDeEmpleados"
            },
            liveDemo: {
                title: 'Live Demo',
                url: "https://control-clientes-73292.web.app/home"
            }
        }
    ];

    return (
        <section id="projects">
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    {data.map(({id, image, alt, title, gitHub, liveDemo}) => {
                        return (
                            <div className="details-container color-container" key={id}>
                                <div className="article-container">
                                    <img
                                        src={image}
                                        alt={alt}
                                        className="project-img"
                                    />
                                </div>
                                <div>
                                    <h2 className="experience-sub-title project-title">{title}</h2>
                                    <div className="btn-container">
                                        <button
                                            className="btn btn-color-2 project-btn"
                                            onClick={() => handleGitHub(gitHub.url)} // Pass the GitHub URL
                                        >
                                            {gitHub.title}
                                        </button>
                                        <button
                                            className="btn btn-color-2 project-btn"
                                            onClick={() => handleLiveDemo(liveDemo.url)} // Pass the Live Demo URL
                                        >
                                            {liveDemo.title}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
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

export default Projects;
