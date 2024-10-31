import React, {useEffect, useRef} from 'react';
import './NavBarDesktop.css';
import {init} from "ityped";

const NavBarDesktop = () => {
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
            <div>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBarDesktop;