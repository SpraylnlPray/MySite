import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const HomeButton = () => {
  return (
    <Link to='/'>
      <AiOutlineHome color={'#E8E8E8'} size={30} />
    </Link>
  );
}

export default HomeButton;