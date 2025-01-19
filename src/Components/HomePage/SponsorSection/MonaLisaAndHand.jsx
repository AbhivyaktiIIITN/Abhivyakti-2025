import React from 'react'
import { motion } from 'framer-motion';
import MonaLisa from "./monaLisa.png";
import HandUp from "./handUp.png";

function MonaLisaAndHand({ animate }) {
    const variants = {
        monLisaAndHand: {
            hidden: {
                x: -500,
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
            },
        },
        handOnly: {
            visible: {
                rotate: -12,
            },

            visible4: {
                rotate: 0,
                x: -500,
                y: 100,
                transition: {
                    delay: 2.5,
                    duration: 0.5,
                },
            },
        }
    }
    return (

        <motion.div
            className="absolute left-0 top-0 md:w-[20vw] w-1/2 h-1/2 md:h-1/2 "
            aria-label="mona-lisa + hand"
            variants={variants.monLisaAndHand}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}

        >
            <motion.div className="absolute object-contain h-full w-full " aria-label="mona-lisa">
                <img className="h-full w-auto " src={MonaLisa} alt="Mona Lisa" />
            </motion.div>
            <motion.div
                className="bottom-0 -rotate-12 absolute object-contain h-1/2 w-auto "
                aria-label="hand"
                variants={variants.handOnly}
                initial="visible"
                animate={animate ? ["visible", "visible2", "visible3", "visible4"] : "visible"}
            >
                <img className="h-full w-auto " src={HandUp} alt="Mona Lisa hand up for animation" />
            </motion.div>
        </motion.div>

    )

}

export default MonaLisaAndHand