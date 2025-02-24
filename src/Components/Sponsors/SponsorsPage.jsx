import { useState } from "react";
import { motion } from 'framer-motion';
import "./SponsorsPage.css";

const SponsorsPage = ({ title, sponsors }) => {
    const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' });

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x: `${x}%`, y: `${y}%` });
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    };

    return (
        <div className="sponsor-section">
            <h3>{title}</h3>
            <div className="line"></div>
            <div className="sponsor-list">
                {sponsors.map((sponsor) =>
                    sponsor.images.map((sponsorData, idx) =>
                        sponsorData.link ? (
                            <a key={idx} href={sponsorData.link} target="_blank" rel="noopener noreferrer">
                                <motion.div
                                    className="sponsor-member"
                                    onMouseMove={handleMouseMove}
                                    style={{
                                        '--mouseX': mousePos.x, '--mouseY': mousePos.y
                                    }}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={cardVariants}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <img className="sponsor-img" src={sponsorData.img} alt="img" />
                                    <h4 style={{ wordSpacing: "5px" }}>{sponsorData.name.toUpperCase()}</h4>
                                </motion.div>
                            </a>
                        ) : (
                            <motion.div
                                className="sponsor-member"
                                key={idx}
                                onMouseMove={handleMouseMove}
                                style={{
                                    '--mouseX': mousePos.x, '--mouseY': mousePos.y
                                }}
                                initial="hidden"
                                whileInView="visible"
                                variants={cardVariants}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <img className="sponsor-img" src={sponsorData.img} alt="img" />
                                <h4 style={{ wordSpacing: "5px" }}>{sponsorData.name.toUpperCase()}</h4>
                            </motion.div>
                        )
                    )
                )}
            </div>
        </div>
    );
};

export default SponsorsPage;