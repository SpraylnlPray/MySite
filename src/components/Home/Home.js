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
        <div id='hi'>Hi,</div>
        <div id='presentation'>
          I&apos;m Daniel.
          <br />
          A CS student
          <br />
          from Germany.
        </div>
        <div id='skills'>
          JavaScript, TypeScript, Angular, React, GraphQL, <br /> Neo4j, C++,
          C#, Unity
        </div>
        <Link to='/contact' name='contact' onClick={() => handleClick(name)}>
          <button id='touch-button'>Get in Touch</button>
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
