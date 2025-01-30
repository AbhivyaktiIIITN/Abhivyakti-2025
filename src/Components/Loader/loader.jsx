import React, { useState } from "react";

function Loader() {
    return (
        <div
            className="w-screen h-screen bg-[#1e1e1e] flex justify-center items-center overflow-hidden"
            style={{
                background:
                    "radial-gradient(circle, rgb(30,30,30) 10%, rgba(0,0,0) 100%)",
            }}
        >
            <img
                className="min-h-[100px] h-1/3 aspect-square animate-fade"
                src="/assets/logo1.png"
                alt="AB Logo"
            />
        </div>
    );
}

export default Loader;
