import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Hero from "../../Components/PageHero/Hero.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import "./team.css";
import teamsData from "./TeamData.js";
import "../../css/font.css";

function Team() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
    };

    return (
        <>
            <Navbar />
            <div className="team-container urbanist-font">
                <Hero page={"teams"} />
                {teamsData.map((team, index) => (
                    <motion.div
                        key={index}
                        className="team-section"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="name-box">
                            <motion.div className="line1" />
                            <motion.div className="line2" />
                            <div className="team-name">{team.name}</div>
                            <motion.div className="line2" />
                            <motion.div className="line1" />
                        </div>
                        <motion.div
                            className="members"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {team.members.map((member, idx) => (
                                <motion.div
                                    key={idx}
                                    className="member"
                                    variants={sectionVariants}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="member-name">
                                        {member.name}
                                    </div>
                                    <div className="member-role">
                                        {member.role}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Team;
