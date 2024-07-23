export type Data = {
    id: number;
    image: any;
    title: string;
    text: string;
  };
  
  export const data: Data[] = [
    {
      id: 1,
      image: require('../assets/images/onboardingScreen/Illustration.png'),
      title: 'Lorem Ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      image: require('../assets/images/onboardingScreen/Illustration-1.png'),
      title: 'Lorem Ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      image: require('../assets/images/onboardingScreen/Illustration-2.png'),
      title: 'Lorem Ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 4,
        image: require('../assets/images/onboardingScreen/Illustration-3.png'),
        title: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];