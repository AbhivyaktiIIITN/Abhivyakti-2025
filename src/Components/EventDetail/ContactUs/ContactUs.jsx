import React from "react";
import ContactUsImg from "../../../../public/assets/EventDetail/ContactUs.png"
const ContactUs = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center relative">
      <div className="text-white py-10 px-4 w-full lg:w-1/2 flex flex-col items-center">
         <div className="w-full flex flex-wrap justify-center ">
            <img src={ContactUsImg} className="h-52 sm:h-80" />
          </div>
        <div className="w-full max-w-3xl space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-2 place-items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8  ">
            <div className="space-y-2 p-5">
              <h1 className="text-2xl ">Club Head </h1>
              <p>Rahul Gandhi</p>
              <p>+91 9969496900</p>
              <p>bt96@iiitn.ac.in</p>
            </div>
            <div className="space-y-1 p-5">
              <h1 className="text-2xl ">Contact 2</h1>
              <p>Rahul Gandhi</p>
              <p>+91 9969496900</p>
              <p>bt96@iiitn.ac.in</p>
            </div>
            <div className="space-y-1 p-5">
              <h1 className="text-2xl ">Any other Contact</h1>
              <p>Rahul Gandhi</p>
              <p>+91 9969496900</p>
              <p>bt96@iiitn.ac.in</p>
            </div>
          </div>
          <div className=" grid grid-cols-1">
            <form className=" p-6 rounded-[20px] w-96 grid grid-cols-1 gap-3">
              <div className="space-y-1">
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="w-full bg-gray-800 text-gray-300 rounded-[20px] px-4 py-3 focus:outline-none  focus:ring-gray-600"
                />
              </div>

              <div className="space-y-1">
                <input
                  id="contact"
                  type="text"
                  placeholder="Phone no. / email address"
                  className="w-full bg-gray-800 text-gray-300 rounded-[20px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>

              <div className="space-y-1">
                <textarea
                  id="queries"
                  placeholder="Ask your Queries"
                  rows={4}
                  className="w-full bg-gray-800 text-gray-300 rounded-[20px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
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
