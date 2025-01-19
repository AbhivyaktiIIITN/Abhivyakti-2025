import React,{ useEffect, useRef, useState }  from "react";
import ContactUsImg from "/assets/EventDetail/ContactUs.png"

const ContactUs = ({ contacts,onSubmit }) => {
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
          { threshold: 0.2 }
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
      name: (e.currentTarget.elements.namedItem("name")).value,
      contact: (e.currentTarget.elements.namedItem("contact")).value,
      queries: (e.currentTarget.elements.namedItem("queries")).value,
    };
    onSubmit(formData);
  };

  return (
    <div className="w-full h-fit flex flex-col items-center justify-center relative">
      <div className="text-white py-10 px-4 w-full lg:w-1/2 flex flex-col items-center" ref={sectionRef}>
        <div className={`w-full flex flex-wrap justify-center opacity-0 translate-y-24 transition-all duration-1000 ease-in-out ${
            animate ? "opacity-100 translate-y-0 -translate-y-0" : ""
          }`}>
          <img src={ContactUsImg} alt="Contact Us" className="h-52 sm:h-80" />
        </div>
        <div className="w-full max-w-3xl space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-2 place-items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {contacts.map((contact, index) => (
              <div key={index} className="space-y-2 p-5">
                <h1 className="text-2xl">{contact.title}</h1>
                <p>{contact.name}</p>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
