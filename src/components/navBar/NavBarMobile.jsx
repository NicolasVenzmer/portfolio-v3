import React, {useEffect, useRef} from 'react';
import './NavBarMobile.css';
import {init} from "ityped";
import { useLanguage } from '../../context/LanguageContext';
import LanguageToggle from '../languageToggle/LanguageToggle';

const NavBarMobile = (props) => {
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
                "Bem-vindo",
            ]
        });
    }, []);
    const handleMenu = () => {
        const menu = document.querySelector('.menu-links');
        const icon = document.querySelector('.hamburger-icon');
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }
    return (
        <nav id="hamburger-nav">
            <div className="logo">
                <span ref={textRef}></span>
            </div>
            <div className="hamburger-menu">
                <div className="hamburger-icon" onClick={handleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="menu-links">
                    <li><a href="#about" onClick={handleMenu}>{t('navbar.about')}</a></li>
                    <li><a href="#experience" onClick={handleMenu}>{t('navbar.experience')}</a></li>
                    <li><a href="#projects" onClick={handleMenu}>{t('navbar.projects')}</a></li>
                    <li><a href="#contact" onClick={handleMenu}>{t('navbar.contact')}</a></li>
                    <li className="mobile-lang-toggle"><LanguageToggle /></li>
                </div>
            </div>
        </nav>
    );
}

export default NavBarMobile;