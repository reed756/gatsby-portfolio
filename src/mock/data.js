import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'James Reed | Front End Web Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'James Reed',
  subtitle: 'Front-End Web Developer',
  ctaOne: 'Know More',
  ctaTwo: 'Projects',
};

// ABOUT DATA
export const aboutData = {
  img: 'photo.jpeg',
  paragraphOne:
    "I'm James, a web developer from Selsey (a small town near Portsmouth) that is based in London. I'm passionate about tech and I love the problem-solving side of web development and seeing my ideas turned into reality. I also find learning new technologies and implementing them for new projects massively rewarding.",
  paragraphTwo:
    "The projects I'm working on right now are mostly React led. My days at the moment are spent learning Firebase and how to successfully integrate it into an application. My long-term goal is to become an effective full stack developer, able to efficiently turn great ideas into working products.",
  paragraphThree:
    'In my spare time I play tennis, learn German, and love watching football matches.',
  resume:
    'https://www.canva.com/design/DAElBtxbSts/J0A1bcMx93gw95Uoe8WwJg/view?utm_content=DAElBtxbSts&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'weatherapp.png',
    title: 'Weather-app',
    info: 'An application that shows the current weather conditions from a location entered by the user',
    info2: 'Javascript, OpenWeatherAPI, Webpack',
    url: 'https://reed756.github.io/weather-app/',
    repo: 'https://github.com/reed756/weather-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cvmaker.png',
    title: 'CV Maker',
    info: 'An application using create-react-app that allows the user to enter their general, work, and education information to see a preview of how this would look as a CV.',
    info2: 'React, React Hooks',
    url: 'https://reed756.github.io/cv-project/',
    repo: 'https://github.com/reed756/cv-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'memorycardgame.png',
    title: 'Memory Card Game',
    info: "A game created using create-react-app where the user can't click the same meme twice and see's how high a score they can get. Utilises React Hooks and Imgflip's meme generator RESTful JSON API",
    info2: 'React, React Hooks, Meme Generator API',
    url: 'https://reed756.github.io/memory-card/',
    repo: 'https://github.com/reed756/memory-card', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'shopcart.png',
    title: 'Shopping Cart',
    info: 'An application that mimics a store web site where a user can go to either the homepage or store page and select items they wish to purchase which then populate a shopping cart.',
    info2: 'React, FortniteAPI, react-router',
    url: 'https://reed756.github.io/shopping-cart/',
    repo: 'https://github.com/reed756/shopping-cart', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'reedandj1@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/james-reed-a6b413111/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/reed756',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
