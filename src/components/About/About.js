import React from 'react';
import { GoLocation } from 'react-icons/go';
import './About.css';

const About = () => {
  return (
    <div id='about-container'>
      <div>
        <div className='about-header'>
          Facts
        </div>
        <ul className='list'>
          <li>23 years old</li>
          <li>Passionate Learner</li>
          <li><GoLocation size={12} color={'#E8E8E8'}/> Bavaria, Germany</li>
          <li>Fluent in GE, EN, ES</li>
        </ul>
      </div>
      <div id='hobbies-container'>
        <div className='about-header'>
          Hobbies
        </div>
        <ul className='list'>
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