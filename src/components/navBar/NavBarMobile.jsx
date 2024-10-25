import React, {useEffect, useRef} from 'react';
import './NavBarMobile.css';
import {init} from "ityped";

const NavBarMobile = (props) => {
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
                "Добро пожаловать",
                "欢迎",
                "ようこそ",
                "환영합니다",
                "أهلاً وسهلاً",
                "स्वागत है",
                "Hoş geldiniz",
                "ยินดีต้อนรับ"
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
            <div className="logo" ref={textRef}></div>
            <div className="hamburger-menu">
                <div className="hamburger-icon" onClick={handleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="menu-links">
                    <li><a href="#about" onClick={handleMenu}>About</a></li>
                    <li><a href="#experience" onClick={handleMenu}>Experience</a></li>
                    <li><a href="#projects" onClick={handleMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={handleMenu}>Contact</a></li>
                </div>
            </div>
        </nav>
    );
}

export default NavBarMobile;