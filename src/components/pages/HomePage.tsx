import React from 'react';
import trophy from '../../assets/images/trophy 1.png';
import twitter from '../../assets/images/twitter-icon.png';
import instagram from '../../assets/images/instagram-icon.png';
import youtube from '../../assets/images/youtube-icon.png';
import GlobalList from '../common/ListView';
import MediaBox from '../common/MediaBox';
import { GlobalPaths } from '../common/GlobalPath';
import GuardLink from '../common/GuardLink';

const HomePage = () => {
  return (
    <>
      <div className="middle-column">
        <div className="welcome-main">
          <img src={trophy} alt="trophy" />
          <h1>Welcome </h1>
          <p>to NBA Fantasy Pro</p>
        </div>
        <br />
        <div className="create-join-btn">
          <GuardLink to={GlobalPaths.createLeagueUrl}>Create a League</GuardLink>
          <GuardLink to="">Join a League</GuardLink>
        </div>
      </div>
      <div className="left-boxes left-column">
        <h2>NBA Recent News: </h2>
        <MediaBox />
        <MediaBox />
        <MediaBox />
      </div>
      <div className="right-boxes right-column">
        <GlobalList header="Tonight Games: " />
        <GlobalList header="Last Games: " />
        <GlobalList header="Top Added Players: " />
      </div>
    </>
  );
};
export default HomePage;
