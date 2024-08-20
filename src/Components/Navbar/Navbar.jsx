import React from 'react';
import './Navbar.css';
import assets from '../../assets/assets'
import { Link, useParams } from 'react-router-dom';

const Navbar = ({setSidebar,videoPlaying}) => {
  return (
    <nav className='flex-div'>
      <Link to={'/'}>
      <div className='nav-left flex-div'>
        <img onClick={() => setSidebar(prev => prev===false?true:false)} className='menu-icon' src={assets.menu} alt="" />
        <img className='logo' src={assets.logo} alt="" />
      </div>
      </Link>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
        <input type="text" placeholder='Search' />
        <img src={assets.search} alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={assets.upload} alt="" />
        <img src={assets.more} alt="" />
        <img src={assets.notification} alt="" />
        <img src={assets.pratyush} className='user-icon' alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
