const backPropImage = require( '../../images/BackPropFront.png' );
const yelpCampImage = require( '../../images/YelpCampFront.png' );
const cyberImage = require( '../../images/CybercellFront.png' );
const tragedyImage = require( '../../images/TragedyFront.png' );

const projects = [
  {
    key: 'yc-course',
    header: 'YelpCamp',
    time: '7th Semester',
    frontSub: 'Udemy Course',
    backSub: '',
    description: 'This website is the result of a course on Udemy that introduced me to web development and tought me the basics of HTML, CSS and JavaScript. The site is a place to leave reviews on fictive camping sites. It has authentication and authorization and is connected to a mongo DB.',
    ref: 'https://young-fortress-00311.herokuapp.com/',
    refText: 'Visit',
    download: false,
    image: yelpCampImage,
  },
  {
    key: 'public-goods-sem',
    header: 'Tragedy of the Commons',
    time: '6th Semester',
    frontSub: 'Project Work',
    backSub: '',
    description: 'Together with 3 student colleagues, our professor and another professor working in the US, we used agent based simulation to research if the tragedy of the commons could be avoided by Group-level selection. This paper contains the results of our work.',
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
    description: 'In this paper I explain the idea behind backpropagation - the "magic" that makes neural networks learn - and also look at some variations of the basic algorithm, that aim to fix some of its problems. (German only)',
    ref: 'https://1drv.ms/b/s!AhSIZrInM6aXkSaEwQnlspLieMBb?e=yrD84X',
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
    description: 'This is the very first "game" a friend and me wrote together. Its a round based shooter, playing in the future. Written in C# and Unity it was the first experience of working on the same project for longer than a week.',
    ref: 'https://www.youtube.com/watch?v=bo3Ef76Esog&feature=youtu.be',
    refText: 'Video',
    download: false,
    image: cyberImage,
  },
];

export default projects;