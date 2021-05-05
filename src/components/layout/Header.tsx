import React from 'react';
import { Link } from 'react-router-dom';
import { GlobalPaths } from '../common/GlobalPath';
import GuardLink from '../common/GuardLink';

const Header = () => {
  return (
    <header className="header full-site-column">
      <Link className="header-title" to="/">
        Fantasy
      </Link>

      <nav className="header-nav">
        <ul>
          <li className="header-nav-item">
            <Link to={GlobalPaths.homeUrl}>Home</Link>
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
