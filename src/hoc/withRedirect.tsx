import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { GlobalPaths } from '../components/common/GlobalPath';
import Loader from '../components/common/Loader';
import { useFetchLeagueInfo } from '../hooks/useFetchLeagueInfo';
import { ILeagueInfo, LeagueStatus } from '../models/League/LeagueModels';
import { RootState } from '../redux';

const withRedirect = (WrappedComponent: React.FC) => {
  return (props) => {
    const user = useSelector((store: RootState) => store.user.user);
    const { data: leagueInfo, isLoading: isFetchingLeagueInfo }: { data: ILeagueInfo; isLoading: boolean } = useFetchLeagueInfo(user.leagueId);

    if (isFetchingLeagueInfo) return <Loader />;

    if (leagueInfo && (leagueInfo.leagueStatus === LeagueStatus.Init || leagueInfo.leagueStatus === LeagueStatus.Draft))
      return <Redirect to={`${GlobalPaths.draft}/${leagueInfo.leagueId}`} />;

    return <WrappedComponent {...props} />;
  };
};

export default withRedirect;
