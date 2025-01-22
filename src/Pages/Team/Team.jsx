import React, { useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import teamsData from "../../assets/Data/TeamData.js";
import Hero from '../../Components/PageHero/Hero.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import './team.css';

function Team() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <>
            <Navbar />
            <div className="team-container">
                <Hero page={"teams"} />
                {teamsData.map((team, index) => (
                    <div key={index} className="team-section">
                        <div className="name-box">
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="team-name">{team.name}</div>
                            <div className="line2"></div>
                            <div className="line1"></div>
                        </div>
                        <div className="members">
                            {team.members.map((member, idx) => (
                                <div key={idx} className="member">
                                    <div className="member-name">{member.name}</div>
                                    <div className="member-role">{member.role}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Team;