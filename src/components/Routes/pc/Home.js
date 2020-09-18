import React from 'react';
import '../../../css/pc/Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div id='pc-home-container'>
      <div id='pc-home-hi'>Hi,</div>
      <div id='pc-home-presentation'>
        I&apos;m Daniel. <br/>
        A CS student from Germany.
      </div>
      <div id='pc-skills'>JavaScript, React, C++, C#, Apollo, GraphQL, Neo4j</div>
      <Link to='/contact'>
        <button id='pc-touch-button'>Get in Touch</button>
      </Link>
    </div>
  );
}

export default Home;