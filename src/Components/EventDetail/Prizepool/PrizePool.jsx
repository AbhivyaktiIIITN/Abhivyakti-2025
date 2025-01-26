import React, { useEffect, useRef, useState } from "react";
import PrizePoolImg from "/assets/EventDetail/Prizepool.png";
import "../Prizepool/prizePool.css";
import "../../../css/font.css";

const PrizePool = ({ prizeData, additionalPrizes }) => {
    const sectionRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                } else {
                    setAnimate(false);
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
    return (
        <div className="w-full h-fit flex flex-col items-center justify-center relative mt-60 urbanist-font">
            <div
                className="text-white py-10 px-4 w-full lg:w-1/2 "
                ref={sectionRef}
            >
                <div
                    className={`w-full flex flex-wrap justify-center opacity-0 header ${
                        animate ? "slide-in" : ""
                    }`}
                >
                    <img
                        src={PrizePoolImg}
                        alt=""
                        className="h-52 sm:h-72 mb-12"
                    />
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    {prizeData.map((prize, index) => (
                        <div
                            className="flex flex-col items-center "
                            key={index}
                        >
                            <img
                                src={prize.imageSrc}
                                alt={`${prize.position} Place`}
                                className="w-32 h-32 md:w-44 md:h-44 hover:scale-110"
                            />
                            <h2 className="text-xl md:text-xl font-bold mt-4">
                                {prize.position}
                            </h2>
                            <p className="text-lg md:text-2xl font-semibold mt-2 p-2">
                                {prize.prizeAmount}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Additional Prizes */}
                <p className="text-center mt-10 text-sm md:text-xl grid grid-cols-1 gap-1">
                    <span className="font-bold text-2xl">
                        Additional Prizes:{" "}
                    </span>
                    <span className="space-x-3">
                        {additionalPrizes.map((prize, index) => (
                            <span key={index}>{prize}</span>
                        ))}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default PrizePool;
