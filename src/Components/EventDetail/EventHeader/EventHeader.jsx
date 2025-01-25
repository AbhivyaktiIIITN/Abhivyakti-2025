import React from "react";

const EventHeader = ({
  eventName,
  eventName2,
  clubName,
  eventShortDescription,
  clubLogo,
  bgUrlLeft,
  bgUrlRight,
  leftStatueUrl,
  rightStatueUrl,
}) => {
  const isSingleEventName = !eventName2;
  const combinedLength = eventName.length + (eventName2 ? eventName2.length : 0);
  const maxLength = "Melody Hustle".length; 

  const adjustedFontSize =
    combinedLength > maxLength
      ? "text-[30px] sm:text-[70px] md:text-[100px] lg:text-[180px]"
      : "text-[50px] sm:text-[70px] md:text-[120px] lg:text-[200px]";

  return (
    <div
      className="w-full h-[25vh] md:h-[50vh] lg:h-[70vh] 2xl:h-[70vh] bg-contain bg-center bg-no-repeat mt-[64px]"
      style={{
        background: `${bgUrlRight}`,
      }}
    >
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat flex flex-row items-end"
        style={{
          backgroundImage: `${bgUrlLeft}`,
        }}
      >
        <img
          src={leftStatueUrl}
          alt="Statue Left"
          className="w-1/3 min-w-[100px] h-[80%] sm:h-[90%]"
        />

        <div className="w-1/3 h-2/3 sm:h-full flex flex-col items-center justify-end">
          <div className="w-2/5 absolute sm:h-1/4 md:h-2/3 flex flex-wrap items-end justify-end content-center">
            <div className="flex justify-start items-end space-x-4 w-full">
              <span className="w-2/4 h-[20px] sm:h-[50px] font-bold humane-bold-font text-white">
                <h2 className="text-[20px] md:text-[50px] [line-height:0.8em] w-fit md:[letter-spacing:3px] uppercase [letter-spacing:0.2px] md:[-webkit-text-stroke:1px_black] [-webkit-text-stroke:0.55px_black] text-white humane-bold-font flex">
                  {clubName}
                </h2>
              </span>
              <div
                className="w-12 sm:w-20 lg:w-36 h-10 sm:h-20 lg:h-20 bg-contain bg-center bg-no-repeat mb-3"
                style={{
                  backgroundImage: `url(${clubLogo})`,
                }}
              ></div>
            </div>
            <div className="w-full h-auto mb-2 flex flex-wrap items-center justify-start">
              <h1
                className={`${adjustedFontSize} [line-height:0.8em] w-fit md:[letter-spacing:3px] uppercase [letter-spacing:1px] md:[-webkit-text-stroke:2px_black] [-webkit-text-stroke:1px_black] text-white humane-bold-font flex`}
              >
                {eventName}&nbsp;
              </h1>
              {!isSingleEventName && (
                <h1
                  className={`${adjustedFontSize} [line-height:0.8em] w-fit uppercase md:[letter-spacing:3px] md:[-webkit-text-stroke:2px_black] [-webkit-text-stroke:1px_black] text-white humane-bold-font flex`}
                >
                  {eventName2}
                </h1>
              )}
            </div>
            <div className="w-full h-[20px] sm:h-[50px]">
              <h2 className="text-[20px] md:text-[50px] [line-height:0.8em] w-fit md:[letter-spacing:3px] uppercase [letter-spacing:0.25px] md:[-webkit-text-stroke:1px_black] [-webkit-text-stroke:0.55px_black] text-white humane-bold-font flex">
                {eventShortDescription}
              </h2>
            </div>
          </div>
        </div>

        <img
          src={rightStatueUrl}
          alt="Statue Right"
          className="w-1/3 min-w-[100px] h-[80%] sm:h-[90%]"
        />
      </div>
    </div>
  );
};

export default EventHeader;
