import React, { useEffect } from 'react';
import teamsData from "../assets/TeamPage/TeamData";
import '../css/team.css';
import t1 from '../assets/TeamPage/animation/t1.png';
import t2 from '../assets/TeamPage/animation/t2.png';
import t3 from '../assets/TeamPage/animation/t3.png';
import t4 from '../assets/TeamPage/animation/t4.png';
import t5 from '../assets/TeamPage/animation/t5.png';
import t6 from '../assets/TeamPage/animation/t6.png';
import Navbar from '../Components/Navbar/Navbar';

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
                <img src={t5} alt="ABHIVYAKTI" className="animation" />
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
        </>
    );
}

export default Team;