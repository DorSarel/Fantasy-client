import React, { useEffect, useState } from 'react';
import trophy from "../../assets/images/trophy 1.png"
import twitter from "../../assets/images/twitter-icon.png"
import instagram from "../../assets/images/instagram-icon.png"
import youtube from "../../assets/images/youtube-icon.png"
import GlobalList from "../common/GlobalList";
import MediaBox from "../common/MediaBox";



const HomePage = () => {



    return (
        <>
            <div className="middle-column">
                <div className="welcome-main">
                    <img src={trophy} />
                    <h1>Welcome </h1>
                    <p>to NBA Fantasy Pro</p>
                </div>
                <br />
                <div className="create-join-btn">
                    <button>Creat a League</button>
                    <button>Join a League</button>
                </div>
            </div>
            <div className="left-boxes left-column">
            <h2>NBA Recent News: </h2>
               <MediaBox  />
               <MediaBox/>
               <MediaBox/>
            </div>
            <div className="right-boxes right-column">
            <GlobalList/>
            <GlobalList/>
            <GlobalList/>
            </div>
      
        </>
    );
};

export default HomePage;