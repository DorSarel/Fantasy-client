import React, { useEffect, useState } from 'react';
import trophy from '../../assets/images/trophy 1.png';
import youtube from '../../sagas/apis/youtubeApi';
import GlobalList from '../common/ListView';
import { GlobalPaths } from '../common/GlobalPath';
import GuardLink from '../common/GuardLink';
import VideoDetails from '../common/VideoDetails';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { GetAuthLevel } from '../../utils/helpers';
import { AUTH_LEVEL } from '../../models/User/UserModels';
import { Redirect } from 'react-router-dom';
import { useFetchTopPlayers } from '../../hooks/useFetchTopPlayers';
import Loader from '../common/Loader';

const WelcomePage = () => {
  const [firstVideo, setFirstVideo] = useState();
  const [secondVideo, setSecondVideo] = useState();
  const user = useSelector((store: RootState) => store.user.user);
  const authLevel = GetAuthLevel(user);
  const {data: players, isLoading} = useFetchTopPlayers();

  useEffect(() => {
    (async () => {
      const [firstVideo, secondVideo] = await onTermSubmit('NBA');
      setFirstVideo(firstVideo);
      setSecondVideo(secondVideo);
    })();

    return () => setFirstVideo(null);
  }, []);

  const onTermSubmit = async (term: string) => {
    try {
      const response = await youtube.get('/search', {
        params: {
          q: term,
        },
      });
      const videos = response.data.items;
      const firstVideo = videos[Math.floor(Math.random() * videos.length)];
      const secondVideo = videos[Math.floor(Math.random() * videos.length)];
      return [firstVideo, secondVideo];
    } catch (error: any) {
      console.log(error.message);
    }
  };

  if (authLevel === AUTH_LEVEL.AUTH_FULL) return <Redirect to={GlobalPaths.myTeamUrl} />;

  if (isLoading) return <Loader />

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
        <VideoDetails video={firstVideo} />
        <VideoDetails video={secondVideo} />
      </div>
      <div className="right-boxes right-column">
        <GlobalList header="Top Scorers:" players={players.topScorers} keyToShow="pts" />
        <GlobalList header="Top Assists:" players={players.topAssists} keyToShow="ast" />
        <GlobalList header="Top Rebounders:" players={players.topRebounds} keyToShow="reb" />
      </div>
    </>
  );
};
export default WelcomePage;
