import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header full-site-column">
      <Link className="header-title" to="/">
        Fantasy
      </Link>

      <nav className="header-nav">
        <ul>
          <li className="header-nav-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/">My Team</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/">Matchup</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/players">Players</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
