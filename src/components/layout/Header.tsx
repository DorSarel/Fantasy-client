import React from 'react';
import { Link } from 'react-router-dom';
import { GlobalPaths } from '../common/GlobalPath';

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
            <Link to="/">My Team</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/">Matchup</Link>
          </li>
          <li className="header-nav-item">
            <Link to={GlobalPaths.playersUrl}>Players</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
