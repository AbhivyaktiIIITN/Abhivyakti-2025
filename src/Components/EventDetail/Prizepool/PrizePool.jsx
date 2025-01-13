import React from "react";
import PrizePoolImg from "../../../../public/assets/EventDetail/Prizepool.png"
const PrizePool = ({ prizes, additionalPrizes }) => {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center relative mt-60 ">
      <div className="text-white py-10 px-4 w-full lg:w-1/2 ">

          <div className="w-full flex flex-wrap justify-center ">
            <img src={PrizePoolImg} alt="" className="h-52 sm:h-72" />
          </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {prizes.map((prize, index) => (
            <div className="flex flex-col items-center " key={index}>
              <img
                src={prize.imageSrc}
                alt={`${prize.position} Place`}
                className="w-32 h-32 md:w-44 md:h-44 hover:scale-110"
              />
              <h2 className="text-xl md:text-xl font-bold mt-4">
                {prize.position}
              </h2>
              <p className="text-lg md:text-2xl font-semibold mt-2 p-2">
                {prize.prizeAmount}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Prizes */}
        <p className="text-center mt-10 text-sm md:text-xl grid grid-cols-1 gap-1">
          <span>Additional Prizes: </span>
          <span className="space-x-3">
            {additionalPrizes.map((prize, index) => (
              <span key={index}>{prize}</span>
            ))}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PrizePool;
