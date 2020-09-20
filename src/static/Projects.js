const backpropagationPdf = require('../../PDF/Seminararbeit.pdf');

const projects = [
  {
    key: 'yc-course',
    title: 'YelpCamp',
    sub: '7th Semester, Udemy Course',
    description: 'This website is the result of a course on Udemy that introduced me to web development and tought me the basics of HTML, CSS and JavaScript. The site is a place to leave reviews on fictive camping sites. It has authentication and authorization and is connected to a mongo DB.',
    source: 'https://young-fortress-00311.herokuapp.com/',
    source_text: 'Visit',
    download: false,
  },
  {
    key: 'nn-sem',
    title: 'Backpropagation und -varianten',
    sub: '6th Semester, Seminar Work',
    description: 'In this paper I explain the idea behind backpropagation - the "magic" that makes neural networks learn - and also look at some variations of the basic implementation, that aim to fix some of its problems. (German only)',
    source: backpropagationPdf,
    source_text: 'Download',
    download: true,
  },
  {
    key: 'cc-game',
    title: 'Cybercell Game',
    sub: '4th Semester, Game Engineering Class',
    description: 'This is the very first "game" I wrote together with a friend. Its a round based shooter, playing in the future. Written in C# and Unity it was the first experience of working on the same project for longer than a week.',
    source: 'https://www.youtube.com/watch?v=bo3Ef76Esog&feature=youtu.be',
    source_text: 'Video',
    download: false,
  },
];

export default projects;