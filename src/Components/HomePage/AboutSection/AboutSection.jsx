import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import statue from "../../../images/statue.png";
import leftHand from "../../../images/left_hand.png";
import rightHand from "../../../images/right_hand.png";
import sprayPaint2 from "../../../images/spray_paint2.png";
import graffitiLayer from "../../../images/graffitilayer.png";
import graffitiDrip from "../../../images/graffitiDrip.png"; // Importing graffitiDrip
import statueSpray from "../../../images/statue_spray.png";
import aboutHeading from "../../../images/aboutHeading.png";

const AboutSection = () => {
  const [inViewRef, inView] = useInView({ threshold: 0.5 });
  const [resetHands, setResetHands] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (inView) {
      setResetHands(false);
      const timer = setTimeout(() => {
        setResetHands(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setResetHands(false);
    }
  }, [inView]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${graffitiLayer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: "15vh",
        margin: 0,
        position: "relative",
      }}
    >
      {/* Graffiti Drip Image */}
      <img
        src={graffitiDrip}
        alt="Graffiti Drip"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "85vh", // Aligning with the padding
          objectFit: "cover",
          zIndex: 1,
        }}
      />

      {/* Scroll Triggered Section */}
      <div
        ref={inViewRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          backgroundImage: `url(${graffitiLayer})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            height: "50%",
            width: "50%",
            position: "absolute",
            bottom: isHovered || inView ? "25%" : "-100%",
            left: isHovered || inView ? "15%" : "-100%",
            transition: "all 1.5s ease-in-out",
          }}
        >
          {/* About Abhivyakti Image */}
          <img
            src={aboutHeading}
            alt="About Abhivyakti"
            style={{
              height: "80%",
              width: "140%",
              borderRadius: "10px",
              objectFit: "contain",
              alignSelf: "flex-start",
              marginTop: "-90px",
              marginLeft: "-180px",
              zIndex:"1"
            }}
          />

          {/* Blue Div (Content Section) */}
          <div
            style={{
              background: "transparent",
              color: "white",
              height: "auto",
              width: "80%",
              borderRadius: "10px",
              marginTop: "10px",
              padding: "10px",
              animation:
                inView || isHovered ? "fadeIn 1.5s ease-in-out" : "none",
              opacity: inView || isHovered ? 1 : 0,
              transition: "opacity 1.5s ease-in-out",
              zIndex:"1"
            }}
          >
            Abhivyakti, IIIT Nagpur's annual cultural event, is a dynamic fusion
            of art, talent, and diversity. It provides a platform for students
            to express their creativity and celebrate their uniqueness. From
            intercollege competitions to inspiring speakers, Abhivyakti is a
            journey from passion to stardom. It's a path where persistence
            conquers obstacles, leading to a constellation of success.
          </div>
        </div>

        {/* Right Container with Statue and Spray Images */}
        <div
          style={{
            height: "80%",
            width: "30%",
            position: "absolute",
            bottom: isHovered || inView ? "20%" : "-120%",
            right: isHovered || inView ? "5%" : "-120%",
            borderRadius: "10px",
            transition: "all 1.5s ease-in-out",
          }}
        >
          <img
            src={statueSpray}
            alt="Statue Spray"
            style={{
              position: "absolute",
              top: "-3%",
              left: "40%",
              transform: "translateX(-50%)",
              height: "30%",
              objectFit: "contain",
              zIndex: "1",
            }}
          />
          <img
            src={statue}
            alt="Statue"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "8px",
              position: "relative",
              zIndex: "5",
            }}
          />
          <img
            src={sprayPaint2}
            alt="Statue Spray 2"
            style={{
              position: "absolute",
              bottom: "-3%",
              left: "-15%",
              height: "55%",
              objectFit: "contain",
              zIndex: "3",
              transition: "all 1.5s ease-in-out",
            }}
          />
        </div>

        {/* Left Hand Image */}
        <img
          src={leftHand}
          alt="Left Hand"
          style={{
            position: "absolute",
            bottom: resetHands
              ? "-100%"
              : isHovered || inView
              ? "30%"
              : "-100%",
            left: resetHands
              ? "-100%"
              : isHovered || inView
              ? "10%"
              : "-100%",
            width: "15%",
            transform: "rotate(90deg)",
            transition: "all 1.5s ease-in-out",
            zIndex:"1"
          }}
        />

        {/* Right Hand Image */}
        <img
          src={rightHand}
          alt="Right Hand"
          style={{
            position: "absolute",
            bottom: resetHands
              ? "-100%"
              : isHovered || inView
              ? "10%"
              : "-100%",
            right: resetHands
              ? "-100%"
              : isHovered || inView
              ? "5%"
              : "-100%",
            width: "15%",
            transform: "rotate(-90deg)",
            zIndex: 7,
            transition: "all 1.5s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

export default AboutSection;
