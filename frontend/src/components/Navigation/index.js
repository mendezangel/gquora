import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation() {

  return (
    <div className='nav-bar-wrapper'>
      <div className='nav-bar-left'>
        <h3>GQuora</h3>
        <a href='/' className='fa-house-link'>
          <i className='fa-solid fa-house fa-xl' />
        </a>
      </div>
      <div className='nav-bar-right'>
        <ProfileButton />
        <Link to='/questions/new' className='add-question-link'>
          <p className='add-question-text'>Add question</p>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;