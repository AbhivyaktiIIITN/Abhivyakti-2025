import React, { useEffect, useRef, useState } from "react";
import "./sponsorsection.css";
import { SponsorsData } from "./sponsorsData";
import sh from "/assets/HomePage/Sponsors/sh.png";

import MonaLisaAndHand from "./MonaLisaAndHand";
import DaVinciAndHand from "./DaVinciAndHand";

import "../../../css/font.css";

function SponsorsSection() {
    const sectionRef = useRef(null);
    const [animate, setAnimate] = useState(false);

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
            { threshold: 0.5 },
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

    return (
        <div
            ref={sectionRef}
            className="sponsor-container overflow-hidden urbanist-font font-normal"
            id="sponsors"
        >
            {/* <TempComponent /> */}
            <div div className="wrapper pb-12 relative ">
                <MonaLisaAndHand animate={animate} />
                <DaVinciAndHand animate={animate} />
                <div className="text">
                    <img
                        src={sh}
                        alt=""
                        className={`header ${animate ? "slide-in" : ""}`}
                    />
                </div>
                <div className="marquee top-marquee ">
                    <div className="marquee-group cursor-pointer">
                        {SponsorsData.left.map((el, idx) =>
                            el.link ? (
                                <a key={idx} href={el.link} target="_blank" rel="noopener noreferrer">
                                    <div className="image-group">
                                        <img
                                            src={el.image}
                                            alt={`company-${idx}`}
                                            className="simage"
                                        />
                                    </div>
                                </a>
                            ) : (
                                <div key={idx} className="image-group">
                                    <img
                                        src={el.image}
                                        alt={`company-${idx}`}
                                        className="simage"
                                    />
                                </div>
                            )
                        )}

                    </div>
                    <div className="marquee-group cursor-pointer">
                        {SponsorsData.left.map((el, idx) =>
                            el.link ? (
                                <a key={idx} href={el.link} target="_blank" rel="noopener noreferrer">
                                    <div className="image-group">
                                        <img
                                            src={el.image}
                                            alt={`company-${idx}`}
                                            className="simage"
                                        />
                                    </div>
                                </a>
                            ) : (
                                <div key={idx} className="image-group">
                                    <img
                                        src={el.image}
                                        alt={`company-${idx}`}
                                        className="simage"
                                    />
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className="marquee bottom-marquee">
                    <div className="marquee-group reverse cursor-pointer">
                        {SponsorsData.right.map((el, idx) =>
                            el.link ? (
                                <a key={idx} href={el.link} target="_blank" rel="noopener noreferrer">
                                    <div className="image-group">
                                        <img
                                            src={el.image}
                                            alt={`company-${idx}`}
                                            className="simage"
                                        />
                                    </div>
                                </a>
                            ) : (
                                <div key={idx} className="image-group">
                                    <img
                                        src={el.image}
                                        alt={`company-${idx}`}
                                        className="simage"
                                    />
                                </div>
                            )
                        )}
                    </div>
                    <div className="marquee-group reverse delay cursor-pointer">
                        {SponsorsData.right.map((el, idx) =>
                            el.link ? (
                                <a key={idx} href={el.link} target="_blank" rel="noopener noreferrer">
                                    <div className="image-group">
                                        <img
                                            src={el.image}
                                            alt={`company-${idx}`}
                                            className="simage"
                                        />
                                    </div>
                                </a>
                            ) : (
                                <div key={idx} className="image-group">
                                    <img
                                        src={el.image}
                                        alt={`company-${idx}`}
                                        className="simage"
                                    />
                                </div>
                            )
                        )}
                    </div>
                </div >
            </div >
        </div >
    );
}

export default SponsorsSection;