import React, {useEffect, useRef} from 'react';
import './NavBarDesktop.css';
import {init} from "ityped";
import { useLanguage } from '../../context/LanguageContext';
import LanguageToggle from '../languageToggle/LanguageToggle';

const NavBarDesktop = () => {
    const { t } = useLanguage();
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: [
                "Welcome",
                "Bienvenido",
                "Bienvenue",
                "Willkommen",
                "Benvenuto",
            ]
        });
    }, []);
    return (
        <nav id="desktop-nav">
            <div className="logo">
                <span ref={textRef}></span>
            </div>
            <div className="nav-right">
                <ul className="nav-links">
                    <li><a href="#about">{t('navbar.about')}</a></li>
                    <li><a href="#experience">{t('navbar.experience')}</a></li>
                    <li><a href="#projects">{t('navbar.projects')}</a></li>
                    <li><a href="#contact">{t('navbar.contact')}</a></li>
                </ul>
                <LanguageToggle />
            </div>
        </nav>
    );
};

export default NavBarDesktop;