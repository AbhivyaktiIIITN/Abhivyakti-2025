import React from 'react'
import { motion } from 'framer-motion';
import DaVinci from "./DaVinci.png";
import HandDown from "./handDown.png";

function DaVinciAndHand({ animate }) {
    const variants = {
        daVinciAndHand: {
            hidden: {
                x: 500,
                y: 100,
            },
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                    delay: 0.5,
                    duration: 0.5,
                },
            }
        },

        handDownOnly: {
            visible: {
                rotate: 12,
            },

            visible4: {
                rotate: 0,
                x: 500,
                y: 100,
                transition: {
                    delay: 2.5,
                    duration: 0.5,
                },
            },
        }
    };

    return (
        <motion.div
            className="absolute z-10 bottom-0 right-0 md:w-[20vw] w-1/2 md:h-1/2 h-1/2"
            aria-label="davinci + hand"
            variants={variants.daVinciAndHand}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            viewport={{ visible: 0.5 }}
        >
            <motion.div className="absolute object-contain h-full w-full " aria-label="daVinci">
                <img className="h-full w-auto absolute right-0" src={DaVinci} alt="DaVinci" />
            </motion.div>
            <motion.div
                className="bottom-0 right-0 rotate-12 absolute object-contain h-1/2 w-auto "
                aria-label="hand"
                variants={variants.handDownOnly}
                initial="visible"
                animate={animate ? ["visible", "visbile2", "visible3", "visible4"] : "visible"}
            >
                <img className="h-full w-auto " src={HandDown} alt="DaVinci hand down for animation" />
            </motion.div>
        </motion.div>
    )
}

export default DaVinciAndHand