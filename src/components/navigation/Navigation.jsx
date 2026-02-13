import React, {useState, useEffect} from "react";
import "./navigation.css";
import {FaBook} from "react-icons/fa";
import {BiSolidMessageDetail} from "react-icons/bi";
import {MdWork} from "react-icons/md";
import {HiHome} from "react-icons/hi";
import {MdLanguage} from "react-icons/md";
import { useLanguage } from "../../context/LanguageContext";

const updateNavigatorOffset = () => {
    const offset = window.innerHeight * 0.05;
    document.documentElement.style.setProperty('--navigator-offset', `${offset}px`);
};

const Navigation = () => {
    const { t } = useLanguage();
    const [activeNav, setActiveNav] = useState("#");
    const [showNavigator, setShowNavigator] = useState(true);

    useEffect(() => {
        updateNavigatorOffset();
        window.addEventListener('resize', updateNavigatorOffset);
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            const sectionPositions = {
                "#": 0,
                "#about": document.getElementById("about").getBoundingClientRect().top + window.scrollY - 60,
                "#experience": document.getElementById("experience").getBoundingClientRect().top + window.scrollY - 60,
                "#projects": document.getElementById("projects").getBoundingClientRect().top + window.scrollY - 60,
                "#contact": document.getElementById("contact").getBoundingClientRect().top + window.scrollY - 60,
            };

            let currentSection = "#";
            for (const [section, position] of Object.entries(sectionPositions)) {
                if (scrollPosition >= position) {
                    currentSection = section;
                } else {
                    break;
                }
            }

            setActiveNav(currentSection);
            setShowNavigator(
                !(currentSection === "#contact" || currentSection === "#")
            );
        };
        
        handleScroll()

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        showNavigator && (
            <div className="navigator">
                <div className="tooltip" data-tooltip={t('navigation.homeTooltip')}>
                    <a
                        href="#"
                        onClick={() => setActiveNav("#")}
                        className={activeNav === "#" ? "active" : ""}
                    >
                        <HiHome/>
                    </a>
                </div>
                <div className="tooltip" data-tooltip={t('navigation.aboutTooltip')}>
                    <a
                        href="#about"
                        onClick={() => setActiveNav("#about")}
                        className={activeNav === "#about" ? "active" : ""}
                    >
                        <FaBook/>
                    </a>
                </div>
                <div className="tooltip" data-tooltip={t('navigation.experienceTooltip')}>
                    <a
                        href="#experience"
                        onClick={() => setActiveNav("#experience")}
                        className={activeNav === "#experience" ? "active" : ""}
                    >
                        <MdWork/>
                    </a>
                </div>
                <div className="tooltip" data-tooltip={t('navigation.projectsTooltip')}>
                    <a
                        href="#projects"
                        onClick={() => setActiveNav("#projects")}
                        className={activeNav === "#projects" ? "active" : ""}
                    >
                        <MdLanguage/>
                    </a>
                </div>
                <div className="tooltip" data-tooltip={t('navigation.contactTooltip')}>
                    <a
                        href="#contact"
                        onClick={() => setActiveNav("#contact")}
                        className={activeNav === "#contact" ? "active" : ""}
                    >
                        <BiSolidMessageDetail/>
                    </a>
                </div>
            </div>
        )
    );
};

export default Navigation;
