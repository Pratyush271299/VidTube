import React from 'react';
import './PlayVideo.css';
import assets from '../../assets/assets';

const PlayVideo = ({videoId}) => {
  return (
    <div className='play-video'>
      {/* <video src={assets.video1} controls autoPlay ></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>Best Youtube Channel To Learn Web Development</h3>
      <div className="play-video-info">
        <p>152523 Views &bull; 2 days ago</p>
        <div>
            <span><img src={assets.like} alt="" />125</span>
            <span><img src={assets.dislike} alt="" />2</span>
            <span><img src={assets.share} alt="" />Share</span>
            <span><img src={assets.save} alt="" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={assets.jack} alt="" />
        <div>
            <p>Greatstack</p>
            <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning EASY!</p>
        <p>Subscribe Greatstack to watch more Tutorials on web development</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
            <img src={assets.user_profile} alt="" />
            <div>
                <h3>Jack Nicholson <span>1 day ago</span></h3>
                <p>A global computer network providing a variety of information and communication facts of interconnected networks using standardized communication protocols.</p>
                <div className='comment-action'>
                    <img src={assets.like} alt="" />
                    <span>244</span>
                    <img src={assets.dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={assets.user_profile} alt="" />
            <div>
                <h3>Jack Nicholson <span>1 day ago</span></h3>
                <p>A global computer network providing a variety of information and communication facts of interconnected networks using standardized communication protocols.</p>
                <div className='comment-action'>
                    <img src={assets.like} alt="" />
                    <span>244</span>
                    <img src={assets.dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={assets.user_profile} alt="" />
            <div>
                <h3>Jack Nicholson <span>1 day ago</span></h3>
                <p>A global computer network providing a variety of information and communication facts of interconnected networks using standardized communication protocols.</p>
                <div className='comment-action'>
                    <img src={assets.like} alt="" />
                    <span>244</span>
                    <img src={assets.dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={assets.user_profile} alt="" />
            <div>
                <h3>Jack Nicholson <span>1 day ago</span></h3>
                <p>A global computer network providing a variety of information and communication facts of interconnected networks using standardized communication protocols.</p>
                <div className='comment-action'>
                    <img src={assets.like} alt="" />
                    <span>244</span>
                    <img src={assets.dislike} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PlayVideo;
