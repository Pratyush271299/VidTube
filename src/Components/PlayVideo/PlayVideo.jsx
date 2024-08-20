import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import assets from '../../assets/assets';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const PlayVideo = () => {

    const {videoId} = useParams();

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData,setCommentData] = useState([]);
    const [activeLike, setActiveLike] = useState(false);
    const [activeDislike, setActiveDislike] = useState(false);

    const handleLike = () => {
      setActiveLike(!activeLike);
      setActiveDislike(false);
    }

    const handleDislike = () => {
      setActiveDislike(!activeDislike);
      setActiveLike(false);
    }

    const fetchVideoData = async () => {
        //Fetching Videos Data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetails_url).then(res => res.json()).then(data =>setApiData(data.items[0]));
    }

    const fetchOtherData = async () => {
        //Fetching Channel Data
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelData_url).then(res => res.json()).then(data => setChannelData(data.items[0]));

        //Fetching Comment Data
        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
        await fetch(comment_url).then(res => res.json()).then(data => setCommentData(data.items));
    }

    useEffect(() => {
        fetchVideoData();
        window.scrollTo(0,0);
    },[videoId])
    useEffect(() => {
       if (apiData) fetchOtherData();
    },[apiData]);

  return (
    <div className='play-video'>
      {/* <video src={assets.video1} controls autoPlay ></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
      <div className="play-video-info">
        <p>{apiData?value_converter(apiData.statistics.viewCount):'NO VIEWS'} Views &bull; {moment(apiData?apiData.snippet.publishedAt:"").fromNow()}</p>
        <div>
            <span><img onClick={() => handleLike()} src={activeLike?assets.activeLike:assets.like} alt="" />{apiData?value_converter(apiData.statistics.likeCount):""}</span>
            <span><img onClick={() => handleDislike()} src={activeDislike?assets.activeDislike:assets.dislike} alt="" /></span>
            <span><img src={assets.share} alt="" />Share</span>
            <span><img src={assets.save} alt="" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData?.snippet?.thumbnails.default.url} alt="" />
        <div>
            <p>{apiData?apiData.snippet.channelTitle:"Pratyush"}</p>
            <span>{channelData?value_converter(channelData.statistics.subscriberCount):""} Subscribers</span>
        </div>
        <button onClick={() => handleLike()} >Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData?apiData.snippet.description.slice(0, 250):"Description Here"}</p>
        <hr />
        <h4>{value_converter(apiData?apiData.statistics.commentCount:"100")} Comments</h4>
        {commentData.map((item,index) => {
            return(
                <div className="comment" key={index}>
                    <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt={assets.automobiles} />
                    <div>
                        <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                        <p>{item.snippet.topLevelComment.snippet.textOrigianl}</p>
                        <div className='comment-action'>
                            <img src={assets.like} alt="" />
                            <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                            <img src={assets.dislike} alt="" />
                        </div>
                    </div>
                 </div>
            )
        })}
      </div>
    </div>
  );
}

export default PlayVideo;
