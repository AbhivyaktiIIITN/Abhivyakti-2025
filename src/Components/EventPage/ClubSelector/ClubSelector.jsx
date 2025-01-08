import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import "./clubSelector.css"

const ClubSelector = () => {

    const [clickedClub, setClickedClub] = useState(null)
    const [hoverIndex, setHoverIndex] = useState(null)
    const [hoverEvent, setHoverEvent] = useState(null)
    const [animate, setAnimate] = useState(false)

    const clubs = [
        {
            color: "#FE5013",
            exploreGradient: "",
            events: [
                {
                    title: "1"
                },
                {
                    title: "2"
                },
                {
                    title: "3"
                }
            ]
        },
        {
            color: "#FF006E",
            exploreGradient: "",
            events: [
                {
                    title: "1"
                },
                {
                    title: "2"
                },
                {
                    title: "3"
                }
            ]
        },
        {
            name: "estoria",
            artform: "drama",
            color: "#9747FF",
            exploreGradient: "#440977",
            events: [
                {
                    title: "1"
                },
                {
                    title: "2"
                },
                {
                    title: "3"
                }
            ]
        },
        {
            color: "#2237C6",
            exploreGradient: "",
            events: [
                {
                    title: "1"
                },
                {
                    title: "2"
                },
                {
                    title: "3"
                },
                {
                    title: "3"
                },
                {
                    title: "3"
                }
            ]
        },
        {
            color: "#34FA46",
            exploreGradient: "",
            events: [
                {
                    title: "1"
                },
                {
                    title: "2"
                },
                {
                    title: "3"
                }
            ]
        },
        {
            color: "#FAF100",
            exploreGradient: "",
            events: [
                {
                    title: "1"
                },
                {
                    title: "2"
                },
                {
                    title: "3"
                }
            ]
        }
    ];

    const mouseEnter = (e, index) => {
        e.target.style.width = '100%'
        e.target.style.left = '0'
        e.target.style.zIndex = '50'
        e.target.style.transitionDelay = '0s'
        setHoverIndex(index)
        setHoverEvent(e)
        setAnimate(true)

        const childs = e.target.querySelectorAll("p")

        childs.forEach((child, index) => {
            child.style.rotate = "90deg"
            child.style.transitionDelay = '0s'
        })
    }

    const mouseOut = (e, index) => {
        e.target.style.width = `calc((100% / ${clubs.length}) - 2px)`
        e.target.style.left = `calc((100% / ${clubs.length}) * ${index} + ${index * 2}px)`
        e.target.style.zIndex = '0'
        e.target.style.transitionDelay = '0.5s'

        setAnimate(false)

        const childs = e.target.querySelectorAll("p")

        childs.forEach((child, index) => {
            child.style.rotate = "0deg"
            child.style.transitionDelay = '0.5s'
        })
    }

    return (
        <div className="w-screen h-screen flex-col place-items-center">
            <div
                className='w-2/3 h-screen'
                onMouseLeave={() => {
                    setClickedClub(null)
                    mouseOut(hoverEvent, hoverIndex)
                }}
            >
                <div
                    className="w-full h-3/6 rounded-xl flex justify-between mb-2 items-center relative overflow-hidden"
                // onMouseLeave={() => setClickedClub(null)}
                >
                    {
                        clubs.map((club, index) => (
                            <>
                                <div
                                    key={index}
                                    className="club-div h-full flex items-end justify-center rounded-xl absolute duration-500 cursor-pointer uppercase"
                                    style={{
                                        backgroundImage: `linear-gradient(140deg, white -10%, ${club.color})`,
                                        width: `calc((100% / ${clubs.length}) - 2px)`, // dividing by the number of clubs minus the gap
                                        left: `calc((100% / ${clubs.length}) * ${index} + ${index * 2}px)` // calculating position with gap
                                    }}
                                    onMouseEnter={(e) => mouseEnter(e, index)}
                                    // onMouseLeave={(e) => mouseOut(e, index)}
                                    onClick={() => setClickedClub(club)}
                                >
                                    {/* <img
                                        className="h-full aspect-square"
                                        src={`/images/eventsPage/estoria/statue.png`}
                                    /> */}
                                    <p
                                        className="-rotate-90 absolute top-8 -right-3 duration-500"
                                    >
                                        {club.artform}
                                    </p>
                                    <p
                                        className="font-semibold text-[50px] leading-tighter -rotate-90 absolute bottom-16 left-0 right-0 duration-500"
                                    >
                                        {club.name}
                                    </p>
                                </div>
                            </>
                        ))
                    }
                </div >
                <AnimatePresence>
                    {
                        clickedClub && clickedClub.events.map((event, index) => (
                            <motion.div
                                key={index}
                                className="w-full h-48 flex rounded-xl mb-2 backdrop-blur-100"
                                // onMouseLeave={() => setClickedClub(null)}
                                initial={{
                                    y: '-9rem',
                                    opacity: 0
                                }}
                                animate={{
                                    y: '0',
                                    opacity: 1,
                                    transition: {
                                        duration: 0.2,
                                        delay: 0.18 * index,
                                    }
                                }}
                                exit={{
                                    y: '-9rem',
                                    opacity: 0,
                                    transition: {
                                        duration: 0.1,
                                        delay: 0.08 * (clickedClub.events.length - 1 - index)
                                    }
                                }}
                            >
                                <div
                                    className="h-full aspect-square rounded-s-xl"
                                    style={{
                                        backgroundImage: `linear-gradient(140deg, white -10%, ${clickedClub.color})`
                                    }}
                                />
                                <div
                                    className="w-full h-full flex flex-col gap-0 rounded-e-xl p-5 uppercase text-[#FDFDFB]"
                                >
                                    <div
                                        className="w-full flex justify-between font-light text-[12px] text-[#C8C8C8]"
                                    >
                                        <p>offline</p>
                                        <p>prize pool</p>
                                    </div>
                                    <div
                                        className="-mt-2 w-full flex justify-between font-bold text-[40px]"
                                    >
                                        <p>monoact</p>
                                        <p className="flex items-baseline gap-1"><FaIndianRupeeSign size={20} /> 25,000</p>
                                    </div>
                                    <div
                                        className="-mt-3 flex flex-col justify-between grow"
                                    >
                                        <p
                                            className="font-normal text-[20px]"
                                        >
                                            solo drama competition
                                        </p>
                                        <div
                                            className="w-56 flex justify-between font-bold text-[14]"
                                        >
                                            <a
                                                className="border-white border-2 rounded-md px-3 py-1"
                                                href=""
                                                target="_blank"
                                                style={{
                                                    backgroundImage: `linear-gradient(to right, white -70%, ${clickedClub.exploreGradient})`
                                                }}
                                            >
                                                explore
                                            </a>
                                            <a
                                                className="border-white border-2 rounded-md px-3 py-1"
                                                href=""
                                                target="_blank"
                                            >
                                                register
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </AnimatePresence>
            </div>
        </div >
    );
};

export default ClubSelector;
