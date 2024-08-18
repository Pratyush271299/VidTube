import React from 'react';
import './Navbar.css';
import assets from '../../assets/assets'

const Navbar = () => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='menu-icon' src={assets.menu_icon} alt="" />
        <img className='logo' src={assets.logo} alt="" />
      </div>
      <div className="nav-middle flex-div">
        <input type="text" placeholder='Search' />
        <img src={assets.search} alt="" />
      </div>
      <div className="nav-right flex-div">
        <img src={assets.upload} alt="" />
        <img src={assets.more} alt="" />
        <img src={assets.notification} alt="" />
        <img src={assets.jack} className='user-icon' alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
