import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import propTypes from 'prop-types';

const Home = ({ handleClick, toName: name }) => {
  return (
    <div id='home-container'>
      <div id='hi'>Hi,</div>
      <div id='presentation'>
        I&apos;m Daniel.
        <br />
        A CS student
        <br />
        from Germany.
      </div>
      <div id='skills'>
        JavaScript, TypeScript, Angular, React, GraphQL, <br /> Neo4j, C++, C#,
        Unity
      </div>
      <Link to='/contact' name='contact' onClick={() => handleClick(name)}>
        <button id='touch-button'>Get in Touch</button>
      </Link>
    </div>
  );
};

Home.propTypes = {
  handleClick: propTypes.func.isRequired,
  toName: propTypes.string.isRequired,
};

export default Home;
