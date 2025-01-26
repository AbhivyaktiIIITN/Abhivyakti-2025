import React, { useEffect, useRef, useState } from "react";
import "./guestsection.css";
import cardsData from "./GuestData";
import aboutPic from "/assets/HomePage/Guests/about.png";
import gh from "/assets/HomePage/Guests/gh.png";
import "../../../css/font.css"

const GuestSection = () => {
    const sectionRef = useRef(null);
    const [animate, setAnimate] = useState(false);
    const [flippedCardIndex, setFlippedCardIndex] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                }
                // else {
                //     setAnimate(false);
                // }
            },
            { threshold: 0.2 }
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
    const handleCardClick = (index) => {
        setFlippedCardIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleMouseLeave = () => {
        setFlippedCardIndex(null);
    };

    const isOdd = cardsData.length % 2 !== 0;
    const firstCard = isOdd ? cardsData[0] : null;
    const remainingCards = isOdd ? cardsData.slice(1) : cardsData;

    return (
        <div className="guest-container urbanist-font" id="guests" ref={sectionRef}>
            <div className="header-wrapper">
                <img
                    src={gh}
                    alt="Guest Header"
                    className={`header ${animate ? "slide-in" : ""}`}
                />
            </div>
            <div className="soon text-4xl mt-16">To be Revealed Soon</div>
            {/* {firstCard && (
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
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default GuestSection;