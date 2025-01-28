import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { members } from "./members.js";
import "./developers.css";
import "../../css/font.css";
import Loader from "../../Components/Loader/loader.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

function Developers() {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    if (loading) {
        return (
            <Loader />
        )
    }

    return (
        <div id="app" className="dev-container">
            <Navbar />
            <h1 className="title">CONTRIBUTORS</h1>
            <div className="members">
                <div className="sec-1">
                    {members.slice(0, 2).map((dev, index) => (
                        <Card key={index} dev={dev} />
                    ))}
                </div>
                <div className="sec-2">
                    {members.slice(2, 6).map((dev, index) => (
                        <Card key={index + 3} dev={dev} />
                    ))}
                </div>
                <div className="sec-3">
                    {members.slice(6, 7).map((dev, index) => (
                        <Card key={8} dev={dev} />
                    ))}
                </div>
            </div>
            <div className="mt-8"><Footer /></div>
        </div>
    );
}

const Card = ({ dev }) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [mousePos, setMousePos] = useState({ mouseX: 0, mouseY: 0 });
    const cardRef = useRef(null);
    const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);

    useEffect(() => {
        const card = cardRef.current;
        setDimensions({
            width: card.offsetWidth,
            height: card.offsetHeight,
        });
    }, []);

    const mousePX = mousePos.mouseX / dimensions.width;
    const mousePY = mousePos.mouseY / dimensions.height;

    const cardStyle = {
        transform: `rotateY(${mousePX * 30}deg) rotateX(${mousePY * -30}deg)`,
    };

    const cardBgTransform = {
        transform: `translateX(${mousePX * -40}px) translateY(${mousePY * -40}px)`,
    };

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        setMousePos({
            mouseX: e.pageX - card.offsetLeft - dimensions.width / 2,
            mouseY: e.pageY - card.offsetTop - dimensions.height / 2,
        });
    };

    const handleMouseEnter = () => {
        clearTimeout(mouseLeaveDelay);
    };

    const handleMouseLeave = () => {
        setMouseLeaveDelay(
            setTimeout(() => {
                setMousePos({ mouseX: 0, mouseY: 0 });
            }, 1000),
        );
    };

    return (
        <div
            className="card-wrap urbanist-font"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={cardRef}
        >
            <div className="card" style={cardStyle}>
                <div
                    className="card-bg"
                    style={{
                        ...cardBgTransform,
                        backgroundImage: `url(${dev.dataImage})`,
                    }}
                ></div>
                <div className="card-info">
                    <h1>{dev.role}</h1>
                    <p>{dev.name}</p>
                    <div className="icons">
                        <a
                            href={dev.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="2x"
                                className="sicon"
                            />
                        </a>
                        <a
                            href={dev.linkedinLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                size="2x"
                                className="sicon"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Developers;