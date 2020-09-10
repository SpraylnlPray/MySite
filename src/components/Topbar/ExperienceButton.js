import React from 'react';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const ExperienceButton = () => {
  return (
    <Link to='/experience' className='hidden-menu-item'>
      <HiOutlineLightBulb color={'#E8E8E8'} size={30} />
    </Link>
  );
}

export default ExperienceButton;