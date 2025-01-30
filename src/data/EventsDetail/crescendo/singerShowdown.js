export const singersShowDown = {
    eventHeaderData: {
        eventName: "Singers",
        eventName2: "Show-down",
        clubName: "Crescendo",
        eventShortDescription: "Solo Singing",
        clubLogo: "/assets/EventDetail/crescendo/ClubLogo.png",
        bgUrlLeft: "/assets/EventDetail/crescendo/Event-bg.png",
        bgUrlRight: "linear-gradient(90deg, #FDFDFB 0%, #34FA46 100%)",
        leftStatueUrl: "/assets/EventDetail/crescendo/statue-left.png",
        rightStatueUrl: "/assets/EventDetail/crescendo/statue-right.png",
    },

    eventIntroData: {
        drip: "/assets/EventDetail/crescendo/drip1.png",
        deadline: "15 Feb 2025",
        teamSize: "1 Member",
        fee: "₹ 200",
        prizePool: "₹ 15,000",
        description:
            "Step into the spotlight at Singers Show-down, where solo talents rise to the occasion in a battle of voices! Prepare to be enthralled as extraordinary singers take the stage, captivating hearts and minds with their soulful melodies and electrifying performances. From stirring ballads to powerful pop anthems, this is your chance to witness raw vocal brilliance and the birth of a new star. Get ready for an evening brimming with musical magic that will echo long after the final note!",
        unstopLink:
            "https://unstop.com/events/singers-show-down-abhivyakti-2025-iiit-nagpur-1301100",
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
                    "Participants can perform any number of songs (in Hindi, English or both) within a time limit of 3 minutes.",
                    "The recording should be RAW, with no FX modulation. Audio interfaces for clear sound quality are allowed.",
                    "In case of original composition, it should be mentioned as it includes extra marks.",
                    "Exceeding the time limit by 60 seconds will lead to disqualification.",
                    "Participants can optionally perform with an accompanist or a backing track with a predefined instrument list, which should be emailed for fair judgment.",
                    'Participants must upload a PDF titled in the format: "Team Name/Participant Name_College Name_Event Name.pdf," containing a drive link to their video/audio submission per event rules. Ensure the link has proper access permissions to avoid evaluation issues. The organizing committee is not responsible for submissions thatcannot be accessed.',
                ],
            },
            {
                title: "Finals (Offline in Campus)",
                rules: [
                    "Participants can perform any number of songs (in Hindi, English or both) within a time limit of 4 minutes. Additional 2 minutes will be given for sound check.",
                    "In case of original composition, it should be mentioned as it includes extra marks, and band members should be introduced.",
                    "Exceeding the time limit by 60 seconds will lead to disqualification.",
                    "Participants can optionally perform with an accompanist or a backing track with a predefined instrument list, which should be emailed for fair judgment.",
                ],
            },
        ],
        judgingCriteriaData: [
            {
                title: "Judging Criteria: Online Round",
                criteria: [
                    "Vocal and Instrumental Excellence (40 points)",
                    "Performance and Expression (30 points)",
                    "Overall Presentation (30 points)",
                    "The judges' collective scores across these categories will determine the final outcome of the competition.",
                    "Winners get a chance to grab a direct spot in Abhivyakti’s finale in the main fest.",
                ],
            },
            {
                title: "Judging Criteria: Finals",
                criteria: [
                    "Vocal Excellence (50 points)",
                    "Performance and Expression (20 points)",
                    "Overall Presentation (30 points)",
                    "The judges' collective scores across these categories will determine the final outcome of the competition.",
                    "Any misconduct, obscenity, or foul language can lead to on-the-spot disqualification.",
                ],
            },
        ],
    },

    eventPrizeData: {
        prizeData: [
            {
                position: "Winner",
                prizeAmount: "₹ 8,000",
                imageSrc: "/assets/EventDetail/crescendo/First.png",
            },
            {
                position: "1st Runner Up",
                prizeAmount: "₹ 5,000",
                imageSrc: "/assets/EventDetail/crescendo/Second.png",
            },
            {
                position: "2nd Runner Up",
                prizeAmount: "₹ 2,000",
                imageSrc: "/assets/EventDetail/crescendo/Third.png",
            },
        ],
        additionalPrizes: ["Participation certificates"],
    },

    eventContactData: {
        contacts: [
            {
                title: "AB team",
                name: "Abhivyakti Music Club",
                phone: "+919822464846",
                email: "musicclub@iiitn.ac.in",
            },
            {
                title: "Crescendo",
                name: "Vaishnavi Newalkar",
                phone: "+919244262279",
                email: "crescendo@iiitn.ac.in",
            },
        ],
    },
};
