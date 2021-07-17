import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useGoogleAuth from '../../hooks/useGoogleAuth';
import { AUTH_LEVEL } from '../../models/User/UserModels';
import { RootState } from '../../redux';
import { GetAuthLevel } from '../../utils/helpers';
import { GlobalPaths } from '../common/GlobalPath';
import GuardLink from '../common/GuardLink';

const Header = () => {
  const user = useSelector((store: RootState) => store.user.user);
  const { signOut } = useGoogleAuth('');
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
              <GuardLink to={GlobalPaths.myTeamUrl}>Login</GuardLink>
            </li>
          ) : authLevel === AUTH_LEVEL.AUTH_FULL ? (
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
            </>
          ) : (
            <>
              <li className="header-nav-item">
                <GuardLink to={GlobalPaths.createLeagueUrl}>Create new league</GuardLink>
              </li>
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
