import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link className="header-title" to="/">
        Trueface
      </Link>

      <nav className="header-nav">
        <ul>
          <li className="header-nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
