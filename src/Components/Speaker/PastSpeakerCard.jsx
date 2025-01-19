
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function PastSpeakerCard({ speaker, index }) {
    return (
        <div className="md:w-[50vw] w-[75vw] flex justify-between mr-5 card-wrapper" key={index}>
            <div className="w-1/2 h-full flex flex-col urbanist-font text-white p-10">
                <p
                    className="text-7xl capitalize"
                >
                    {speaker.name}
                </p>
                <p
                    className="text-3xl mt-2 font-normal"
                >
                    {speaker.about}
                </p>
                <div
                    className="border-l-8 flex mt-2 pl-10 gap-2 text-3xl"
                >
                    <a href={speaker.insta} target="_blank" rel="noreferrer"><FaInstagram /></a>
                    <a href={speaker.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a href={speaker.facebook} target="_blank" rel="noreferrer"><FaFacebook /></a>
                </div>
            </div>
            <div >
                <img src={speaker.image} alt="" className="img-radial-gradient" />
            </div>
        </div>
    )
}

export default PastSpeakerCard