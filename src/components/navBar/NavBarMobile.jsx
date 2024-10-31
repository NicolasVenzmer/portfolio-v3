import React from 'react';
import './NavBarMobile.css';

const NavBarMobile = () => {
    const handleMenu = () => {
        const menu = document.querySelector('.menu-links');
        const icon = document.querySelector('.hamburger-icon');
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }
    return (
        <nav id="hamburger-nav">
            <div className="logo">Welcome</div>
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