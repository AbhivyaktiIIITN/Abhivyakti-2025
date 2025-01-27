export const rapBattle = {
    eventHeaderData: {
        eventName: "RAP",
        eventName2: "Battle",
        clubName: "Abhivyakti",
        eventShortDescription: "Battle of the Rappers",
        clubLogo: "/assets/EventDetail/abcentral/ClubLogo.png",
        bgUrlLeft: "/assets/EventDetail/abcentral/Event-bg.png",
        bgUrlRight: "linear-gradient(90deg, #FDFDFB 0%, #FAF100 100%)",
        leftStatueUrl: "/assets/EventDetail/abcentral/statue-left.png",
        rightStatueUrl: "/assets/EventDetail/abcentral/statue-right.png",
    },
    
    eventIntroData: {
        drip: "/assets/EventDetail/abcentral/drip1.png",
        deadline: "15th Feb 2025",
        teamSize: "Individual Participation",
        fee: "Free",
        prizePool: "₹10,000",
        description:
            "RAP Battle is the ultimate stage for young rappers to showcase their talent. Participants must create and submit an original 1-minute rap video as a pure one-shot recording. The top performers will move to the next round, where they can unleash their creativity and compete for glory!",
        unstopLink:
            "https://unstop.com/events/rap-battle-abhivyakti-2025-iiit-nagpur-1350348",
    },

    eventTimelineData: {
        eventTimeline: [
            {
                title: "Submission Round (via Unstop)",
                date: new Date("15 Feb 2025"),
                bullets: [
                    "Participants have to submit a PDF containing the drive link of their submission video.",
                    "The drive link access must be open for smooth evaluation.",
                    "No other form of submission is allowed.",
                    "The submission format must be: 'Participant name_RAP.mp4'.",
                    "Start: 22 Jan 2025, 11:47 AM IST.",
                    "End: 15 Feb 2025, 11:59 PM IST.",
                ],
            },
            {
                title: "Final Round (Offline in Campus)",
                date: new Date("27 Feb 2025"),
                date2: new Date("28 Feb 2025"),
                bullets: [
                    "The shortlisted participants will compete in a live rap battle on campus.",
                ],
            },
        ],
    },

    eventRulesAndRegulationData: {
        drip: "/assets/EventDetail/abcentral/drip2.png",
        roundsData: [
            {
                title: "Round 1: Online Submission",
                rules: [
                    "Participants must submit a 1-minute rap video.",
                    "The video must be a pure one-shot recording, with no edits.",
                    "Plagiarism is strictly prohibited—only original raps will be accepted.",
                    "Based on the submissions, the 10 best rappers will be shortlisted for the next round.",
                ],
            },
            {
                title: "generalRules",
                rules: [
                    "Submissions must be made before the deadline.",
                    "Ensure that the rap content is original and authentic.",
                    "The decision of the judges will be final and binding.",
                    "Violation of any rule may lead to disqualification.",
                ],
            },
        ],
        judgingCriteriaData: [],
    },

    eventPrizeData: {
        prizeData: [
            {
                position: "Winner",
                prizeAmount: "Worth 10,000",
                imageSrc: "/assets/EventDetail/abcentral/First.png",
            },
        ],
        additionalPrizes: ["Participation Certificate"],
    },

    eventContactData: {
        contacts: [
            {
                title: "Team AB",
                name: "Team Abhivyakti IIIT Nagpur",
                phone: "+917506103104",
                email: "abhivyakti@iiitn.ac.in",
            },
        ],
    },

    eventEligibilityData: {
        ageLimit: "22 years or below",
        note: "This rule ensures a fair platform for showcasing young talent.",
    },
};
