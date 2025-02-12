import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { clubs } from "./data";
import "./clubSelector.css";
import "../../../css/font.css";
import { EventDropDownDetails } from "../../../data/Events/EventDropDown.data";

const ClubSelector = () => {
    const [clickedClub, setClickedClub] = useState(null);
    const [clubDropDown, setClubDropDown] = useState([]);
    const [hoverIndex, setHoverIndex] = useState(null);
    const [hoverEvent, setHoverEvent] = useState(null);
    const [animate, setAnimate] = useState(false);
    const [lastMouseEnterTime, setLastMouseEnterTime] = useState(0);
    const [eventCount, setEventCount] = useState(0);

    const mouseEnter = (e, index) => {
        const currentTime = Date.now();
        if (currentTime - lastMouseEnterTime < 1000) return;
        setLastMouseEnterTime(currentTime);

        e.target.style.zIndex = "50";
        e.target.style.transitionDelay = "0s";
        setHoverIndex(index);
        setHoverEvent(e);
        setAnimate(true);

        const artform = e.target.querySelector("#artform");
        const clubName = e.target.querySelector("#club-name");
        const image = e.target.querySelector("#image");

        artform.style.transitionDelay = "0s";
        clubName.style.transitionDelay = "0s";
        image.style.transitionDelay = "0s";

        image.style.display = "initial";

        if (window.matchMedia("(min-width: 768px)").matches) {
            e.target.style.width = "100%";
            e.target.style.left = "0";

            artform.style.bottom = "20rem";
            artform.style.left = "10.5rem";
            artform.style.rotate = "90deg";
            artform.style.fontSize = "2rem";

            clubName.style.bottom = "8rem";
            clubName.style.left = "10.5rem";
            clubName.style.right = "0rem";
            clubName.style.rotate = "90deg";
            clubName.style.fontSize = "12rem";
        } else {
            e.target.style.height = "100%";
            e.target.style.top = "0";

            artform.style.bottom = "24rem";
            artform.style.left = "3rem";
            artform.style.fontSize = "2rem";

            clubName.style.bottom = "19rem";
            clubName.style.left = "3rem";
            clubName.style.fontSize = "6rem";
        }
    };

    const mouseOut = (e, index) => {
        e.target.style.zIndex = "0";
        e.target.style.transitionDelay = "0.5s";

        setTimeout(() => {
            e.target.style.backgroundImage = `linear-gradient(140deg, white -10%, ${clubs[index].color})`;
        }, 500);

        setAnimate(false);

        const artform = e.target.querySelector("#artform");
        const clubName = e.target.querySelector("#club-name");
        const image = e.target.querySelector("#image");

        artform.style.transitionDelay = "0.5s";
        clubName.style.transitionDelay = "0.5s";
        image.style.transitionDelay = "0.5s";

        setTimeout(() => {
            image.style.display = "none";
            image.src = clickedClub.statue1;
            image.style.transform = "scaleX(1)";
        }, 500);

        if (window.matchMedia("(min-width: 768px)").matches) {
            e.target.style.width = `calc((100% / ${clubs.length}) - 2px)`;
            e.target.style.left = `calc((100% / ${clubs.length}) * ${index} + ${index * 2}px)`;

            artform.style.bottom = "25rem";
            artform.style.insetInlineEnd = "0";
            setTimeout(() => {
                artform.style.left = "initial";
            }, 500);
            artform.style.rotate = "0deg";
            artform.style.fontSize = "1rem";

            clubName.style.bottom = "4rem";
            clubName.style.left = "1.25rem";
            clubName.style.right = "0rem";
            clubName.style.rotate = "0deg";
            clubName.style.fontSize = "8rem";
        } else {
            e.target.style.height = `calc((100% / ${clubs.length}) - 2px)`;
            e.target.style.top = `calc((100% / ${clubs.length}) * ${index})`;

            artform.style.bottom = "4rem";
            artform.style.right = "0.75rem";
            setTimeout(() => {
                artform.style.left = "initial";
            }, 500);
            artform.style.fontSize = "1rem";

            clubName.style.bottom = "-0.5rem";
            clubName.style.left = "1.5rem";
            clubName.style.fontSize = "4.5rem";
        }

        setClickedClub(null);
    };

    const onClickSelector = (element, club) => {
        if (element.zIndex === "0" || element.style.zIndex !== "50") return;
        setEventCount(EventDropDownDetails[club.name].length);
        setClickedClub(club);
        setClubDropDown(EventDropDownDetails[club.name]);

        element.style.backgroundImage = `url(${club.bg}), linear-gradient(140deg, white -10%, ${club.color})`;
        element.style.backgroundPosition = "center";
        element.style.backgroundRepeat = "no-repeat";
        element.style.backgroundSize = "cover";

        const image = element.querySelector("#image");
        image.src = club.statue2;
    };

    return (
        <div className="w-screen min-h-screen h-auto flex-col place-items-center md:mt-52 overflow-x-hidden urbanist-font font-normal">
            <div
                className={`w-[95%] md:min-w-[768px] md:w-2/3 h-h-[${eventCount * 8}rem] xs:min-h-screen xs:h-[${eventCount * 12}rem] mb-40`}
                onMouseLeave={() => {
                    mouseOut(hoverEvent, hoverIndex);
                }}
            >
                <div className="w-full min-h-[600px] h-1/3 md:min-h-[500px] md:h-[65%] md:max-h-[650px] rounded-xl flex justify-between mb-2 items-center relative overflow-hidden">
                    {clubs.map((club, index) => (
                        <>
                            <SelectorCard
                                key={index}
                                club={club}
                                index={index}
                                mouseEnter={mouseEnter}
                                onClickSelector={onClickSelector}
                            />
                        </>
                    ))}
                </div>
                <AnimatePresence>
                    {clickedClub &&
                        clubDropDown.map((event, index) => (
                            <motion.div
                                key={index}
                                className="w-full h-32 xs:h-48 flex rounded-xl mb-2 backdrop-blur-100"
                                initial={{
                                    y: "-9rem",
                                    opacity: 0,
                                }}
                                animate={{
                                    y: "0",
                                    opacity: 1,
                                    transition: {
                                        duration: 0.2,
                                        delay: 0.18 * index,
                                    },
                                }}
                                exit={{
                                    y: "-9rem",
                                    opacity: 0,
                                    transition: {
                                        duration: 0.1,
                                        delay:
                                            0.08 *
                                            (clubDropDown.length - 1 - index),
                                    },
                                }}
                            >
                                <img
                                    className="h-full aspect-square rounded-s-xl"
                                    src={event.img}
                                />
                                <div className="w-full h-full flex flex-col gap-0 rounded-e-xl p-5 uppercase text-[#FDFDFB]">
                                    <div className="w-full flex justify-between font-light text-[10px] 2xs:text-[12px] text-[#C8C8C8]">
                                        <p>{event.mode}</p>
                                        <p>prize pool</p>
                                    </div>
                                    <div
                                        className={`-mt-0.5 xs:-mt-2 w-full flex justify-between font-bold text-sm ${event.title.length > 6 && "text-[0.65rem]"} ${event.title.length > 10 && "text-[0.49rem] leading-3"} 2xs:text-md xs:text-2xl sm:text-4xl`}
                                    >
                                        <p>{event.title}</p>
                                        <p className="flex items-baseline">
                                            <FaIndianRupeeSign className="text-[10px] sm:text-[20px] mr-[2px]" />
                                            {event.prizePool}
                                        </p>
                                    </div>
                                    <div className="-mt-0.5 xs:-mt-2 flex flex-col justify-between grow">
                                        <p className="font-normal text-[0.6rem] 2xs:text-xs xs:text-md text-wrap sm:text-xl">
                                            {event.type}
                                        </p>
                                        <div className="w-full sm:w-56 flex justify-between font-bold text-[0.5rem] 2xs:text-xs sm:text-[1rem]">
                                            <a
                                                className="border-white border-2 rounded-md px-3 py-1 xs:py-2"
                                                href={event.exploreLink}
                                                target="_blank"
                                                style={{
                                                    backgroundImage: `linear-gradient(to right, white -70%, ${clickedClub.exploreGradient})`,
                                                }}
                                            >
                                                explore
                                            </a>
                                            <a
                                                className="border-white border-2 rounded-md px-3 py-1 xs:py-2"
                                                href={event.unstopLink}
                                                target="_blank"
                                            >
                                                register
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

const SelectorCard = ({ club, index, mouseEnter, onClickSelector }) => {
    const ref = useRef(null);
    return (
        <div
            ref={ref}
            className="club-div md:h-full flex items-end justify-end rounded-xl absolute duration-500 cursor-pointer uppercase"
            style={{
                "--index": index,
                "--length": 6,
                backgroundImage: `linear-gradient(140deg, white -10%, ${club.color})`,
                width: `calc((100% / ${clubs.length}) - 2px)`, // dividing by the number of clubs minus the gap
                left: `calc((100% / ${clubs.length}) * ${index} + ${index * 2}px)`, // calculating position with gap
            }}
            onMouseEnter={(e) => mouseEnter(e, index)}
            onClick={(e) => onClickSelector(ref.current, club)}
        >
            <img
                className="w-[400px] md:w-[400px] -z-0 right-0 hidden bg-transparent"
                src={club.statue1}
                id="image"
                onClick={(e) => onClickSelector(e.target.parentElement, club)}
            />
            <p
                className="md:-rotate-90 absolute bottom-16 md:bottom-[25rem] right-3 md:end-0 duration-500 urbanist-font text-white text-[1rem] md:text-lg xl:text-xl drop-shadow-club-name bg-transparent"
                id="artform"
                onClick={(e) => onClickSelector(e.target.parentElement, club)}
            >
                {club.artform}
            </p>
            <p
                className="text-7xl md:text-9xl text-white drop-shadow-club-name md:-rotate-90 absolute -bottom-2 md:bottom-16 left-6 md:left-5 md:right-0 duration-500 humane-bold-font whitespace-nowrap bg-transparent"
                id="club-name"
                onClick={(e) => onClickSelector(e.target.parentElement, club)}
            >
                {club.name}
            </p>
        </div>
    );
};

export default ClubSelector;
