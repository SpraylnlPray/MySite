import React from 'react';
import { GoLocation } from 'react-icons/go';
import '../../css/mobile/About.css';

const About = () => {
  return (
    <div id='mobile-about-container'>
      <div>
        <div className='mobile-about-header'>
          Facts
        </div>
        <ul id='mobile-list'>
          <li>23 years old</li>
          <li>Passionate Learner</li>
          <li><GoLocation size={12} color={'#E8E8E8'}/> Bavaria, Germany</li>
          <li>Fluent in GE, EN, ES</li>
        </ul>
      </div>
      <div id='mobile-hobbies-container'>
        <div className='mobile-about-header'>
          Hobbies
        </div>
        <ul id='mobile-list' >
          <li>Hiking</li>
          <li>Playing Piano</li>
          <li>Mountainbiking</li>
          <li>Study Languages</li>
        </ul>
      </div>
    </div>
  );
}

export default About;