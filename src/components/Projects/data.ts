export type projectProps = {
  projectId: number;
  projectName: string;
  projectDesc: string;
  techUsed: string[];
  projectImagePath: string;
  link: string;
  repo: string;
};

export const data: projectProps[] = [
  {
    projectId: 1,
    projectName: 'Defino',
    projectDesc:
      'Find word meanings quickly with our easy-to-use dictionary web app. Access millions of words and definitions, stay up-to-date with the latest language trends, and start exploring now!',
    techUsed: ['React', 'Tailwind CSS', 'Dictionary API'],
    projectImagePath: '/mobile_images/defino_mobile.png',
    link: 'https://dict-web-app.netlify.app/',
    repo: 'https://github.com/eytanbab/react/tree/master/dictionary-web-app',
  },
  {
    projectId: 2,
    projectName: 'Advice Generator',
    projectDesc:
      'Get instant guidance with our advice generator app! Simply click the button and receive a random piece of advice, based on expert insights and proven psychological principles.',
    techUsed: ['React', 'Tailwind CSS', 'Advice Slip API'],
    projectImagePath: '/mobile_images/advice_mobile.png',
    link: 'https://advice-generator-7.netlify.app/',
    repo: 'https://github.com/eytanbab/react/tree/master/advice-generator',
  },
  {
    projectId: 3,
    projectName: 'Shortly',
    projectDesc:
      'Introducing our URL shortener - the perfect tool for simplifying and streamlining your online presence! With our app, you can quickly and easily generate shortened links that are easy to remember and share.',
    techUsed: ['React', 'Tailwind CSS', 'shrtco.de API'],
    projectImagePath: '/mobile_images/shortly_mobile.png',
    link: 'https://url-shortener-2.netlify.app/',
    repo: 'https://github.com/eytanbab/react/tree/master/url-shortener-2',
  },
  {
    projectId: 4,
    projectName: 'Weatherly',
    projectDesc:
      "Stay ahead of the weather with our user-friendly web app! With real-time updates and accurate forecasts, you'll always be prepared for whatever Mother Nature has in store. ",
    techUsed: ['React', 'Tailwind CSS', 'weatherapi '],
    projectImagePath: '/mobile_images/weatherly_mobile.png',
    link: 'https://weatherly-web-app.netlify.app/',
    repo: 'https://github.com/eytanbab/react/tree/master/weather-web-app',
  },
  {
    projectId: 5,
    projectName: 'Tip calculator',
    projectDesc:
      'Tired of the hassle of calculating tips? Our tip calculator app is here to help! With just a few taps, you can easily split the bill and calculate the perfect tip for your meal. ',
    techUsed: ['React', 'CSS'],
    projectImagePath: '/mobile_images/calculator_mobile.png',
    link: 'https://calculate-my-tip.netlify.app/',
    repo: 'https://github.com/eytanbab/react/tree/master/tip-calculator-app',
  },
];
