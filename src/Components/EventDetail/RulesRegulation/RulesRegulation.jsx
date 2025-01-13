import React from "react";
import RulesAndRegulationImg from "../../../../public/assets/EventDetail/RulesAndRegulation.png"
const RulesRegulation = () => {
  return (
    <div className="w-full min-h-screen relative text-white px-4 lg:px-16 py-10 flex flex-wrap justify-center">
      <div className="w-2/3 h-full sm:w-1/2">
         <div className="w-full flex flex-wrap justify-center ">
            <img src={RulesAndRegulationImg} alt="" className="h-52 sm:h-72" />
          </div>
        <div className="text-lg lg:text-xl">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 py-5 ">Rules:</h2>
            <h3 className="text-xl font-semibold mb-2 py-5">Round 1:</h3>
            <ul className="list-disc m-0 md:ml-16 sm:ml-16 lg:ml-16 space-y-2">
              <li>
                Ensure your pre-recorded music is in <b>.mp3</b> format and
                adheres to time limits, as violations may lead to penalties.
              </li>
              <li>
                Participants have to submit a video of them performing for 1-1.5
                minutes. They have to submit the drive link of the video at the
                time of registration along with the form.
              </li>
              <li>No props are allowed in this round.</li>
              <li>The video must be shot on a static camera.</li>
              <li>The video must not be edited at any point of time.</li>
              <li>In this round, the costume will be overlooked.</li>
              <li>
                The judges' decisions are final, and rule violations can result
                in disqualification.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2 py-5">Round 2:</h3>
            <ul className="list-disc m-0 md:ml-16 sm:ml-16 lg:ml-16 space-y-2">
              <li>
                Time limit for this round is 4-6 minutes (can be changed based
                on the participants) minutes.
              </li>
              <li>
                This round is a prop round, in this round the participants have
                to prepare their performance with at least 2 different props.
                Each prop should be used in dance for at least 10 seconds. The
                two props must be distinct from each other.
              </li>
              <li>All dance forms are allowed in this round.</li>
              <li>
                Prop usage will also be one judging criterion in this round.
              </li>
              <div>

              <li className="mt-10">Props that are not allowed:</li>
              <ul className="list-disc ml-16 space-y-">
                <li>Fire</li>
                <li>Blades</li>
                <li>Sharp Mirrors</li>
                <li>Scissors</li>
                <li>Nails</li>
              </ul>
              </div>
              <li className="mt-4">Rest all other props are allowed in this round.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Judging Criteria:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Choreography</li>
              <li>Technique</li>
              <li>Creativity</li>
              <li>Energy</li>
              <li>Costume</li>
              <li>Overall Impact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesRegulation;
