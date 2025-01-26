import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { speakers } from "./speakerData";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../../../css/font.css";
import "./speaker.css";

const SpeakerHorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-87%"]);

    return (
        <section ref={targetRef} className="relative h-[550vh] urbanist-font font-normal">
            <div className="sticky top-0 flex md:h-[100vh] sm:h-[100vh] items-center overflow-scroll no-scrollbar overflow-x-hidden overflow-y-hidden">
                <motion.div
                    style={{ x }}
                    className="flex gap-4 items-center w-fit h-full sm:mt-20 md:mt-16"
                >
                    <div className="sm:w-[1000px] w-[95vw] h-[80vh] flex flex-col justify-center items-center urbanist-font text-white sm:ml-40 md:ml-20 mr-10">
                        <p className="text-5xl text-center sm:text-6xl md:text-8xl capitalize sm:mb-10 md:mb-4 gradient-text min-w-[200px] w-full">
                            About Theme
                        </p>
                        <p className="text-base sm:text-xl md:text-2xl font-normal p-2 text-justify">
                            {/* The Underground Art Movement is a celebration of bold and rebellious creativity that thrives beyond mainstream platforms and conventions. It is a tribute to the power of art born in the streets, back alleys, and hidden urban corners, where self-expression is raw, unfiltered, and unapologetically authentic. This movement challenges societal norms and pushes boundaries by using unconventional mediums like graffiti, street murals, digital art, and urban installations to voice themes of rebellion, identity, and pressing social issues. */}
                            {/* The Underground Art Movement rejects commercialization, embracing a DIY ethos that values authenticity and individuality. It amplifies underrepresented voices, fostering community and inspiring trends in fashion, music, and art. Rooted in counterculture, it adapts to the digital age to remain innovative, boundary-pushing, and accessible, symbolizing freedom, creativity, and the courage to defy expectations. */}
                            The Underground Art Movement is a celebration of
                            bold and rebellious creativity that thrives beyond
                            mainstream platforms and conventions. It is a
                            tribute to the power of art born in the streets,
                            back alleys, and hidden urban corners, where
                            self-expression is raw, unfiltered, and
                            unapologetically authentic.This Movement challenges
                            societal norms using unconventional mediums like
                            graffiti, digital art, and urban installations to
                            highlight themes of rebellion, identity, and social
                            issues. Rejecting commercialization, it embraces a
                            DIY ethos, amplifies underrepresented voices, and
                            influences trends in fashion, music, and art. Rooted
                            in counterculture, it evolves with the digital age,
                            symbolizing freedom, creativity, and defiance.
                        </p>
                    </div>
                    <div className="w-[500px] sm:w-[1000px] h-[90vh] sm:ml-56 flex items-center justify-center sm:mt-16 md:mt-8">
                        <img
                            className="sm:h-[40vh] w-auto md:h-[80vh] aspect-auto"
                            src="/assets/HomePage/HorizontalScroll/pastGlimpse/1.JPG"
                            alt="gallery image"
                        />
                    </div>
                    <div className="w-[500px] sm:w-[790px] h-[80vh] flex items-center ">
                        <p className="text-5xl sm:text-8xl text-white capitalize whitespace-nowrap urbanist-font">
                            past glimpses
                        </p>
                    </div>
                    <div className="md:w-auto sm:w-[90vw] sm:h-[40vh] md:h-[80vh] grid grid-cols-1 sm:grid-cols-1 gap-2">
                        <div className="w-full h-1/4 grid grid-cols-3 gap-2 items-center">
                            <img
                                className="aspect-video w-52 h-auto md:w-auto md:h-60"
                                src="/assets/HomePage/HorizontalScroll/pastGlimpse/2.JPG"
                                alt="gallery image"
                            />
                            <img
                                className="aspect-video w-52 h-auto md:w-auto md:h-60"
                                src="/assets/HomePage/HorizontalScroll/pastGlimpse/3.JPG"
                                alt="gallery image"
                            />
                            <img
                                className="aspect-video w-52 h-auto md:w-auto md:h-60"
                                src="/assets/HomePage/HorizontalScroll/pastGlimpse/4.JPG"
                                alt="gallery image"
                            />
                        </div>
                        <div className="w-fullh-1/2 grid grid-cols-3 gap-2">
                            <img
                                className="aspect-video w-52 h-auto md:w-auto md:h-60"
                                src="/assets/HomePage/HorizontalScroll/pastGlimpse/5.JPG"
                                alt="gallery image"
                            />
                            <img
                                className="aspect-video w-52 h-auto md:w-auto md:h-60"
                                src="/assets/HomePage/HorizontalScroll/pastGlimpse/6.JPG"
                                alt="gallery image"
                            />
                            <img
                                className=" aspect-video w-52 h-auto md:w-auto md:h-60"
                                src="/assets/HomePage/HorizontalScroll/pastGlimpse/7.jpg"
                                alt="gallery image"
                            />
                        </div>
                    </div>
                    {/* {speakers.map((speaker, index) => {
                        return (
                            <div
                                className="md:w-[80vw] w-[100vw] flex justify-between items-center card-wrapper sm:ml-20 sm:mr-20 mr-10"
                                key={index}
                            >
                                <div className="w-1/2 h-full flex flex-col urbanist-font text-white p-10 gap-5 ">
                                    <p className="text-3xl sm:text-7xl capitalize">{speaker.name}</p>
                                    <p className="text-base sm:text-3xl mt-2 font-normal">{speaker.about}</p>
                                    <div className="border-l-4 sm:border-l-8 flex mt-2 sm:pl-10 pl-5 gap-2 sm:text-3xl text-xl">
                                        <a href={speaker.insta} target="_blank" rel="noreferrer">
                                            <FaInstagram />
                                        </a>
                                        <a href={speaker.linkedin} target="_blank" rel="noreferrer">
                                            <FaLinkedin />
                                        </a>
                                        <a href={speaker.facebook} target="_blank" rel="noreferrer">
                                            <FaFacebook />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src={speaker.image}
                                        alt=""
                                        className="img-radial-gradient"
                                    />
                                </div>

                            </div>
                        );
                    })} */}
                    <div className="sm:w-0 sm:h-0 w-40 h-full"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default SpeakerHorizontalScrollCarousel;
