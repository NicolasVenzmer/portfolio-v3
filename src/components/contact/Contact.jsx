import React from 'react';
import './Contact.css';

const data = [
    {
        id: 1,
        icon: "./assets/email.png",
        alt: "email-icon",
        className: "icon contact-icon email-icon",
        href: "mailto:nicolasvenzmer@gmail.com",
        label: "nicolasvenzmer@gmail.com"
    },
    {
        id: 2,
        icon: "./assets/linkedin.png",
        alt: "linkedin-icon",
        className: "icon contact-icon",
        href: "https://www.linkedin.com/in/nicolas-alejandro-venzmer/",
        label: "LinkedIn"
    }
]

const Contact = () => {
    return (
        <section id="contact">
            <p className="section__text__p1">Get in Touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                {data.map((item) => (
                    <div className="contact-info-container" key={item.id}>
                        <img
                            src={item.icon}
                            alt={item.alt}
                            className={item.className}
                        />
                        <p><a href={item.href}>{item.label}</a></p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Contact;