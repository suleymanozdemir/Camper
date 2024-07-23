export type Data = {
    id: number;
    image: any;
    title: string;
    text: string;
};

export const data: Data[] = [
    {
        id: 1,
        image: require("../assets/images/onboardingScreen/onboard-1"),
        title: "Your Tasks",
        text: "I always reminds you about your planned activities. which is always my priority and your importance.",
    },
    {
        id: 2,
        image: require("../assets/images/onboardingScreen/onboard-2"),
        title: "Capture Your Memories",
        text: "We know that catching photos are necessary in your trip. that’s why we have built-in camera and gallery feature.",
    },
    {
        id: 3,
        image: require("../assets/images/onboardingScreen/onboard-3"),
        title: "Track Your Fitness",
        text: "Fitness is one of the main thing which is really inportant to your body and we track it in every second.",
    },
    {
        id: 4,
        image: require("../assets/images/onboardingScreen/onboard-4"),
        title: "There Is Much More",
        text: "We have bunch of other cool features. which is super helpful for your next camping trip. so what are you waiting for?",
    },
];
