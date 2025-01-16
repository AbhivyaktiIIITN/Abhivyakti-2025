import React from 'react';
import heading from "/assets/HomePage/About/heading.png";
import julius from "/assets/HomePage/About/julius.png";
import './aboutsection.css';

function AboutSection() {
    return (
        <div className="about-container" id='about'>
            <div className="about-content">
                <div><img src={heading} alt="" /></div>
                <p className="data">Abhivyakti, IIIT Nagpur's annual cultural event, is a dynamic fusion of art, talent, and diversity. It provides a platform for students to express their creativity and celebrate their uniqueness. From intercollege competitions to inspiring speakers, Abhivyakti is a journey from passion to stardom. It's a path where persistence conquers obstacles, leading to a constellation of success.</p>
            </div>
            <div className="about-image">
                <img src={julius} alt="About Us" />
            </div>
        </div>
    );
}

export default AboutSection;