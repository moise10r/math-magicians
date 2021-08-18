import { Link } from 'react-router-dom';

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
        <li className="link"><Link to="/">Home</Link></li>
        <li className="link"><Link to="/calculator">Calculator</Link></li>
        <li className="link"><Link to="/quote">Quote</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;
