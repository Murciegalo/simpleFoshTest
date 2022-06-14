import React from 'react';
import './header.styles.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='wrap'>
        <img
          className='logo'
          src={process.env.PUBLIC_URL + 'logo.png'}
          alt='Company logo'
        />
      </div>
    </div>
  );
};
export default Header;
