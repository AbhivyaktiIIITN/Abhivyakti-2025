import React, { useState, useRef, useEffect } from "react";
import FaqImg from "/assets/EventDetail/FAQ.png";
import "../FAq/faq.css";
import "../../../css/font.css"

const FAQ = ({ items }) => {
    const sectionRef = useRef(null);
    const [animate, setAnimate] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                } else {
                    setAnimate(false);
                }
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

    return (
        <div className="w-full h-fit flex flex-col items-center text-white py-10 px-4 relative urbanist-font" ref={sectionRef}>
            <div className={`w-full flex flex-wrap justify-center opacity-0 header ${animate ? "slide-in" : ""
                }`}>
                <img src={FaqImg} alt="" className="h-52 sm:h-80 mb-14" />
            </div>
            <div className="w-full max-w-3xl space-y-4">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-[22px] overflow-hidden cursor-pointer"
                        onClick={() => toggleFAQ(index)}

                    >
                        <div
                            className="flex justify-between items-center sm:px-10 sm:py-4 px-5 py-3"

                        >
                            <h2 className="text-base md:text-xl font-semibold p-1">{item.question}</h2>
                            <span
                                className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </div>
                        <div
                            className={`transition-all duration-300 ease-in overflow-hidden ${openIndex === index ? "block" : "hidden"
                                }`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="p-8 text-gray-300">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;