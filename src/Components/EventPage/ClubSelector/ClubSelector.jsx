import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { clubs } from "./data"
import "./clubSelector.css"
import "../../../css/font.css"

const ClubSelector = () => {

    const [clickedClub, setClickedClub] = useState(null)
    const [hoverIndex, setHoverIndex] = useState(null)
    const [hoverEvent, setHoverEvent] = useState(null)
    const [animate, setAnimate] = useState(false)



    const mouseEnter = (e, index) => {

        e.target.style.zIndex = '50'
        e.target.style.transitionDelay = '0s'
        setHoverIndex(index)
        setHoverEvent(e)
        setAnimate(true)

        const artform = e.target.querySelector("#artform")
        const clubName = e.target.querySelector("#club-name")

        artform.style.transitionDelay = '0s'
        clubName.style.transitionDelay = '0s'

        if (window.matchMedia("(min-width: 768px)").matches) {
            e.target.style.width = '100%'
            e.target.style.left = '0'

            artform.style.bottom = '20rem'
            artform.style.right = '46.5rem'
            artform.style.rotate = '90deg'
            artform.style.fontSize = '2rem'

            clubName.style.bottom = '8rem'
            clubName.style.left = '10.5rem'
            clubName.style.right = '0rem'
            clubName.style.rotate = '90deg'
            clubName.style.fontSize = '12rem'
        } else {
            e.target.style.height = '100%'
            e.target.style.top = '0'
            
            artform.style.bottom = '24rem'
            artform.style.right = '9.5rem'
            artform.style.fontSize = '2rem'

            clubName.style.bottom = '17rem'
            clubName.style.left = '5.5rem'
            clubName.style.fontSize = '8rem'
        }
    }

    const mouseOut = (e, index) => {

        e.target.style.zIndex = '0'
        e.target.style.transitionDelay = '0.5s'
        setAnimate(false)

        const artform = e.target.querySelector("#artform")
        const clubName = e.target.querySelector("#club-name")

        artform.style.transitionDelay = '0.5s'
        clubName.style.transitionDelay = '0.5s'

        if (window.matchMedia("(min-width: 768px)").matches) {
            e.target.style.width = `calc((100% / ${clubs.length}) - 2px)`
            e.target.style.left = `calc((100% / ${clubs.length}) * ${index} + ${index * 2}px)`

            artform.style.bottom = '27rem'
            artform.style.right = '-0.75rem'
            artform.style.rotate = '0deg'
            artform.style.fontSize = '1rem'

            clubName.style.bottom = '4rem'
            clubName.style.left = '1.25rem'
            clubName.style.right = '0rem'
            clubName.style.rotate = '0deg'
            clubName.style.fontSize = '8rem'
        } else {
            e.target.style.height = `calc((100% / ${clubs.length}) - 2px)`
            e.target.style.top = `calc((100% / ${clubs.length}) * ${index})`
            
            artform.style.bottom = '5rem'
            artform.style.right = '1.25rem'
            artform.style.fontSize = '1rem'

            clubName.style.bottom = '-0.5rem'
            clubName.style.left = '1.5rem'
            clubName.style.fontSize = '6rem'
        }
    }

    return (
        <div className="w-screen h-screen flex-col place-items-center mt-52">
            <div
                className='w-[95%] md:min-w-[768px] md:w-2/3 h-screen'
                onMouseLeave={() => {
                    setClickedClub(null)
                    mouseOut(hoverEvent, hoverIndex)
                }}
            >
                <div
                    className="w-full h-full md:h-2/3 rounded-xl flex justify-between mb-2 items-center relative overflow-hidden"
                // onMouseLeave={() => setClickedClub(null)}
                >
                    {
                        clubs.map((club, index) => (
                            <>
                                <div
                                    key={index}
                                    className="club-div md:h-full flex items-end justify-center rounded-xl absolute duration-500 cursor-pointer uppercase"
                                    style={{
                                        '--index': index,
                                        '--length': clubs.length,
                                        backgroundImage: `linear-gradient(140deg, white -10%, ${club.color})`,
                                        width: `calc((100% / ${clubs.length}) - 2px)`, // dividing by the number of clubs minus the gap
                                        left: `calc((100% / ${clubs.length}) * ${index} + ${index * 2}px)` // calculating position with gap
                                    }}
                                    onMouseEnter={(e) => mouseEnter(e, index)}
                                    onClick={() => setClickedClub(club)}
                                >
                                    {/* <img
                                        className="w-[400px] -z-0 absolute right-0"
                                        src={`/assets/EventsPage/estoria/statue.png`}
                                    /> */}
                                    <p
                                        className="md:-rotate-90 absolute bottom-20 md:bottom-[27rem] right-5 md:-right-3 duration-500 urbanist-font text-white text-[1rem] drop-shadow-club-name"
                                        id="artform"
                                    >
                                        {club.artform}
                                    </p>
                                    <p
                                        className="text-8xl md:text-9xl text-white drop-shadow-club-name md:-rotate-90 absolute -bottom-2 md:bottom-16 left-6 md:left-5 md:right-0 duration-500 humane-bold-font"
                                        id="club-name"
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
                                className="w-full h-32   xs:h-48 flex rounded-xl mb-2 backdrop-blur-100"
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
                                        className="w-full flex justify-between font-light text-[10px] 2xs:text-[12px] text-[#C8C8C8]"
                                    >
                                        <p>offline</p>
                                        <p>prize pool</p>
                                    </div>
                                    <div
                                        className="-mt-1 xs:-mt-2 w-full flex justify-between font-bold text-sm 2xs:text-md xs:text-2xl sm:text-4xl"
                                    >
                                        <p>monoact</p>
                                        <p className="flex items-baseline gap-1"><FaIndianRupeeSign className='text-xs sm:text-lg' /> 25,000</p>
                                    </div>
                                    <div
                                        className="-mt-1 xs:-mt-2 flex flex-col justify-between grow"
                                    >
                                        <p
                                            className="font-normal text-[0.6rem] 2xs:text-xs xs:text-md text-wrap sm:text-xl"
                                        >
                                            solo drama competition
                                        </p>
                                        <div
                                            className="w-full sm:w-56 flex justify-between font-bold text-[0.5rem] 2xs:text-xs sm:text-md"
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
