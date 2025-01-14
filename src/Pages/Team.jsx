import React, { useEffect, useState } from 'react';
import { useAnimate } from 'framer-motion';
import Navbar from '../Components/Navbar/Navbar';
import '../css/team.css';
import teamsData from "../assets/Data/TeamData.js";
import t1 from '/assets/TeamPage/t1.png';
import t2 from '/assets/TeamPage/t2.png';
import t3 from '/assets/TeamPage/t3.png';
import t4 from '/assets/TeamPage/t4.png';
import t5 from '/assets/TeamPage/t5.png';
import t6 from '/assets/TeamPage/t6.png';
import Hero from '../Components/PageHero/Hero.jsx';

function Team() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    // const [startAnimation, setStartAnimation] = useState(false);
    // const [scope, animate] = useAnimate();

    // const onMouseEnter = async () => {
    //     setStartAnimation(true);

    //     await animate("#hand", { left: '2.5rem', top: '6rem' }, { duration: 0.5 });
    //     await animate("#grafitti", { top: 0, left: '10rem' }, { duration: 0.5 });
    //     animate("#hand", { left: '-50rem', top: '500px' }, { duration: 1 });
    //     await animate("#arrow", { top: '100px', rotate: 360, left: '19rem' }, { duration: 0.5 });
    //     await animate("#team", { top: '590px', rotate: 360, left: '54rem' }, { duration: 0.5 });
    //     animate("#events", { bottom: '10rem', left: '51rem', rotate: 0, opacity: 1 }, { duration: 0.5 });
    // };

    // const onMouseLeave = async () => {
    //     setStartAnimation(false);

    //     await animate("#hand", { left: '2.5rem', top: '6rem' }, { duration: 0.5 });
    //     animate("#hand", { left: '-50rem', top: '500px' }, { duration: 0.7 });
    //     animate("#grafitti", { top: '500px', left: "-50rem" }, { duration: 0.7 });
    //     animate("#arrow", { top: '500px', left: "-50rem" }, { duration: 0.7 });
    //     animate("#team", { top: '500px', left: "-50rem" }, { duration: 0.7 });
    //     await animate("#events", { bottom: '500px', left: '-50rem' }, { duration: 0.7 });

    //     animate("#arrow", { top: '-1000px', left: "19rem", rotate: 180 }, { duration: 0 });
    //     animate("#events", { bottom: '10rem', left: '33rem', rotate: 20, opacity: 0 }, { duration: 0 });
    // };

    return (
        <>
            <Navbar />
            <div className="team-container">
                {/* <div className="animation w-screen h-screen flex flex-col justify-center items-center"
                    ref={scope}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}>
                    <img
                        className="w-1/2 z-40"
                        src={t1} alt="Main Hero"
                    />
                    <img
                        className="w-1/2 z-10 absolute mt-6 ml-2"
                        src={t2} id="shadow" alt="Shadow"
                    />
                    <img
                        className="w-80 z-50 absolute top-[500px] left-[-50rem] rotate-[60deg]"
                        src={t3} id="hand" alt="Hand"
                    />
                    <img
                        className="w-1/2 z-20 absolute left-[-50rem] top-[500px]"
                        src={t4} id="grafitti" alt="Grafitti"
                    />
                    <img
                        className="w-[35rem] z-20 absolute left-[19rem] top-[-1000px] rotate-180 drop-shadow-arrow"
                        src={t5} id="arrow" alt="Arrow"
                    />
                    <img
                        className="w-[10rem] z-10 absolute left-[50rem] top-[-100px] rotate-180"
                        src={t6} id="team" alt="Team"
                    />
                </div> */}
                <Hero page={"teams"}/>
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