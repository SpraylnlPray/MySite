import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ProjectsButton = () => {
  return (
    <Link to='/projects' className='hidden-menu-item'>
      <AiOutlineEye color={'#E8E8E8'} size={30} />
    </Link>
  );
}

export default ProjectsButton;