import React from 'react';
import './Hamburger.css';
import PropTypes from 'prop-types';

const Hamburger = ( { handleClick } ) => {
  return (
    <div id='hamburger' onClick={handleClick}>
      <div id='bar1'></div>
      <div id='bar2'></div>
      <div id='bar3'></div>
    </div>
  );
}

Hamburger.propTypes = {
  handleClick: PropTypes.func,
}

export default Hamburger;