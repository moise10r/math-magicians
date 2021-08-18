const Header = () => (
  <header className="header-main-container">
    <div className="main-header-wrapper flex-between">
      <div className="logo-wrapper">
        <a href="#2">
          Math
          <span>Magicians</span>
        </a>
      </div>
      <ul className="link-list">
        <li className="link"><a href="#2">Home</a></li>
        <li className="link"><a href="#2">Calculator</a></li>
        <li className="link"><a href="#2">Quote</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
