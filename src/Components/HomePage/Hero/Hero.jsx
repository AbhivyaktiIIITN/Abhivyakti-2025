import "./hero.css";
import { useAnimate } from "framer-motion";
import { useState } from "react";

function Hero() {
  const [scope, animate] = useAnimate();

  const [hasClicked, setHasClicked] = useState(false);

  const onMouseEnter = async () => {
    if (!scope.current || hasClicked) return;
    animate("#radial-shine", { opacity: 1 }, { duration: 0.5 });
    animate("#main-title-preload", { opacity: 0 }, { duration: 0.5 });
    animate("#main-title-shine", { opacity: 1 }, { duration: 0.5 });
    await animate(
      "#mans",
      { y: "0vw", opacity: 1 }, 
      {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 1,
      }
    );
  };

  const onMouseLeave = async () => {
    if (!scope.current) return;

    if (!hasClicked) {
      animate("#radial-shine", { opacity: 0 }, { duration: 0.5 });
      animate("#main-title-preload", { opacity: 1 }, { duration: 0.5 });
      animate("#main-title-shine", { opacity: 0 }, { duration: 0.5 });
      await animate(
        "#mans",
        { y: "40vw", opacity: 0 },
        {
          type: "spring",
          stiffness: 100,
          damping: 12,
          duration: 1,
        }
      );
    } 
    else {
      animate("#blue-tone",        { opacity: 0 }, { duration: 1 });
      animate("#brick-wall",       { opacity: 0 }, { duration: 0.5 });
      animate("#graffiti-Layer",   { opacity: 0 }, { duration: 0.5 });
      animate("#main-title-shine", { opacity: 0 }, { duration: 0.5 });
      animate("#main-title-preload",{ opacity: 1 }, { duration: 0.5 });
      await animate("#abhivyakti",{ opacity: 0 }, { duration: 0.5 });
      animate(
        "#spray-hand-long",
        { x: "-688%", y:"0", opacity: 1 },{ duration: 3}
      );
      await animate(
        "#mans",
        { y: "40vw", opacity: 0 },
        {
          type: "spring",
          stiffness: 100,
          damping: 12,
          duration: 1,
        }
      );
      animate("#graffiti-man-spray",{ y: "0", opacity: 1 }, { duration: 1 });
      animate(
        "#graffiti-guy",
        { y: "40vw", opacity: 0 },
        {
          type: "spring",
          stiffness: 100,
          damping: 12,
          duration: 1,
        }
      );
      animate("#art-movement",     { opacity: 1, x: "0" }, { duration: 0.3 }); 
      animate("#underground",      { opacity: 0, x: "0" }, { duration: 0.3 });
      animate("#underground-Art-Movement-Pink", { opacity: 0 });
      animate("#year",            { opacity: 1 }, { duration: 0.4});
      animate("#year-pink",       { opacity: 0 }, { duration: 0.4 });
      animate("#image-wrapper",    { opacity: 1 }, { duration: 0.4 });
      animate("#radial-shine",     { opacity: 0, y: "0%" }, { duration: 0.4 });
      animate("#framed-content",   { y: "0%" }, { duration: 0.4 });
      animate("#frame",            { y: "0%" }, { duration: 0.4 });
      
      setHasClicked(false);
    }
  };

  const onMouseClick = async () => {
    if (!scope.current) return;
    setHasClicked(true);

    await animate("#blue-tone", { opacity: 0.4 });

    await animate(
      "#spray-hand-long",
      { x: "688%", opacity: 1 },
      { type: "spring", stiffness: 120, damping: 14, duration: 1 }
    );

    animate(
      "#graffiti-man-spray",
      { y: "-270vw" },
      { type: "spring", stiffness: 120, damping: 14, duration: 1 }
    );

    animate(
      "#art-movement",
      { x: "46%" },
      { type: "spring", stiffness: 100, damping: 12, duration: 1 }
    );

    animate(
      "#underground",
      { x: "18%", opacity: 1 },
      { type: "spring", stiffness: 100, damping: 12, duration: 1 }
    );

    await animate(
      "#spray-hand-long",
      { y: "45%" },
      { type: "spring", stiffness: 80, damping: 12, duration: 1 }
    );

    animate(
      "#framed-content",
      { y: "-600%" },
      { type: "spring", stiffness: 50, damping: 12, duration: 2 }
    );
    animate(
      "#frame",
      { y: "-700%" },
      { type: "spring", stiffness: 50, damping: 12, duration: 2 }
    );
    animate(
      "#radial-shine",
      { y: "-700%" },
      { type: "spring", stiffness: 50, damping: 12, duration: 2 }
    );

    animate(
      "#spray-hand-long",
      { x: "900%",y: "20%", opacity: 1},
      { type: "spring", stiffness: 50, damping: 12, duration: 1, ease: "easeIn" }
    );

    animate("#image-wrapper",      { opacity: 0 });
    animate("#main-title-shine",   { opacity: 0 });
    animate("#brick-wall",         { opacity: 0.3 });
    animate("#year-pink",          { opacity: 1 });
    animate("#art-movement",       { opacity: 0 });
    animate("#underground",        { opacity: 0 });
    animate("#abhivyakti", { opacity: 1 });
    animate("#underground-Art-Movement-Pink", { opacity: 1 });
    animate("#year", { opacity: 0 });
    animate(
      "#mans",
      { y: "40vw", opacity: 0 },
      {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 1,
      }
    );
    await animate("#graffiti-Layer",{ opacity: 0.3 });
    animate("#graffiti-man-spray", { opacity: 1 });
    animate(
      "#graffiti-guy",
      { y: "0vw", opacity: 1 }, 
      {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 1,
        delay: 1
      }
    );
  };

  return (
    <div
      className="hero-container relative top-10 md:top-0"
      ref={scope}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onMouseClick}
    >
      <div
        className="relative mx-auto max-w-full w-[100vw] h-auto"
        style={{ overflow: "hidden" }}
      >
        <div className="image-wrapper">
          <div>
            <img
              src="src/assets/museumWall.png"
              alt="museum"
              id="image-wrapper"
              className="background-image"
            />
            <img
              src="src/assets/noise.png"
              alt="noise overlay"
              className="overlay-image z-20"
            />
            <div className="gradient-effect"></div>
          </div>
          <img
            src="src/assets/blueTone.png"
            alt="blue tone"
            id="blue-tone"
            className="absolute min-h-screen z-30 top-1"
            style={{ opacity: 0 }}
          />
          <img
            src="src/assets/brickWall.png"
            alt="brick wall"
            id="brick-wall"
            className="absolute min-h-screen top-1"
            style={{ opacity: 0 }}
          />
          <img
            src="src/assets/graffitiLayer.png"
            alt="graffitiLayer"
            id="graffiti-Layer"
            className="color-class absolute min-h-screen top-1 mix-blend-plus-darker"
            style={{ opacity: 0}}
          />
          <div className="frame-wrapper z-40" id="full-frame">
            <img
              src="src/assets/frame.png"
              alt="frame"
              id="frame"
              className="frame-image"
            />
            <img
              src="src/assets/frameImg.jpeg"
              alt="framed content"
              id="framed-content"
              className="inner-frame-image"
            />
          </div>
          <img
            src="src/assets/radialShine.png"
            alt="radial shine"
            className="absolute z-20 top-[15%] left-[24.5%] w-[55%] h-auto"
            id="radial-shine"
            style={{ opacity: 0 }}
          />
          <div className="main-title-wrapper z-50 cursor-pointer">
            <img
              src="src/assets/abhivyaktiNoShine.png"
              alt="main title preload"
              className="absolute"
              id="main-title-preload"
            />
            <img
              src="src/assets/abhivyaktiShine.png"
              alt="main title shine"
              className="absolute"
              id="main-title-shine"
              style={{ opacity: 0 }}
            />
            <img
            src="src/assets/abhivyakti.png"
            alt="abhivyakti"
            id="abhivyakti"
            className="absolute"
            style={{ opacity: 0 }}
          />
            <img
              src="src/assets/2025.png"
              alt="year"
              className="absolute w-[8.5vw] top-[11vw] left-[20.5vw] z-30"
              id="year"
            />
            <img
              src="src/assets/2025Pink.png"
              alt="year pink"
              className="absolute w-[12.2vw] top-[9.3vw] left-[18.6vw] z-30"
              id="year-pink"
              style={{ opacity: 0 }}
            />
            <img
              src="src/assets/artMovement.png"
              alt="art movement"
              className="absolute w-[13vw] top-[11vw] left-[18vw] z-10"
              id="art-movement"
            />
            <img
              src="src/assets/underground.png"
              alt="underground"
              className="absolute w-[11.5vw] top-[11vw] left-[10vw] z-30"
              id="underground"
              style={{ opacity: 0 }}
            />
            <img
              src="src/assets/undergroundArtMovementPink.png"
              alt="undergroundArtMovementPink"
              className="absolute w-[25vw] top-[11vw] left-[12vw]"
              id="underground-Art-Movement-Pink"
              style={{ opacity: 0 }}
            />
            <img
              src="src/assets/man.png"
              alt="mans"
              className="absolute w-[70vw] h-auto top-[7vw] left-[1%] z-40"
              id="mans"
              style={{ opacity: 0, transform: "translateY(40vw)" }}
            />
            <img
              src="src/assets/graffitiGuy.png"
              alt="graffiti guy"
              className="absolute w-[70vw] h-auto top-[7vw] left-[1%] z-40"
              id="graffiti-guy"
              style={{ opacity: 0, transform: "translateY(40vw)" }}
            />
            <img
              src="src/assets/sprayHandLong.png"
              alt="spray hand long"
              className="absolute top-[16vw] left-[-700%] z-40"
              id="spray-hand-long"
              style={{ opacity: 0 }}
            />
            <img
              src="src/assets/graffitiManSpray.png"
              alt="graffiti man spray"
              className="absolute w-[35vw] top-[292vw] left-[7.5vw] md:left-[8vw] z-10"
              id="graffiti-man-spray"
              style={{ opacity: 1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
