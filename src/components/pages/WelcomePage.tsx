import React, { useEffect, useState } from 'react';
import trophy from '../../assets/images/trophy 1.png';
// import twitter from '../../assets/images/twitter-icon.png';
// import instagram from '../../assets/images/instagram-icon.png';
import youtube from '../../sagas/apis/youtubeApi';
import GlobalList from '../common/ListView';
import MediaBox from '../common/MediaBox';
import { GlobalPaths } from '../common/GlobalPath';
import GuardLink from '../common/GuardLink';
import VideoDetails from '../common/VideoDetails';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { GetAuthLevel } from '../../utils/helpers';
import { AUTH_LEVEL } from '../../models/User/UserModels';
import { Redirect } from 'react-router-dom';
import { ILeagueInfo, LeagueStatus } from '../../models/League/LeagueModels';
import { useFetchLeagueInfo } from '../../hooks/useFetchLeagueInfo';

const WelcomePage = () => {
  const [video, setVideo] = useState();
  const user = useSelector((store: RootState) => store.user.user);
  const authLevel = GetAuthLevel(user);
  const { data: leagueInfo, isLoading: isFetchingLeagueInfo }: { data: ILeagueInfo; isLoading: boolean } = useFetchLeagueInfo(user.leagueId);

  console.log('leagueInfo', leagueInfo);

  useEffect(() => {
    (async () => {
      const video = await onTermSubmit('NBA');
      setVideo(video);
    })();

    return () => setVideo(null);
  }, []);

  const onTermSubmit = async (term: string) => {
    try {
      const response = await youtube.get('/search', {
        params: {
          q: term,
        },
      });
      const videos = response.data.items;
      const searchedVideo = videos[Math.floor(Math.random() * videos.length)];
      return searchedVideo;
    } catch (error) {
      console.log(error.message);
    }
  };

  if (leagueInfo && leagueInfo.leagueStatus === LeagueStatus.Draft) return <Redirect to={`${GlobalPaths.draft}/${leagueInfo.leagueId}`} />;
  // if (authLevel === AUTH_LEVEL.AUTH_FULL) return <Redirect to={GlobalPaths.myTeamUrl} />;

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
        <VideoDetails video={video} />
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
export default WelcomePage;
