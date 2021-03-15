const backPropImage = require('../images/BackPropFront.png');
const yelpCampImage = require('../images/YelpCampFront.png');
const cyberImage = require('../images/CybercellFront.png');
const tragedyImage = require('../images/TragedyFront.png');
const perlinImage = require('../images/PerlinNoiseFront.png');

const projects = [
  {
    key: 'moneywatch',
    header: 'MoneyWatch',
    time: 'Free Time',
    frontSub: 'Personal Project',
    backSub: '',
    description:
      "An application to help you keep track of your expenses and incomes. It can create a graphical overview to show you the distributions of how you spend or earn your money. Developed using Angular, Cordova and Firebase. Once published, you'll find the download link here.",
    ref: '',
    refText: '',
    download: false,
  },
  {
    key: 'ig-clone',
    header: 'Instagram Clone',
    time: 'Free Time',
    frontSub: 'Video Course',
    backSub: '',
    description:
      'A project to learn about Firebase, Redux(-Thunk), Expo and React Native. It contains authentication, a following, like and comment system as well as a user search.',
    ref: '',
    refText: '',
    download: false,
  },
  {
    key: 'ba-thesis',
    header: 'Bachelor Thesis',
    time: '8th Semester',
    frontSub: 'Final Project',
    backSub: '',
    description:
      'A project where I developed a prototype for a web editor. The editor allows a software engineer to create a network like representation of the components of his software projects. This helps him to keep a better overview of the structure. If you are interested in reading it, please contact me.',
    ref: '',
    refText: '',
    download: false,
  },
  {
    key: 'yc-course',
    header: 'YelpCamp',
    time: 'Free Time',
    frontSub: 'Udemy Course',
    backSub: '',
    description:
      'This website is the result of a course on Udemy that introduced me to web development and taught me the basics of HTML, CSS and JavaScript. The site is a place to leave reviews on fictive camping sites. It has authentication and authorization and is connected to a mongo DB.',
    ref: 'https://young-fortress-00311.herokuapp.com/',
    refText: 'Visit',
    download: false,
    image: yelpCampImage,
  },
  {
    key: 'perlin-ki',
    header: 'Perlin Noise 3D Maps',
    time: '7th Semester',
    frontSub: 'Personal Interest',
    backSub: '',
    description:
      'In the AI class we heard about the idea of creating 3D landscapes using Perlin Noise. This is a (not finished) C++ programm where I tried to do so. The visualization was done with Python.',
    ref: 'https://github.com/SpraylnlPray/PerlinNoise',
    refText: 'GitHub',
    download: false,
    image: perlinImage,
  },
  {
    key: 'univ-stack',
    header: 'Universal Stack',
    time: 'Free Time',
    frontSub: 'Personal Interest',
    backSub: '',
    description:
      'A short C++ program to explore void pointers and functions like malloc, calloc and memset.',
    ref: 'https://github.com/SpraylnlPray/UniversalStack',
    refText: 'GitHub',
    download: false,
    image: '',
  },
  {
    key: 'dm-binConv',
    header: 'Arithmetic Encoding',
    time: '7th Semester',
    frontSub: 'Weekly Assignment',
    backSub: '',
    description:
      'A short program that converts a string message into its binary representation, using an algorithm proposed by Witten, Neal and Cleary in 1987. It was topic in the Ditigal Media class by Prof. Dr. Ulhaas.',
    ref: 'https://github.com/SpraylnlPray/BinConverter',
    refText: 'GitHub',
    download: false,
    image: '',
  },
  {
    key: 'public-goods-sem',
    header: 'Tragedy of the Commons',
    time: '6th Semester',
    frontSub: 'Project Work',
    backSub: '',
    description:
      'Together with 3 student colleagues, our professor and another professor working in the US, we used agent based simulation to research if the tragedy of the commons could be avoided by Group-level selection. This paper contains the results of our work.',
    ref: 'https://arxiv.org/abs/2004.11124',
    refText: 'Visit',
    download: false,
    image: tragedyImage,
  },
  {
    key: 'nn-sem',
    header: 'Backpropagation und -varianten',
    time: '6th Semester',
    frontSub: 'Seminar Work',
    backSub: '',
    description:
      'In this paper I explain the idea behind backpropagation - the "magic" that makes neural networks learn - and also look at some variations of the basic algorithm, that aim to fix some of its problems. (German only)',
    ref:
      'https://onedrive.live.com/view.aspx?cid=97A63327B2668814&authKey=%21AITBCeWykuJ4wFs&resid=97A63327B2668814%212214&canary=%2Bv3icuzS1GbOT89hao1x0xSixfhD6B58fmjoUIXSdeY%3D3&ithint=%2Epdf&open=true&app=WordPdf',
    refText: 'View',
    download: false,
    image: backPropImage,
  },
  {
    key: 'cc-game',
    header: 'Cybercell Game',
    time: '4th Semester',
    frontSub: 'Game Engineering Class',
    backSub: '',
    description:
      'This is the very first "game" a friend and me wrote together. Its a round based shooter, playing in the future. Written in C# and Unity it was the first experience of working on the same project for longer than a week.',
    ref: 'https://www.youtube.com/watch?v=bo3Ef76Esog&feature=youtu.be',
    refText: 'Video',
    download: false,
    image: cyberImage,
  },
];

export default projects;
