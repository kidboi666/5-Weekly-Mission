import '../styles/Nav.css';
import logo from '../assets/logo.svg';
import logo_profile from '../assets/profile.svg';

function Nav() {
  return (
    <nav>
      <div className="gnb">
        <a>
          <img className="logo" src={logo} />
        </a>
        <div className="user-info">
          <img src={logo_profile} />
          <span>user</span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
