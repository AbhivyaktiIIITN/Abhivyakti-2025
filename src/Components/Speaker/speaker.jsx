import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import "locomotive-scroll/dist/locomotive-scroll.css";
import "../../css/style.css";

gsap.registerPlugin(ScrollTrigger);
const Speaker = () => {
    const component = useRef();
    const horizontalRef = useRef();
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".card-wrapper");
            gsap.to(cards, {
                xPercent: () => -(100 * 4), // Moves content left
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

        <div data-scroll-container id="main" className="bg-blue-400">
            <div id="page2" ref={component}>
                <div className="horizontal" ref={horizontalRef}>
                    {/* <div className="loading">
                        <h4>// uploading collection...</h4>
                    </div> */}
                    <div className="w-96 flex flex-col justify-center items-center bg-red-500 card-wrapper text-white">
                        <p
                            className="text-2xl uppercase"
                        >
                            about theme
                        </p>
                        <p>
                            The Underground Art Movement challenges mainstream norms, using unconventional mediums like graffiti and digital art to address rebellion, identity, and social issues. It rejects commercialization, focusing on authentic self-expression and a DIY ethos. Rooted in counterculture, it influences fashion, music, and culture, evolving with the digital age to remain accessible and boundary-pushing.
                        </p>
                    </div>
                    {/* <div className="pcard card-wrapper">
                        <div className="img-div">
                            <img src="\galleryImages\IMG_0108.JPG" alt="" />
                        </div>

                    </div>
                    <div className="pcard card-wrapper">
                        <div className="img-div">
                            <img
                                src="\galleryImages\IMG_20231016_030245.jpg"
                                alt=""
                            />
                        </div>

                    </div>
                    <div className="pcard card-wrapper">
                        <div className="img-div">
                            <img src="\galleryImages\DSC00155.JPG" alt="" />
                        </div>

                    </div>
                    <div className="pcard card-wrapper">
                        <div className="img-div">
                            <img src="\galleryImages\DSC00166.JPG" alt="" />
                        </div>

                    </div>
                    <div className="pcard card-wrapper">
                        <div className="img-div">
                            <img src="\galleryImages\DSC04241.JPG" alt="" />
                        </div>

                    </div> */}

                </div>
            </div>
        </div>
    );
};
export default Speaker;