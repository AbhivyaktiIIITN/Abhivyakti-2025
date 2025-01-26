import React, { useEffect, useRef, useState } from "react";
import RulesAndRegulationImg from "/assets/EventDetail/RulesAndRegulation.png";
import "../RulesRegulation/rules.css";
import "../../../css/font.css"

const RulesRegulation = ({ roundsData, judgingCriteriaData }) => {
    const sectionRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                }
                else {
                    setAnimate(false);
                }
            },
            { threshold: 0.05 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return (
        <div className="w-full min-h-screen relative text-white px-4 lg:px-16 py-10 flex flex-wrap justify-center urbanist-font font-normal">
            <div className="w-2/3 h-full sm:w-1/2 flex flex-col " ref={sectionRef}>
                <div className={`w-full flex flex-wrap justify-center opacity-0 header ${animate ? "slide-in" : ""
                    }`}>
                    <img src={RulesAndRegulationImg} alt="Rules and Regulations" className="h-20 sm:h-[18vh] lg:h-64 mb-12" />
                </div>
                <div className="text-lg lg:text-xl" >
                    {roundsData.map((round, index) => (
                        <div key={index} className="mb-8">
                            <h3 className="text-xl font-semibold mb-2 py-5">{round.title}</h3>
                            <ul className="list-disc m-0 md:ml-16 sm:ml-16 lg:ml-16 space-y-2">
                                {round.rules.map((rule, ruleIndex) => (
                                    <li key={ruleIndex}>{rule}</li>
                                ))}
                                {round.disallowedProps && (
                                    <>
                                        <li className="mt-10">Props that are not allowed:</li>
                                        <ul className="list-disc ml-16 space-y-2">
                                            {round.disallowedProps.map((prop, propIndex) => (
                                                <li key={propIndex}>{prop}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </ul>
                        </div>
                    ))}
                    <div className="mb-8 flex flex-col">
                        {

                            judgingCriteriaData.length > 0 &&
                                judgingCriteriaData[0].title === "Committees" ? (
                                <>
                                    <h2 className="text-2xl font-semibold mb-4">Available Committes:</h2>
                                    {
                                        judgingCriteriaData.map((round, index) => {
                                            // console.log(round.criteria);
                                            return (
                                                <div className="m-0 md:ml-16 sm:ml-16 lg:ml-16" key={index}>
                                                    <h3 className="text-xl font-semibold mb-2 py-5">{round.title}</h3>
                                                    {
                                                        round.criteria &&
                                                        round.criteria.map((criteria, index) => (
                                                            <ul key={index} className="list-disc p-0 md:pl-16 sm:pl-16 lg:pl-16 space-y-2">
                                                                <li>{criteria}</li>
                                                            </ul>
                                                        ))
                                                    }
                                                </div>
                                            );
                                        })
                                    }
                                </>
                            ) : (judgingCriteriaData.length > 0 &&
                                <>
                                    <h2 className="text-2xl font-semibold mb-4">Judging Criteria:</h2>
                                    {
                                        judgingCriteriaData.map((round, index) => {
                                            // console.log(round.criteria);
                                            return (
                                                <div className="m-0 md:ml-16 sm:ml-16 lg:ml-16" key={index}>
                                                    <h3 className="text-xl font-semibold mb-2 py-5">{round.title}</h3>
                                                    {
                                                        round.criteria &&
                                                        round.criteria.map((criteria, index) => (
                                                            <ul key={index} className="list-disc p-0 md:pl-16 sm:pl-16 lg:pl-16 space-y-2">
                                                                <li>{criteria}</li>
                                                            </ul>
                                                        ))
                                                    }
                                                </div>
                                            );
                                        })
                                    }
                                </>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RulesRegulation;