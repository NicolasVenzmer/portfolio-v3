import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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
            image: './assets/spotify-logo.png',
            alt: 'spotify-logo',
            title: 'Spotify Clone',
            gitHub: {
                title: 'Github',
                url: "https://github.com/NicolasVenzmer/spotify-clone"
            },
            liveDemo: {
                title: 'Live Demo',
                url: "https://spotify-clone-25.netlify.app/"
            }
        },
        {
            id: 4,
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
            id: 5,
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
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                navigation
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {data.map(({ id, image, alt, title, gitHub, liveDemo }) => (
                    <SwiperSlide key={id}>
                        <div className="details-container color-container">
                            <div className="article-container">
                                <img src={image} alt={alt} className="project-img" />
                            </div>
                            <div>
                                <h2 className="experience-sub-title project-title">{title}</h2>
                                <div className="btn-container">
                                    <button
                                        className="btn btn-color-2 project-btn"
                                        onClick={() => handleGitHub(gitHub.url)}
                                    >
                                        {gitHub.title}
                                    </button>
                                    <button
                                        className="btn btn-color-2 project-btn"
                                        onClick={() => handleLiveDemo(liveDemo.url)}
                                    >
                                        {liveDemo.title}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
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
