import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const AboutButton = () => {
  return (
    <Link to='/about' className='hidden-menu-item'>
      <BsPerson color={'#E8E8E8'} size={30} />
    </Link>

  );
}

export default AboutButton;