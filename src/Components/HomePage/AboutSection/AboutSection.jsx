import React from 'react';
import { motion, useAnimate } from 'framer-motion';
import heading from '/assets/HomePage/About/aboutHeading.png';
import statueSpray from '/assets/HomePage/About/statue_spray.png';
import statueImage from '/assets/HomePage/About/statue.png';
import sprayPaint2 from '/assets/HomePage/About/spray_paint2.png';
import graffitiDrip from '/assets/HomePage/About/graffitiDrip.png';
import './aboutsection.css';
import { useEffect } from 'react';

const Aboutsection = () => {

    const [scope, animate] = useAnimate()

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // const statueContainer = document.querySelector(".statue-container")
                    // statueContainer.style.animation = "statueEnter 1s ease-out"

                    // const container = document.querySelector(".container")
                    // container.style.animation = "containerEnter 1s ease-out"

                    animate(".statue-container", { x: 0, y: 0 }, { duration: 1 })
                    animate(".container", { x: 0, y: 0 }, { duration: 1 })
                }
                // else {
                //     setAnimate(false);
                // }
            },
            { threshold: 0.5 }
        );

        if (scope.current) {
            observer.observe(scope.current);
        }

        return () => {
            if (scope.current) {
                observer.unobserve(scope.current);
            }
        };
    }, []);

    return (
        <div ref={scope} id="about" className="body-wrapper w-screen h-[130vh] md:h-screen flex flex-col md:flex-row justify-center items-center relative p-20 overflow-hidden">
            <div className="graffitiDrip-container absolute top-0 w-full -z-2">
                <img src={graffitiDrip} alt="Graffiti Drip" className="graffitiDrip w-full h-screen" />
            </div>
            <motion.div
                className="container w-[300px] md:w-[300px] mdlg:w-[500px] h-full flex flex-col justify-center items-center z-20"
                initial={{ x: '-100%', y: '100%' }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 0.5 }}
            >
                <img src={heading} alt="Sample" className="image w-[500px] h-1/3 mdlg:h-1/2 border-none" />
                <motion.div
                    className="container-text w-[300px] mdlg:w-[500px] text-center"
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{ duration: 0.5 }}
                >
                    <p className="text-justify sm:text-md md:text-xl ">
                        Abhivyakti, the annual cultural fest of IIIT Nagpur, is a grand celebration of creativity, artistry, and cultural diversity. True to its name, meaning "expression," it offers students a vibrant platform to showcase their talents, push boundaries, and foster camaraderie. As one of the most awaited campus events, it transforms the institute into a lively hub of energy and artistic brilliance. The fest features electrifying concerts, mesmerizing dances, captivating plays, and stunning art exhibitions, inspiring participants to explore their potential and celebrate creativity in unique, memorable ways.
                    </p>
                </motion.div>
            </motion.div>

            <motion.div
                className="statue-container w-[450px] mdlg:w-[800px] h-full flex flex-col justify-start md:justify-center items-center z-20"
                initial={{ x: '100%', y: '100%' }}
            // animate={{ opacity: 1, x: 0, y: 0 }}
            // transition={{ duration: 1 }}
            >
                <motion.div
                    className="statue-red w-[450px] mdlg:w-[600px] flex justify-center items-end relative"
                // initial={{ opacity: 0, scale: 0.8 }}
                // animate={{ opacity: 1, scale: 1 }}
                // transition={{ duration: 1 }}
                >
                    <img src={statueImage} alt="Statue" className="class2 min-w-[450px] mdlg:min-w-[800px] z-50" />
                    <img src={statueSpray} alt="Spray Paint 1" className="class1 absolute w-[250px] md:w-[300px] mdlg:w-[400px] top-0 mr-8" />
                    <img src={sprayPaint2} alt="Spray Paint 2" className="class3 absolute w-[200px] md:w-[250px] mdlg:w-[400px] -bottom-10 right-[180px] md:-bottom-20 md:right-[150px] mdlg:right-[250px]" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Aboutsection;