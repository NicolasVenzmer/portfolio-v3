import React from 'react';
import './Footer.css';
import { useLanguage } from '../../context/LanguageContext';

function Footer(props) {
    const { t } = useLanguage();

    return (
        <footer>
            <nav>
                <div className="nav-links-container">
                    <ul className="nav-links">
                        <li><a href="#profile">{t('footer.home')}</a></li>
                        <li><a href="#about">{t('footer.about')}</a></li>
                        <li><a href="#experience">{t('footer.experience')}</a></li>
                        <li><a href="#projects">{t('footer.projects')}</a></li>
                        <li><a href="#contact">{t('footer.contact')}</a></li>
                    </ul>
                </div>
            </nav>
            <p>{t('footer.copyright')}</p>
        </footer>
    );
}

export default Footer;