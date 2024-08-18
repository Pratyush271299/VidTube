import React from 'react';
import './Sidebar.css';
import assets from '../../assets/assets';

const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="side-link">
            <img src={assets.home} alt="" />
            <p>Home</p>
        </div>
        <div className="side-link">
            <img src={assets.game_icon} alt="" />
            <p>Gaming</p>
        </div>
        <div className="side-link">
            <img src={assets.automobiles} alt="" />
            <p>Automobiles</p>
        </div>
        <div className="side-link">
            <img src={assets.sports} alt="" />
            <p>Sports</p>
        </div>
        <div className="side-link">
            <img src={assets.entertainment} alt="" />
            <p>Entertainment</p>
        </div>
        <div className="side-link">
            <img src={assets.tech} alt="" />
            <p>Technology</p>
        </div>
        <div className="side-link">
            <img src={assets.music} alt="" />
            <p>Music</p>
        </div>
        <div className="side-link">
            <img src={assets.blogs} alt="" />
            <p>Blogs</p>
        </div>
        <div className="side-link">
            <img src={assets.news} alt="" />
            <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
            <img src={assets.pewdiepie} alt="" />
            <p>Pewdiepie</p>
        </div>
        <div className="side-link">
            <img src={assets.mrbeast} alt="" />
            <p>MrBeast</p>
        </div>
        <div className="side-link">
            <img src={assets.justin_bieber} alt="" />
            <p>Justin Bieber</p>
        </div>
        <div className="side-link">
            <img src={assets.five_minute_crafts} alt="" />
            <p>5-Minute Crafts</p>
        </div>
        <div className="side-link">
            <img src={assets.nas_daily} alt="" />
            <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
