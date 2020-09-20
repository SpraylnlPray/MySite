const codesysLogo = require('../../icons/CODESYS-logo-standard.png');
const ioetLogo = require('../../icons/ioetLogo4x6.png');

const jobs = [
  {
    key: 'codesys',
    start: 'Mar. 19',
    end: 'Mar. 20',
    companyName: 'CODESYS GmbH',
    location: 'Kempten Germany',
    position: 'Intern',
    workload: '8h/Week',
    description: 'Architectural refactoring of an internal tool and porting it from Python to C#, as well as setting up various Raspberry-Pi for testing purposes',
    image: codesysLogo,
  },
  {
    key: 'ioet',
    start: 'Sep. 18',
    end: 'Feb. 19',
    companyName: 'ioet Inc.',
    location: 'Quito Ecuador',
    position: 'Intern',
    workload: 'Fulltime',
    description: 'Backend Development in Python 3, implemented an algorithm that solves a spacial allocation problem and deployed it to an AWS lambda function',
    image: ioetLogo,
  },
]

export default jobs;