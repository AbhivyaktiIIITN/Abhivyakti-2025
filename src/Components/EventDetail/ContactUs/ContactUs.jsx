import React, { useEffect, useRef, useState } from "react";
import ContactUsImg from "/assets/EventDetail/ContactUs.png";
import "../ContactUs/contactUs.css";
import "../../../css/font.css";

const ContactUs = ({ contacts, onSubmit }) => {
    const sectionRef = useRef(null);
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                } else {
                    setAnimate(false);
                }
            },
            { threshold: 0.2 },
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
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: e.currentTarget.elements.namedItem("name").value,
            contact: e.currentTarget.elements.namedItem("contact").value,
            queries: e.currentTarget.elements.namedItem("queries").value,
        };
        onSubmit(formData);
    };

    return (
        <div className="w-full h-fit flex flex-col items-center justify-center relative urbanist-font font-normal">
            <div
                className="text-white py-10 px-4 w-full lg:w-1/2 flex flex-col items-center"
                ref={sectionRef}
            >
                <div
                    className={`w-full flex flex-wrap justify-center opacity-0 header ${
                        animate ? "slide-in" : ""
                    }`}
                >
                    <img
                        src={ContactUsImg}
                        alt="Contact Us"
                        className="h-52 sm:h-80"
                    />
                </div>
                <div className="w-full max-w-3xl space-y-4 flex  items-center justify-center gap-2 place-items-center">
                    <div className="flex flex-wrap gap-8">
                        {contacts.map((contact, index) => (
                            <div
                                key={index}
                                className="space-y-2 p-5 flex flex-col"
                            >
                                <h1 className="text-xl">{contact.title}</h1>
                                <p className=" text-2xl font-bold">
                                    {contact.name}
                                </p>
                                <a href={`tel:${contact.phone}`}>
                                    {contact.phone}
                                </a>
                                <a href={`mailto:${contact.email}`}>
                                    {contact.email}
                                </a>
                            </div>
                        ))}
                    </div>
                    {/* <div className="grid grid-cols-1">
                        <form
                            className="p-3 rounded-[20px] w-[80%] sm:w-96 grid grid-cols-1 gap-3"
                            onSubmit={handleSubmit}
                        >
                            <div className="space-y-1">
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-gray-800 text-gray-300 rounded-[20px] px-4 py-3 focus:outline-none focus:ring-gray-600"
                                    required
                                />
                            </div>
                            <div className="space-y-1">
                                <input
                                    id="contact"
                                    type="text"
                                    placeholder="Phone no. / email address"
                                    className="w-full bg-gray-800 text-gray-300 rounded-[20px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                    required
                                />
                            </div>
                            <div className="space-y-1">
                                <textarea
                                    id="queries"
                                    placeholder="Ask your Queries"
                                    rows={4}
                                    className="w-full bg-gray-800 text-gray-300 rounded-[20px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                    required
                                />
                            </div>
                            <div className="space-y-1 flex flex-wrap justify-end">
                                <button
                                    type="submit"
                                    className="w-1/2 border border-white text-white bg-transparent rounded-lg py-2 hover:bg-gray-400 transition duration-200"
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
