import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { speakers } from "./data";
import "../../css/style.css";
import "../../css/font.css";

import PastSpeakerCard from './PastSpeakerCard';

gsap.registerPlugin(ScrollTrigger);
const Speaker = () => {
    const component = useRef();
    const horizontalRef = useRef();
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".card-wrapper");
            gsap.to(cards, {
                xPercent: () => -(100 * cards.length),
                ease: "none",
                scrollTrigger: {
                    trigger: component.current,
                    start: "top top", // Start when the section reaches the top of the viewport

                    end: () => `+=${horizontalRef.current.scrollWidth / 20}`, // End after full scroll

                    scrub: true, // Smooth scrolling
                    pin: true, // Pinned scroll
                    // markers: true
                },
            });
        }, component);
        return () => ctx.revert();
    });
    return (
        <>


            <div data-scroll-container className="bg-blue-300 h-auto w-full overflow-hidden mt-24">
                <div id="page2" ref={component} className="relative bg-green-200 pt-12 flex items-center justify-center">
                    <div className="horizontal bg-purple-400 absolute" ref={horizontalRef}>
                        <div className="max-w-[600px] w-auto h-full flex flex-col ml-36 justify-center card-wrapper items-center bg-red-600 card-wrapper urbanist-font text-white">
                            <p
                                className="text-8xl capitalize mb-10 gradient-text"
                            >
                                about theme
                            </p>
                            <p
                                className="text-3xl font-normal"
                            >
                                The Underground Art Movement challenges mainstream norms, using unconventional mediums like graffiti and digital art to address rebellion, identity, and social issues. It rejects commercialization, focusing on authentic self-expression and a DIY ethos. Rooted in counterculture, it influences fashion, music, and culture, evolving with the digital age to remain accessible and boundary-pushing.
                            </p>
                        </div>
                        <div className="w-[auto] max-w-[1000px] bg-blue-600 flex items-center justify-center h-full ml-72 grayscale card-wrapper">
                            <img
                                className="w-full aspect-auto"
                                src="\assets\HomePage\temp.jpeg"
                                alt="gallery image"
                            />
                        </div>
                        <div className="w-[auto] h-full bg-yellow-600 card-wrapper">
                            <p
                                className="text-9xl text-white capitalize whitespace-nowrap urbanist-font"
                            >
                                past glimpses
                            </p>
                        </div>
                        <div className="w-[100vw] h-full bg-red-500 grayscale card-wrapper">
                            {/* <div
                                className="w-full h-1/2 flex gap-2"
                            >
                                <img
                                    className="w-1/3 aspect-auto"
                                    src="\assets\HomePage\temp.jpeg"
                                    alt="gallery image"
                                />
                                <img
                                    className="w-1/3 aspect-auto"
                                    src="\assets\HomePage\temp.jpeg"
                                    alt="gallery image"
                                />
                                <img
                                    className="w-1/3 aspect-auto"
                                    src="\assets\HomePage\temp.jpeg"
                                    alt="gallery image"
                                />
                            </div>
                            <div
                                className="w-full h-1/2 flex gap-2"
                            >
                                <img
                                    className="w-1/3 aspect-auto"
                                    src="\assets\HomePage\temp.jpeg"
                                    alt="gallery image"
                                />
                                <img
                                    className="w-1/3 aspect-auto"
                                    src="\assets\HomePage\temp.jpeg"
                                    alt="gallery image"
                                />
                                <img
                                    className="w-1/3 aspect-auto"
                                    src="\assets\HomePage\temp.jpeg"
                                    alt="gallery image"
                                />
                            </div> */}

                        </div>

                        {
                            speakers.map((speaker, index) => {
                                return (
                                    <PastSpeakerCard speaker={speaker} index={index} />
                                )
                            })
                        }

                    </div>
                </div>
            </div >
        </>
    );
};
export default Speaker;