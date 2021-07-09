import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux';
import { IsGoogleLoggedIn, IsUserLoggedIn } from '../../utils/helpers';
import { GlobalPaths } from '../common/GlobalPath';
import GuardLink from '../common/GuardLink';

const Header = () => {
  const user = useSelector((store: RootState) => store.user.user);
  const isFirstLoggedIn = IsGoogleLoggedIn(user);
  const isLoggedIn = IsUserLoggedIn(user);

  return (
    <header className="header full-site-column">
      <Link className="header-title" to="/">
        Fantasy
      </Link>

      <nav className="header-nav">
        <ul>
          {!isFirstLoggedIn ? (
            <li className="header-nav-item">
              <GuardLink to={GlobalPaths.myTeamUrl}>Login</GuardLink>
            </li>
          ) : isLoggedIn ? (
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
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
