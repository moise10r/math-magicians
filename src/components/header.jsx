import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { id: 1, name: 'Home', to: '/' },
  { id: 2, name: 'Calculator', to: '/calculator' },
  { id: 3, name: 'Quote', to: '/quote' },
];

const Header = () => (
  <header className="header-main-container">
    <div className="main-header-wrapper flex-between">
      <div className="logo-wrapper">
        <Link to="/">
          Math
          <span>Magicians</span>
        </Link>
      </div>
      <ul className="link-list">
        {
          links.map(({ id, name, to }) => (<li key={id} className="link"><Link to={to}>{name}</Link></li>))
        }
      </ul>
    </div>
  </header>
);

export default Header;
