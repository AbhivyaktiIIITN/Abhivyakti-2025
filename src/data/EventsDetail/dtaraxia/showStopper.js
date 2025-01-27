export const showStopper = {
    eventHeaderData: {
        eventName: "Showstopper",
        eventName2: "",
        clubName: "D-taraxia",
        eventShortDescription: "Solo Dance Competition",
        clubLogo: "/assets/EventDetail/dtaraxia/ClubLogo.png",
        bgUrlLeft: "/assets/EventDetail/dtaraxia/Event-bg.png",
        bgUrlRight: "linear-gradient(90deg, #FDFDFB 0%, #FE5013 100%)",
        leftStatueUrl: "/assets/EventDetail/dtaraxia/statue-left.png",
        rightStatueUrl: "/assets/EventDetail/dtaraxia/statue-right.png",
    },

    eventIntroData: {
        deadline: "15 Feb 2025",
        teamSize: "1 Member",
        fee: "₹ 200",
        prizePool: "₹ 18,000",
        description:
            "Be the star of the night and own the stage at Showstopper! Let your moves speak louder than words and captivate the audience. It’s your moment to shine, dazzle, and leave everyone spellbound. Dance with passion, grace, and energy that steals the show. Make it unforgettable—be the ultimate Showstopper!",
        unstopLink:
            "https://unstop.com/events/showstopper-abhivyakti-2025-iiit-nagpur-1302784",
    },

    eventTimelineData: {
        eventTimeline: [
            {
                title: "Round 1: Online Elimination",
                date: new Date("15 Feb 2025"), // Add the specific date if available
            },
            {
                title: "Round 2: Finals",
                date: new Date("27 Feb 2025"),
                date2: new Date("28 Feb 2025"), // Add the specific date if available
            },
        ],
    },

    eventRulesAndRegulationData: {
        roundsData: [
            {
                title: "Round 1: Online Elimination",
                highlight: [1,6],
                rules: [
                    "Participants have to submit a video of them performing for 1-1.5 minutes.",
                    "Participants must upload a PDF titled in the format: 'Team Name/Participant Name_CollegeName_Event Name.pdf', containing a drive link to their video/audio submission as per event rules.",
                    "Ensure the link has proper access permissions to avoid evaluation issues. The organizing committee is not responsible for submissions that cannot be accessed.",
                    "Props are allowed in this round.",
                    "The video must be shot on a static camera.",
                    "The video must not be edited at any point of time.",
                    "8-10 participants will be selected for the final round.",
                ],
            },
            {
                title: "Round 2: Finals (Non-Classical Category)",
                highlight: [1],
                rules: [
                    "Time limit for this round is 4-6 minutes (can be adjusted based on participation).",
                    "Participants must upload a PDF titled in the format: 'Team Name/Participant Name_CollegeName_Event Name.pdf', containing a drive link to their video/audio submission as per event rules.",
                    "Participants must prepare their performance with at least 1 prop, which should be used for at least 20 seconds.",
                    "All dance forms are allowed in this round.",
                    "Prop usage will be one of the judging criteria in this round.",
                    "Props that can damage the stage or harm anyone, such as fire, blades, sharp mirrors, scissors, and nails, are not allowed.",
                ],
            },
            {
                title: "Round 2: Finals (Classical Category)",
                highlight: [1],
                rules: [
                    "Time limit for this round is 4-6 minutes (can be adjusted based on participation).",
                    "Participants must upload a PDF titled in the format: 'Team Name/Participant Name_CollegeName_Event Name.pdf', containing a drive link to their video/audio submission as per event rules.",
                    "Special emphasis will be given to facial expressions (bhava) and body language (abhinaya) as key judging criteria.",
                    "Participants must perform in proper classical attire and makeup, showcasing the essence of their chosen classical dance form.",
                    "Adherence to the taal (rhythm) and precision in movements will play a significant role in scoring.",
                    "Props can be used, but they will not be considered as a judging criterion.",
                ],
            },
        ],
        judgingCriteriaData: [
            {
                title: "Judging Criteria: Round 1",
                criteria: [
                    "Choreography",
                    "Technique",
                    "Creativity",
                    "Energy",
                    "Costume",
                    "Overall Impact",
                    "Expressions",
                ],
            },
            {
                title: "Judging Criteria: Round 2",
                criteria: [
                    "Choreography",
                    "Technique",
                    "Creativity",
                    "Energy",
                    "Costume",
                    "Overall Impact",
                    "Expressions",
                ],
            },
        ],
    },

    eventPrizeData: {
        prizeData: [
            {
                position: "Winner",
                prizeAmount: "Worth 9,000",
                imageSrc: "/assets/EventDetail/dtaraxia/First.png",
            },
            {
                position: "1st Runner Up",
                prizeAmount: "Worth 6,000",
                imageSrc: "/assets/EventDetail/dtaraxia/Second.png",
            },
            {
                position: "2nd Runner Up",
                prizeAmount: "Worth 3,000",
                imageSrc: "/assets/EventDetail/dtaraxia/Third.png",
            },
        ],
        additionalPrizes: ["Participation certificates"],
    },

    eventContactData: {
        contacts: [
            {
                title: "AB Team",
                name: "Abhivyakti Marketing Team",
                phone: "+919822464846",
                email: "abhivyakti.marketing@iiitn.ac.in",
            },
            {
                title: "D-taraxia",
                name: "Aditi Arya",
                phone: "+91 7024161222",
                email: "dtaraxia@iiitn.ac.in",
            },
        ],
    },
};
