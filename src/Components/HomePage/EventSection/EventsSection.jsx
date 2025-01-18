import React, { useEffect, useRef, useState } from 'react';
import './eventssection.css';
import tl from '/assets/HomePage/Events/tl.png';
import subtxt from '/assets/HomePage/Events/subtxt.png';
import head from '/assets/HomePage/Events/head.png';
import { eventData } from './eventsData';

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
                    {eventData.map(({ cardId, gradient, events, exploreLink }) => (
                        <div
                            key={cardId}
                            className={`card card-${cardId} ${flippedCards[cardId] ? 'flipped' : ''}`}
                            onClick={() => handleCardClick(cardId)}
                        >
                            <div className="card-inner">
                                <div className={`card-front cf${cardId} ch${cardId}`}></div>
                                <div className={`card-back cb${cardId}`}>
                                    <div className="details">
                                        <img src={head} alt="Events" className="event-head" />
                                        <div className="evnt">
                                            {events.map((event, idx) => (
                                                <div key={idx}>
                                                    <h4 className="evnt-name">{event.name}</h4>
                                                    <p className="evnt-desc">{event.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex flex-row justify-evenly items-center w-full">
                                            <a href="/event" style={{ background: gradient }} rel="noopener noreferrer">
                                                <button>
                                                    EXPLORE
                                                </button>
                                            </a>
                                            <a href={exploreLink} target="_blank" rel="noopener noreferrer">
                                                <button>REGISTER</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
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