import React from 'react';
import logo from './easy-convert-logo.png';

const Header = ({ title }) => {
  return (
    <header className='Header'>
      <img src={logo} alt="easy convert logo" ></img>
    </header>
  )
}

export default Header