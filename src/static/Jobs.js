const codesysLogo = require('../icons/Logos-Big/CODESYS-logo-standard.png');
const ioetLogo = require('../icons/ioetLogo4x6.png');

const jobs = [
  {
    key: 'ferchau',
    time: 'Feb.21 - Now',
    header: 'FERCHAU GmbH',
    frontSub: 'Seifen Germany',
    backSub: 'Fulltime',
    description:
      'My first fulltime job as software developer. A more detailed description will be coming soon.',
    ref: 'https://www.ferchau.com/',
    download: false,
    refText: 'Web',
  },
  {
    key: 'codesys',
    time: 'Mar.19 - Mar.20',
    header: 'CODESYS GmbH',
    frontSub: 'Kempten Germany',
    backSub: '8h/Week Intern',
    description:
      'Architectural refactoring of an internal tool and porting it from Python to C#, as well as setting up various Raspberry-Pi for testing purposes',
    image: codesysLogo,
    ref: 'https://www.codesys.com/',
    download: false,
    refText: 'Web',
  },
  {
    key: 'ioet',
    time: 'Sep.18 - Feb.19',
    header: 'ioet Inc.',
    frontSub: 'Quito Ecuador',
    backSub: 'Fulltime Intern',
    description:
      'Backend Development in Python 3, implemented an algorithm that solves a spacial allocation problem and deployed it to an AWS lambda function',
    image: ioetLogo,
    ref: 'https://www.ioet.com/',
    download: false,
    refText: 'Web',
  },
];

export default jobs;
