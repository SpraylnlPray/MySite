import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/mobile/Home.css';

const Home = () => {
  return (
    <div id='mobile-home-container'>
      <div id='hi'>Hi,</div>
      <div id='mobile-presentation'>
        I&apos;m Daniel.<br />
        A CS student<br />
        from Germany.
      </div>
      <div id='mobile-skills'>
        JavaScript, React, C++, C#, Apollo, GraphQL, Neo4j
      </div>
      <Link to='/contact'>
        <button id='mobile-touch-button'>Get in Touch</button>
      </Link>
    </div>
  );
}

export default Home;