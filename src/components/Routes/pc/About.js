import React from 'react';
import { GoLocation } from 'react-icons/go';
import '../../../css/pc/About.css';

const About = () => {
  return (
    <div id='pc-about-container'>
      <div>
        <div className='pc-about-header'>
          Facts
        </div>
        <ul className='pc-list'>
          <li>23 years old</li>
          <li>Passionate Learner</li>
          <li><GoLocation size={16} color={'#E8E8E8'} /> Bavaria, Germany</li>
          <li>Fluent in GE, EN, ES</li>
        </ul>
      </div>
      <div id='pc-hobbies-container'>
        <div className='pc-about-header'>
          Hobbies
        </div>
        <ul className='pc-list'>
          <li>Hiking</li>
          <li>Playing Piano</li>
          <li>Mountainbiking</li>
          <li>Study Languages</li>
        </ul>
      </div>
    </div>
  )
}

export default About;