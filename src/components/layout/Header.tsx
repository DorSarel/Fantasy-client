import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFetchLeagueInfo } from '../../hooks/useFetchLeagueInfo';
import useGoogleAuth from '../../hooks/useGoogleAuth';
import { ILeagueInfo, LeagueStatus } from '../../models/League/LeagueModels';
import { AUTH_LEVEL } from '../../models/User/UserModels';
import { RootState } from '../../redux';
import { GetAuthLevel } from '../../utils/helpers';
import { GlobalPaths } from '../common/GlobalPath';
import GuardLink from '../common/GuardLink';

const Header = () => {
  const user = useSelector((store: RootState) => store.user.user);
  const { signOut } = useGoogleAuth('');
  const { data: leagueInfo }: { data: ILeagueInfo; isLoading: boolean } = useFetchLeagueInfo(user.leagueId);
  const authLevel = GetAuthLevel(user);

  return (
    <header className="header full-site-column">
      <Link className="header-title" to="/">
        Fantasy
      </Link>

      <nav className="header-nav">
        <ul>
          {authLevel === AUTH_LEVEL.AUTH_NONE ? (
            <li className="header-nav-item">
              <GuardLink to={GlobalPaths.welcomeUrl}>Login</GuardLink>
            </li>
          ) : authLevel === AUTH_LEVEL.AUTH_FULL && leagueInfo?.leagueStatus === LeagueStatus.Ready ? (
            <>
              <li className="header-nav-item">
                <Link to={GlobalPaths.welcomeUrl}>Home</Link>
              </li>
              <li className="header-nav-item">
                <GuardLink to={GlobalPaths.myTeamUrl}>My Team</GuardLink>
              </li>
              <li className="header-nav-item">
                <GuardLink to="/">Matchup</GuardLink>
              </li>
              <li className="header-nav-item">
                <GuardLink to={GlobalPaths.playersUrl}>Players</GuardLink>
              </li>
              <li className="header-nav-item">
                <a href="#" onClick={signOut}>
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="header-nav-item">
                <GuardLink to={GlobalPaths.createLeagueUrl}>Create new league</GuardLink>
              </li>
              {leagueInfo && leagueInfo.leagueId && (
                <li className="header-nav-item">
                  <GuardLink to={`${GlobalPaths.draft}/${leagueInfo.leagueId}`}>Draft</GuardLink>
                </li>
              )}
              <li className="header-nav-item">
                <a href="#" onClick={signOut}>
                  Logout
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
