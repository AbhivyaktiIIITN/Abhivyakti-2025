/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "custom-gradient":
                    "linear-gradient(96.67deg, #FAF100 0%, #FDC400 49.98%, #FFA600 99.97%)",
            },
            dropShadow: {
                arrow: "5px 5px 1px rgba(255, 255, 255)",
                title: "-0px -3px 2px #FFF700",
                "club-name": "0px 0px 2px #000000",
            },
            backdropBlur: {
                100: "100px",
            },
            animation: {
                width: "width",
                pulse: "pulse 1s infinite",
                fade: "fade 5s infinite",
                "fade-fast": "fade 2s infinite"
            },
            keyframes: {
                width: {
                    "0%": { width: "auto", left: "auto" },
                    "100%": { width: "100%", left: "0" },
                },
                pulse: {
                    "0%, 100%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.05)" },
                },
                fade: {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0 },
                }
            },
            screens: {
                xs: "470px",
                "2xs": "350px",
                mdlg: "1200px",
            },
        },
    },
    plugins: [],
};
