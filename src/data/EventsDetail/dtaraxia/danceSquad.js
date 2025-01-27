export const danceSquad = {
    eventHeaderData: {
        eventName: "Dance",
        eventName2: "Squad",
        clubName: "D-taraxia",
        eventShortDescription: "Group Dance Competition",
        clubLogo: "/assets/EventDetail/dtaraxia/ClubLogo.png",
        bgUrlLeft: "/assets/EventDetail/dtaraxia/Event-bg.png",
        bgUrlRight: "linear-gradient(90deg, #FDFDFB 0%, #FE5013 100%)",
        leftStatueUrl: "/assets/EventDetail/dtaraxia/statue-left.png",
        rightStatueUrl: "/assets/EventDetail/dtaraxia/statue-right.png",
    },

    eventIntroData: {
        deadline: "15 Feb 2025",
        teamSize: "3-15 Members",
        fee: "₹ 500",
        prizePool: "₹ 25,000",
        description:
            "Strength in unity, power in moves—welcome to Dance Squad! Showcase your squad’s energy, coordination, and creativity on stage. Let your formations and flawless grooves captivate the audience. This is where every step becomes a statement. Bring your squad, own the rhythm, and rule the stage!",
        unstopLink:
            "https://unstop.com/events/dance-squad-abhivyakti-2025-iiit-nagpur-1302815",
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
                highlight: [1,8],
                rules: [
                    "Total number of members allowed for GROUP in this event is 3-15 per team.",
                    "Participants must upload a PDF titled in the format: 'Team Name/Participant Name_CollegeName_Event Name.pdf', containing a drive link to their video/audio submission as per event rules.",
                    "Participants have to submit a video of them performing for 1-1.5 minutes.",
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
                    "Total number of members allowed for GROUP are 3-15 members including 2 assistants for lighting and sounds.",
                    "Participants must upload a PDF titled in the format: 'Team Name/Participant Name_CollegeName_Event Name.pdf', containing a drive link to their video/audio submission as per event rules.",
                    "Time duration for this round is 5-8 minutes (+1 minute for stage setup and clearance).",
                    "The performance can be an extension of their round 1 performance.",
                    "Props are allowed in this round.",
                    "Props that can damage the stage or harm anyone are not allowed, including fire, blades, sharp mirrors, scissors, and nails.",
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
                prizeAmount: "Worth 15,000",
                imageSrc: "/assets/EventDetail/dtaraxia/First.png",
            },
            {
                position: "1st Runner Up",
                prizeAmount: "Worth 10,000",
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
                title: "D-taraxia",
                name: "Hanithya Ambidi",
                phone: "+916300882326",
                email: "dtaraxia@iiitn.ac.in",
            },
        ],
    },
};
