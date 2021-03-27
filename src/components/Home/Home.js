import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import propTypes from 'prop-types';
import backgroundImage from '../../images/IMG_2877.jpg';

const Home = ({ handleClick, toName: name }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.screen.width);
    };

    window.addEventListener('resize', handleResize);

    return (_) => window.removeEventListener('resize', handleResize);
  });

  const setBackgroundImage = () => {
    const el = document.getElementById('home-background');
    el.style.backgroundImage = `url(${backgroundImage})`;
    el.classList.add('show');
  };

  const background = () => {
    if (width <= 750) {
      return null;
    }
    return (
      <>
        <img
          alt='me'
          id='home-background-fake'
          src={backgroundImage}
          onLoad={() => {
            setBackgroundImage();
          }}
        />

        <div id='home-background'></div>
      </>
    );
  };

  return (
    <div id='home-container'>
      <div id='home-main'>
        <span className='inline-block-span scale-in-ver-top-first' id='hi'>
          Hi,
        </span>
        <div id='presentation'>
          <span className='inline-block-span scale-in-ver-top-second'>
            I&apos;m Daniel.
          </span>
          <br />
          <span className='inline-block-span scale-in-ver-top-third'>
            A CS student
            <br />
            from Germany.
          </span>
        </div>
        <span className='inline-block-span scale-in-center-one' id='skills'>
          My Skills: JavaScript, TypeScript, Angular, <br /> React, GraphQL,
          Neo4j, C++, C#, Unity
        </span>
        <br />
        <Link to='/contact' name='contact' onClick={() => handleClick(name)}>
          <button className='scale-in-center-two' id='touch-button'>
            Get in Touch
          </button>
        </Link>
      </div>
      {background()}
    </div>
  );
};

Home.propTypes = {
  handleClick: propTypes.func.isRequired,
  toName: propTypes.string.isRequired,
};

export default Home;
