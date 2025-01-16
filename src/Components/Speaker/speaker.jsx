import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { speakers } from "./data";
import "../../css/style.css";
import "../../css/font.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);
const Speaker = () => {
    const component = useRef();
    const horizontalRef = useRef();
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".card-wrapper");
            gsap.to(cards, {
                xPercent: () => -(102 * 4),
                ease: "none",
                scrollTrigger: {
                    trigger: component.current,
                    start: "top top", // Start when the section reaches the top of the viewport

                    end: () => `+=${horizontalRef.current.scrollWidth / 10}`, // End after full scroll

                    scrub: true, // Smooth scrolling
                    pin: true, // Pinned scroll
                    // markers: true
                },
            });
        }, component);
        return () => ctx.revert();
    });
    return (

        <div data-scroll-container id="main" className="bg-blue-300">
            <div id="page2" ref={component} className="bg-green-200">
                <div className="horizontal bg-purple-400" ref={horizontalRef}>
                    <div className="w-[600px] h-full flex flex-col justify-center items-center ml-96 card-wrapper urbanist-font text-white">
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
                    <div className="w-[1000px] ml-72 grayscale card-wrapper">
                        <img
                            className="w-full aspect-auto"
                            src="\assets\HomePage\temp.jpeg"
                            alt="gallery image"
                        />
                    </div>
                    <div className="w-[500px] card-wrapper">
                        <p
                            className="text-9xl text-white capitalize whitespace-nowrap urbanist-font"
                        >
                            past glimpses
                        </p>
                    </div>
                    <div className="w-[1000px] h-full flex flex-col gap-2 grayscale card-wrapper">
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
                        </div>

                    </div>

                    {
                        speakers.map((speaker, index) => {
                            return (
                                <div className="w-[1200px] flex justify-between mr-5 card-wrapper" key={index}>
                                    <div className="w-1/2 h-full flex flex-col urbanist-font text-white p-10">
                                        <p
                                            className="text-7xl capitalize"
                                        >
                                            {speaker.name}
                                        </p>
                                        <p
                                            className="text-3xl mt-2 font-normal"
                                        >
                                            {speaker.about}
                                        </p>
                                        <div
                                            className="border-l-8 flex mt-2 pl-10 gap-2 text-3xl"
                                        >
                                            <a href={speaker.insta} target="_blank" rel="noreferrer"><FaInstagram /></a>
                                            <a href={speaker.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
                                            <a href={speaker.facebook} target="_blank" rel="noreferrer"><FaFacebook /></a>
                                        </div>
                                    </div>
                                    <div >
                                        <img src={speaker.image} alt="" className="img-radial-gradient"/>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div >
    );
};
export default Speaker;