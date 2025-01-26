export const musicalArmageddon = {
    eventHeaderData: {
        eventName: "Musical ",
        eventName2: "Armageddon",
        clubName: "Crescendo",
        eventShortDescription: "Band Battle",
        clubLogo: "/assets/EventDetail/crescendo/ClubLogo.png",
        bgUrlLeft: "/assets/EventDetail/crescendo/Event-bg.png",
        bgUrlRight: "linear-gradient(90deg, #FDFDFB 0%, #34FA46 100%)",
        leftStatueUrl: "/assets/EventDetail/crescendo/statue-left.png",
        rightStatueUrl: "/assets/EventDetail/crescendo/statue-right.png",
    },

    eventIntroData: {
        deadline: "15 Feb 2025",
        teamSize: "3-8 Members",
        fee: "₹ 400",
        prizePool: "₹ 25,000",
        description:
            "Gear up for an adrenaline-charged showdown at 'Musical Armageddon' – the ultimate battle of the bands! Brace yourself for an electrifying night as bands from across genres unleash their talent, setting the stage ablaze with performances that will leave you spellbound. With an expert panel of industry judges and a crowd hungry for rhythm, witness the rise of a new champion in this symphony of epic beats, exhilarating melodies, and unmatched energy. It's not just a competition – it's a night where legends are born, and music reigns supreme!",
        unstopLink: "",
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
        roundsData: [
            {
                title: "Online Round",
                rules: [
                    "Participants can perform any number of songs (in Hindi, English, or both) within 7 minutes. The recording must be RAW, without any FX modulation. Audio interfaces can be used for better sound quality.",
                    "Original compositions should be mentioned, as they include extra marks.",
                    "Exceeding the time limit by 90 seconds will lead to disqualification.",
                    "Participants can perform with a backing track using a predefined instrument list. The track must be emailed to '[MA_COLLEGE NAME_TEAM NAME]' for fair judgment.",
                ],
            },
            {
                title: "Finals (Offline in Campus)",
                rules: [
                    "Participants can perform any number of songs (in Hindi, English, or both) within a time limit of 12 minutes. Additional 4 minutes will be given for sound check.",
                    "Original compositions should be mentioned, as they include extra marks. Band members should also be introduced.",
                    "Exceeding the time limit by 120 seconds will lead to disqualification.",
                    "Participants can perform with a backing track using a predefined instrument list. The track must be emailed to '[MA_COLLEGE NAME_TEAM NAME]' for fair judgment.",
                    "The instruments provided are 1 drum kit, 1 piano, 1 electric guitar, 1 semi-acoustic guitar, 1 tabla set, and 1 bass guitar.",
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
                    "Winners get a direct spot in Abhivyakti’s finale in the main fest.",
                ],
            },
            {
                title: "Judging Criteria: Finals",
                criteria: [
                    "Vocal and Instrumental Excellence (40 points)",
                    "Performance and Expression (30 points)",
                    "Overall Presentation (30 points)",
                    "Any misconduct, obscenity, or foul language can lead to on-the-spot disqualification.",
                    "The judges' collective scores across these categories will determine the final outcome of the competition.",
                ],
            },
        ],
    },

    eventPrizeData: {
        prizeData: [
            {
                position: "Winner",
                prizeAmount: "Worth 12,000",
                imageSrc: "/assets/EventDetail/crescendo/First.png",
            },
            {
                position: "1st Runner Up",
                prizeAmount: "Worth 8,000",
                imageSrc: "/assets/EventDetail/crescendo/Second.png",
            },
            {
                position: "2nd Runner Up",
                prizeAmount: "Worth 5,000",
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
                name: "Rhythm Agarwal",
                phone: "+916260778225",
                email: "crescendo@iiitn.ac.in",
            },
        ],
    },

    eventEligibilityData: {
        ageLimit: "22 years or below",
        note: "All participants competing in the ABHIVYAKTI finals and online competition must be 22 years of age or below.",
    },
};
