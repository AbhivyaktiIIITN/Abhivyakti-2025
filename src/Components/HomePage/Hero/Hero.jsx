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
            { type: "spring", stiffness: 100, damping: 12, duration: 1, }
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
                { type: "spring", stiffness: 100, damping: 12, duration: 1, }
            );
        }
        else {
            animate("#blue-tone", { opacity: 0 }, { duration: 1 });
            animate("#brick-wall", { opacity: 0 }, { duration: 0.5 });
            animate("#graffiti-Layer", { opacity: 0 }, { duration: 0.5 });
            animate("#main-title-shine", { opacity: 0 }, { duration: 0.5 });
            animate("#main-title-preload", { opacity: 1 }, { duration: 0.5 });
            await animate("#abhivyakti", { opacity: 0 }, { duration: 0.5 });
            animate(
                "#spray-hand-long",
                { x: "-688%", y: "0", opacity: 1 }, { duration: 3 }
            );
            await animate(
                "#mans",
                { y: "40vw", opacity: 0 },
                { type: "spring", stiffness: 100, damping: 12, duration: 1, }
            );
            animate("#graffiti-man-spray", { y: "0", opacity: 1 }, { duration: 1 });
            animate(
                "#graffiti-guy",
                { y: "40vw", opacity: 0 },
                { type: "spring", stiffness: 100, damping: 12, duration: 1, }
            );
            animate("#art-movement", { opacity: 1, x: "0" }, { duration: 0.3 });
            animate("#underground", { opacity: 0, x: "0" }, { duration: 0.3 });
            animate("#underground-Art-Movement-Pink", { opacity: 0 });
            animate("#year", { opacity: 1 }, { duration: 0.4 });
            animate("#year-pink", { opacity: 0 }, { duration: 0.4 });
            animate("#image-wrapper", { opacity: 1 }, { duration: 0.4 });
            animate("#radial-shine", { opacity: 0, y: "0%" }, { duration: 0.4 });
            animate("#framed-content", { y: "0%" }, { duration: 0.4 });
            animate("#frame", { y: "0%" }, { duration: 0.4 });

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
            { x: "900%", y: "20%", opacity: 1 },
            { type: "spring", stiffness: 50, damping: 12, duration: 1, ease: "easeIn" }
        );

        animate("#image-wrapper", { opacity: 0 });
        animate("#main-title-shine", { opacity: 0 });
        animate("#brick-wall", { opacity: 0.3 });
        animate("#year-pink", { opacity: 1 });
        animate("#art-movement", { opacity: 0 });
        animate("#underground", { opacity: 0 });
        animate("#abhivyakti", { opacity: 1 });
        animate("#underground-Art-Movement-Pink", { opacity: 1 });
        animate("#year", { opacity: 0 });
        animate(
            "#mans",
            { y: "40vw", opacity: 0 },
            { type: "spring", stiffness: 100, damping: 12, duration: 1, }
        );
        await animate("#graffiti-Layer", { opacity: 0.3 });
        animate("#graffiti-man-spray", { opacity: 1 });
        animate(
            "#graffiti-guy",
            { y: "0vw", opacity: 1 },
            { type: "spring", stiffness: 100, damping: 12, duration: 1, delay: 1 }
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
        className="relative mx-auto max-w-full w-[100vw] h-auto overflow-hidden"
        style={{ overflow: "hidden" }}
      >
        <div className="image-wrapper">
          <div>
            <img
              src="/assets/HeroLanding/museumWall.png"
              alt="museum"
              id="image-wrapper"
              className="background-image h-screen w-auto object-cover lg:h-auto lg:w-screen"
            />
            <img
              src="assets/HeroLanding/noise.png"
              alt="noise overlay"
              className="overlay-image z-20 h-screen w-auto object-cover lg:h-auto lg:w-screen"
            />
            <div className="gradient-effect"></div>
          </div>
          <img
            src="assets/HeroLanding/blueTone.png"
            alt="blue tone"
            id="blue-tone"
            className="absolute min-h-screen z-30 top-1"
            style={{ opacity: 0 }}
          />
          <img
            src="assets/HeroLanding/brickWall.png"
            alt="brick wall"
            id="brick-wall"
            className="absolute top-1 h-screen w-auto object-cover lg:h-auto lg:w-screen"
            style={{ opacity: 0 }}
          />
          <img
            src="assets/HeroLanding/graffitiLayer.png"
            alt="graffitiLayer"
            id="graffiti-Layer"
            className="color-class absolute h-auto w-auto object-cover lg:h-auto lg:w-screen top-1 mix-blend-normal"
            style={{ opacity: 0}}
          />
          <div className="frame-wrapper z-40 lg:w-[30%] min-w-[400px] lg:left-[51%] lg:top-[57%] top-[56.5%] left-[52%]" id="full-frame">
            <img
              src="assets/HeroLanding/frame.png"
              alt="frame"
              id="frame"
              className="frame-image"
            />
            <img
              src="assets/HeroLanding/frameImg.jpeg"
              alt="framed content"
              id="framed-content"
              className="inner-frame-image"
            />
          </div>
          <img
            src="assets/HeroLanding/radialShine.png"
            alt="radial shine"
            className="absolute z-20 top-[15%] left-[24.5%] w-[55%] h-auto"
            id="radial-shine"
            style={{ opacity: 0 }}
          />
          <div className="main-title-wrapper z-50 cursor-pointer md:w-1/2 w-[400px]">
            <img
              src="assets/HeroLanding/abhivyaktiNoShine.png"
              alt="main title preload"
              className="absolute"
              id="main-title-preload"
            />
            <img
              src="assets/HeroLanding/abhivyaktiShine.png"
              alt="main title shine"
              className="absolute"
              id="main-title-shine"
              style={{ opacity: 0 }}
            />
            <img
            src="assets/HeroLanding/abhivyakti.png"
            alt="abhivyakti"
            id="abhivyakti"
            className="absolute"
            style={{ opacity: 0 }}
          />
            <img
              src="assets/HeroLanding/2025.png"
              alt="year"
              className="absolute md:w-[8.5vw] md:top-[11vw] md:left-[20.5vw] z-30 w-1/4 left-[35%] top-[90px]"
              id="year"
            />
            <img
              src="assets/HeroLanding/2025Pink.png"
              alt="year pink"
              className="absolute md:w-[12.2vw] md:top-[9.3vw] md:left-[18.6vw] z-30 w-[35.6%] left-[29.9%] top-[71px]"
              id="year-pink"
              style={{ opacity: 0 }}
            />
            <img
              src="assets/HeroLanding/artMovement.png"
              alt="art movement"
              className="absolute md:w-[13vw] md:top-[11vw] md:left-[18vw] z-10 w-[40%] left-[30%] top-[90px]"
              id="art-movement"
            />
            <img
              src="assets/HeroLanding/underground.png"
              alt="underground"
              className="absolute lg:w-[11.5vw] lg:top-[11vw] lg:left-[10vw] z-30 w-[33%] top-[110px]"
              id="underground"
              style={{ opacity: 0 }}
            />
            <img
              src="assets/HeroLanding/undergroundArtMovementPink.png"
              alt="undergroundArtMovementPink"
              className="absolute lg:w-[25vw] lg:top-[11vw] lg:left-[12vw] w-[79%] left-[15%] top-[90px]"
              id="underground-Art-Movement-Pink"
              style={{ opacity: 0 }}
            />
            <img
              src="assets/HeroLanding/man.png"
              alt="mans"
              className="absolute lg:w-[70vw] lg:h-auto lg:top-[7vw] lg:left-[1%] z-40 lg:translate-y-40vw top-[100px] md:top-[0px] w-[400px] h-[600px] "
              id="mans"
              style={{ opacity: 0}}
            />
            <img
              src="assets/HeroLanding/graffitiGuy.png"
              alt="graffiti guy"
              className="absolute lg:w-[70vw] lg:h-auto lg:top-[7vw] lg:left-[1%] z-40 w-[500px] h-[600px] top-[100px] left-[0%]"
              id="graffiti-guy"
              style={{ opacity: 0, transform: "translateY(40vw)" }}
            />
            <img
              src="assets/HeroLanding/sprayHandLong.png"
              alt="spray hand long"
              className="absolute lg:top-[16vw] lg:left-[-700%] z-40 top-[105vw]"
              id="spray-hand-long"
              style={{ opacity: 0 }}
            />
            <img
              src="assets/HeroLanding/graffitiManSpray.png"
              alt="graffiti man spray"
              className="absolute lg:w-[35vw] lg:top-[292vw] lg:left-[7.5vw] w-[400px] h-auto md:left-[4vw] z-10 top-[325vw]"
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