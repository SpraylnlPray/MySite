import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div id='home-container'>
      <div id='hi'>Hi,</div>
      <div id='presentation'>
        I&apos;m Daniel.<br />
          A CS student<br />
          from Germany.
        </div>
        <div id='skills'>
          JavaScript, React, C++, C#, Apollo, GraphQL, Neo4j
        </div>
        <Link to='/contact'>
          <button id='touch-button'>Get in Touch</button>
        </Link>
    </div>
  );
}

export default Home;