import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import propTypes from 'prop-types';

// alert('hello');

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
      <div id='skills'>JavaScript, React, C++, C#, Apollo, GraphQL, Neo4j</div>
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
