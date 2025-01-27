export const chordsOfChaos = {
    eventHeaderData: {
        eventName: "Chords",
        eventName2: "of Chaos",
        clubName: "Crescendo",
        eventShortDescription: "Instrumental",
        clubLogo: "/assets/EventDetail/crescendo/ClubLogo.png",
        bgUrlLeft: "/assets/EventDetail/crescendo/Event-bg.png",
        bgUrlRight: "linear-gradient(90deg,#FDFDFB 0%, #34FA46 100%)",
        leftStatueUrl: "/assets/EventDetail/crescendo/statue-left.png",
        rightStatueUrl: "/assets/EventDetail/crescendo/statue-right.png",
    },
    
    eventIntroData: {
        drip: "/assets/EventDetail/crescendo/drip1.png",
        deadline: "15 Feb 2025",
        teamSize: "1-5 Members",
        fee: "₹ 200",
        prizePool: "₹ 15,000",
        description:
            "Chords of Chaos is more than a competition – it’s a stage for emerging instrumental virtuosos to dazzle the world. Whether you strum the strings of a guitar, dance across the keys of a piano, master the bow of a violin, or create magic with any other instrument, this is your moment to shine. Welcoming both soloists and ensembles, get ready to witness a symphony of talent, passion, and unbridled creativity that will leave the audience spellbound!",
        unstopLink:
            "https://unstop.com/events/chord-of-chaos-abhivyakti-2025-iiit-nagpur-1301115",
    },

    eventTimelineData: {
        eventTimeline: [
            {
                title: "Online Round",
                date: new Date("15 Feb 2025"), // Add the specific date if available
            },
            {
                title: "Finals (Offline in Campus)",
                date: new Date("27 Feb 2025"),
                date2: new Date("28 Feb 2025"), // Add the specific date if available
            },
        ],
    },

    eventRulesAndRegulationData: {
        drip: "/assets/EventDetail/crescendo/drip2.png",
        roundsData: [
            {
                title: "Online Round",
                rules: [
                    "Participants can perform any number of songs/solos/original compositions (to be mentioned) within a time limit of 5 minutes.",
                    "Exceeding the time limit by 60 seconds will lead to disqualification.",
                    "Participants can optionally perform with a backing track, which must be emailed to '[CC_COLLEGE NAME_TEAM NAME]' for fair judgment.",
                    "Any misconduct, obscenity, or foul language can lead to on-the-spot disqualification.",
                    'Participants must upload a PDF titled in the format: "Team Name/Participant Name_College Name_Event Name.pdf," containing a drive link to their video/audio submission per event rules. Ensure the link has proper access permissions to avoid evaluation issues. The organizing committee is not responsible for submissions that cannot be accessed.'
                ],
            },
            {
                title: "Finals (Offline in Campus)",
                rules: [
                    "Participants can perform any number of songs (in Hindi, English, or both) within a time limit of 5 minutes. Additional 2 minutes will be given for sound check.",
                    "Original compositions should be mentioned, as they include extra marks. Band members should also be introduced.",
                    "Exceeding the time limit by 60 seconds will lead to disqualification.",
                    "Participants can optionally perform with a backing track using a predefined instrument list, which must be emailed to '[CC_COLLEGE NAME_TEAM NAME]' for fair judgment.",
                    "The instruments provided include 1 drum kit.",
                ],
            },
        ],
        judgingCriteriaData: [
            {
                title: "Judging Criteria: Online Round",
                criteria: [
                    "Theme, accuracy, and timing (40 points)",
                    "Performance and expression (30 points)",
                    "Overall sync and coordination (30 points)",
                    "The judges' collective scores across these categories will determine the final outcome of the competition.",
                    "Winners get a chance to grab a direct spot in Abhivyakti’s finale in the main fest.",
                ],
            },
            {
                title: "Judging Criteria: Finals",
                criteria: [
                    "Theme, accuracy, and timing (40 points)",
                    "Performance and expression (30 points)",
                    "Overall sync and coordination (30 points)",
                    "The judges' collective scores across these categories will determine the final outcome of the competition.",
                ],
            },
        ],
    },

    eventPrizeData: {
        prizeData: [
            {
                position: "Winner",
                prizeAmount: "Worth 8,000",
                imageSrc: "/assets/EventDetail/crescendo/First.png",
            },
            {
                position: "1st Runner Up",
                prizeAmount: "Worth 5,000",
                imageSrc: "/assets/EventDetail/crescendo/Second.png",
            },
            {
                position: "2nd Runner Up",
                prizeAmount: "Worth 2,000",
                imageSrc: "/assets/EventDetail/crescendo/Third.png",
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
                title: "Crescendo",
                name: "Ayush Askar",
                phone: "+918263062862",
                email: "crescendo@iiitn.ac.in",
            },
        ],
    },
};
