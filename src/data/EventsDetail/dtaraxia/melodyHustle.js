export const melodyHustle = {
    eventHeaderData: {
        eventName: "Melody",
        eventName2: "Hustle",
        clubName: "D-taraxia",
        eventShortDescription: "Duet Dance Competition",
        clubLogo: "/assets/EventDetail/dtaraxia/ClubLogo.png",
        bgUrlLeft: "/assets/EventDetail/dtaraxia/Event-bg.png",
        bgUrlRight: "linear-gradient(90deg, #FDFDFB 0%, #FE5013 100%)",
        leftStatueUrl: "/assets/EventDetail/dtaraxia/statue-left.png",
        rightStatueUrl: "/assets/EventDetail/dtaraxia/statue-right.png",
    },

    eventIntroData: {
        isFree: true,
        drip: "/assets/EventDetail/dtaraxia/drip1.png",
        deadline: "15 Feb 2025",
        teamSize: "2 Members",
        fee: "₹ 300",
        prizePool: "₹ 20,000",
        description:
            "Two dancers, one beat, infinite magic! Melody Hustle is your chance to showcase perfect harmony and electrifying chemistry. Tell your story through synchronized steps and mesmerizing moves. Grab your partner and set the stage ablaze. Together, create moments that leave the crowd cheering!",
        unstopLink:
            "https://unstop.com/events/melody-hustle-abhivyakti-2025-iiit-nagpur-1302807",
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
        drip: "/assets/EventDetail/dtaraxia/drip2.png",
        roundsData: [
            {
                title: "Round 1: Online Elimination",
                highlight: [1],
                rules: [
                    "Participants have to submit a video of them performing for 1-1.5 minutes.",
                    "Participants must upload a PDF titled in the format: 'Team Name/Participant Name_CollegeName_Event Name.pdf', containing a drive link to their video/audio submission as per event rules.",
                    "Ensure the link has proper access permissions to avoid evaluation issues. The organizing committee is not responsible for submissions that cannot be accessed.",
                    "All dance forms are allowed in this round.",
                    "Props are allowed in this round.",
                    "The video must be shot on a static camera.",
                    "The video must not be edited at any point of time.",
                    "Approximately 8 teams will be selected for the final round.",
                ],
            },
            {
                title: "Round 2: Finals",
                highlight: [1],
                rules: [
                    "Time duration for this round is 4-7 minutes (+1 minute for stage setup and clearance).",
                    "Participants must upload a PDF titled in the format: 'Team Name/Participant Name_CollegeName_Event Name.pdf', containing a drive link to their video/audio submission as per event rules.",
                    "This round is a prop round; participants must prepare their performance with at least 1 prop.",
                    "The prop should be used in dance for a total of at least 20 seconds.",
                    "The performance can be an extension of their round 1 performance.",
                    "Prop usage will also be one judging criterion in this round.",
                    "Props that can damage the stage or harm anyone are not allowed, including fire, blades, sharp mirrors, scissors, and nails.",
                ],
            },
            {
                title: "Note",
                highlight: [1, 8],
                rules: [
                    "All participants competing in the ABHIVYAKTI finals and online competition must be 22 years of age or below. This rule is mandatory and ensures a fair platform for showcasing young talent.",
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
                    "Prop Usage",
                ],
            },
        ],
    },

    eventPrizeData: {
        prizeData: [
            {
                position: "Winner",
                prizeAmount: "Worth 12,000",
                imageSrc: "/assets/EventDetail/dtaraxia/First.png",
            },
            {
                position: "1st Runner Up",
                prizeAmount: "Worth 8,000",
                imageSrc: "/assets/EventDetail/dtaraxia/Second.png",
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
                title: "D-Taraxia",
                name: "Sathvika Bogam",
                phone: "+919381469800",
                email: "dtaraxia@iiitn.ac.in",
            },
        ],
    },
};
