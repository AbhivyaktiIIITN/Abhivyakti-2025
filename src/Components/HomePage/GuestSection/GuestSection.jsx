import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import "./guestsection.css";
import cardsData from "./GuestData";
import aboutPic from "/assets/HomePage/Guests/about.png";
import gh from "/assets/HomePage/Guests/gh.png";
import "../../../css/font.css";
import { FaInstagram } from "react-icons/fa";

const GuestSection = () => {
    const sectionRef = useRef(null);
    const typedRef = useRef(null);
    const [animate, setAnimate] = useState(false);
    const [flippedCardIndex, setFlippedCardIndex] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                }
            },
            { threshold: 0.2 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ["More Coming Soon"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    const handleCardClick = (index) => {
        setFlippedCardIndex((prevIndex) =>
            prevIndex === index ? null : index,
        );
    };

    const handleMouseLeave = () => {
        setFlippedCardIndex(null);
    };

    const isOdd = cardsData.length % 2 !== 0;
    const firstCard = isOdd ? cardsData[0] : null;
    const remainingCards = isOdd ? cardsData.slice(1) : cardsData;

    return (
        <div
            className="guest-container urbanist-font font-normal"
            id="guests"
            ref={sectionRef}
        >
            <div className="header-wrapper">
                <img
                    src={gh}
                    alt="Guest Header"
                    className={`header ${animate ? "slide-in" : ""}`}
                />
            </div>
            {firstCard && (
                <div
                    className={`card single-card ${flippedCardIndex === 0 ? "flipped" : ""}`}
                    onClick={() => handleCardClick(0)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="card-inner">
                        <div className="card-front">
                            <img src={firstCard.image} alt="Guest" />
                        </div>
                        <div className="card-back">
                            <img src={aboutPic} alt="" />
                            <p>{firstCard.about}</p>
                            {firstCard.insta && (
                                <a
                                    href={firstCard.insta}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 text-[#e4405f] transition-transform duration-150 hover:scale-110 active:scale-90"
                                >
                                    <FaInstagram size={40} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
            <div className="card-row">
                {remainingCards.map((card, index) => (
                    <div
                        key={isOdd ? index + 1 : index}
                        className={`card ${flippedCardIndex === (isOdd ? index + 1 : index) ? "flipped" : ""}`}
                        onClick={() => handleCardClick(isOdd ? index + 1 : index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={card.image} alt={`Guest`} />
                            </div>
                            <div className="card-back">
                                <img src={aboutPic} alt="" />
                                <p>{card.about}</p>
                                {card.insta && (
                                    <a
                                        href={card.insta}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 text-[#e4405f] transition-transform duration-150 hover:scale-110 active:scale-90"
                                    >
                                        <FaInstagram size={24} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="soon text-4xl mt-[-50px]">
                <span ref={typedRef}></span>
            </div>
        </div>
    );
};

export default GuestSection;