import React from "react";
import { motion } from "framer-motion";
import MonaLisa from "./monaLisa.png";
import HandUp from "./handUp.png";

function TempComponent() {
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
        },
    };

    return (
        <div className="min-w-screen md:h-[75vh] mb-12">
            <div className="relative w-full h-full ">
                <motion.div
                    className="absolute left-0 top-0 md:w-[20vw] md:h-3/4 bg-yellow-200"
                    aria-label="mona-lisa + hand"
                    variants={variants.monLisaAndHand}
                    initial="hidden"
                    animate="visible"
                    viewport={{ visible: 0.5 }}
                >
                    <motion.div className="absolute object-contain h-full w-full " aria-label="mona-lisa">
                        <img className="h-full w-auto " src={MonaLisa} alt="Mona Lisa" />
                    </motion.div>
                    <motion.div
                        className="bottom-0 -rotate-12 absolute object-contain h-1/2 w-auto "
                        aria-label="hand"
                        variants={variants.handOnly}
                        initial="visible"
                        animate={["visible", "visbile2", "visible3", "visible4"]}
                    >
                        <img className="h-full w-auto " src={HandUp} alt="Mona Lisa" />
                    </motion.div>
                </motion.div>
                <motion.div className="absolute bottom-0 right-0 md:w-[25vw] md:h-1/2 bg-green-600" aria-label="mona-lisa + hand">
                    <motion.div aria-label="mona-lisa"></motion.div>
                    <motion.div aria-label="hand"></motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default TempComponent;
