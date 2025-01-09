import React, { useEffect, useRef, useState } from 'react';
import './eventssection.css';
import tl from '/assets/HomePage/Events/tl.png';
import subtxt from '/assets/HomePage/Events/subtxt.png';
import cb1 from '/assets/HomePage/Events/cb3.png';
import cb2 from '/assets/HomePage/Events/cb3.png';
import cb3 from '/assets/HomePage/Events/cb3.png';
import cb4 from '/assets/HomePage/Events/cb3.png';
import cb5 from '/assets/HomePage/Events/cb3.png';
import cb6 from '/assets/HomePage/Events/cb3.png';

const EventsSection = () => {
    const sectionRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const [flippedCards, setFlippedCards] = useState({});
    const [animate, setAnimate] = useState(false);
    const animationDelay = 1000;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                }
                else {
                    setAnimate(false);
                }
            },
            { threshold: 0.5 }
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
        setFlippedCards({ [index]: !flippedCards[index] });
    };

    const scrollLeft = () => {
        if (Object.keys(flippedCards).length > 0) {
            setFlippedCards({});
            setTimeout(() => {
                scrollContainerRef.current.scrollBy({
                    left: -getCardWidth(),
                    behavior: 'smooth',
                });
            }, animationDelay);
        }
        else {
            scrollContainerRef.current.scrollBy({
                left: -getCardWidth(),
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (Object.keys(flippedCards).length > 0) {
            setFlippedCards({});
            setTimeout(() => {
                scrollContainerRef.current.scrollBy({
                    left: getCardWidth(),
                    behavior: 'smooth',
                });
            }, animationDelay);
        }
        else {
            scrollContainerRef.current.scrollBy({
                left: getCardWidth(),
                behavior: 'smooth',
            });
        }
    };

    const getCardWidth = () => {
        const card = scrollContainerRef.current.querySelector('.card');
        return card ? card.offsetWidth : 0;
    };

    const cardImages = [cb1, cb2, cb3, cb4, cb5, cb6];

    return (
        <div className="events-section" id="event" ref={sectionRef}>
            <div className="title">
                <img src={tl} alt="" className={`header ${animate ? 'slide-in' : ''}`} />
                <img src={subtxt} alt="" className={`sub ${animate ? 'fade-in' : ''}`} />
            </div>
            <div className="card-scroll-wrapper">
                <button className="scroll-button left" onClick={scrollLeft}>
                    &#8249;
                </button>
                <div className="card-scroll-container" ref={scrollContainerRef}>
                    {cardImages.map((image, i) => (
                        <div
                            key={i}
                            className={`card card-${i + 1} ${flippedCards[i] ? 'flipped' : ''}`}
                            onClick={() => handleCardClick(i)}
                        >
                            <div className="card-inner">
                                <div className={`card-front cf${i + 1} ch${i + 1}`}></div>
                                <img src={image} alt="" className={`card-back cb${i + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>
                <button className="scroll-button right" onClick={scrollRight}>
                    &#8250;
                </button>
            </div>
        </div>
    );
};

export default EventsSection;