import React from 'react';
import '../css/mobile/Hamburger.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai'
import PropTypes from 'prop-types';

const Hamburger = ( { menuExpanded, handleClick } ) => {
  if ( menuExpanded ) {
    return ( <AiOutlineClose color={'#E8E8E8'} size={30} onClick={handleClick} /> );
  }
  return <GiHamburgerMenu color={'#E8E8E8'} size={30} onClick={handleClick} />

}

Hamburger.propTypes = {
  menuExpanded: PropTypes.bool,
  handleClick: PropTypes.func,
}

export default Hamburger;