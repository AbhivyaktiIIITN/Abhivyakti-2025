import React from 'react';
import { motion } from 'framer-motion';
import './aboutsection.css';
import heading from '../../../images/aboutHeading.png';
import statueSpray from '../../../images/statue_spray.png';
import statueImage from '../../../images/statue.png';
import sprayPaint2 from '../../../images/spray_paint2.png';
import graffitiDrip from '../../../images/graffitiDrip.png'; // Import the new image
import { useInView } from 'react-intersection-observer';


const Aboutsection = () => {

  const [inViewRef, inView] = useInView({ threshold: 0.2 })

  return (
    <div className="body-wrapper w-screen h-[130vh] md:h-screen flex flex-col md:flex-row justify-center items-center relative p-20">
      <div className="graffitiDrip-container absolute top-0 w-full -z-2">
        <img src={graffitiDrip} alt="Graffiti Drip" className="graffitiDrip w-full h-screen" />
      </div>
      <motion.div
        className="container w-[300px] md:w-[300px] mdlg:w-[500px] h-full flex flex-col justify-center items-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={heading} alt="Sample" className="image w-[500px] h-1/3 mdlg:h-1/2 border-none" />
        <motion.div
          className="container-text w-[300px] mdlg:w-[500px] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            Abhivyakti, IIIT Nagpur's annual cultural event, is a dynamic fusion of art, talent, and diversity. It provides a platform for students to express their creativity and celebrate their uniqueness. From intercollege competitions to inspiring speakers, Abhivyakti is a journey from passion to stardom. It's a path where persistence conquers obstacles, leading to a constellation of success.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="statue-container w-[450px] mdlg:w-[800px] h-full flex flex-col justify-start md:justify-center items-center z-20"
        initial={{ opacity: 0, x: 100, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="statue-red w-[450px] mdlg:w-[600px] flex justify-center items-end relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
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