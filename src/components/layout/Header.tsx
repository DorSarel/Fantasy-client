import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux';
import { GlobalPaths } from '../common/GlobalPath';
import GuardLink from '../common/GuardLink';

const Header = () => {
  const user = useSelector((store: RootState) => store.user.user);
  const isLoggedIn = user.tokenId !== '';

  return (
    <header className="header full-site-column">
      <Link className="header-title" to="/">
        Fantasy
      </Link>

      <nav className="header-nav">
        <ul>
          {!isLoggedIn ? (
            <li className="header-nav-item">
              <GuardLink to={GlobalPaths.myTeamUrl}>Login</GuardLink>
            </li>
          ) : (
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
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
