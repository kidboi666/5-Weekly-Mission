import "../css/Navigation.css";
import Profile from "./Profile";

function Nav() {
  return (
    <div className="nav">
      <div className="wrap">
        <img src="/images/logo.png" alt="logo" />
        {/* <div className="login-button">
          <p className="login-button-text">로그인</p>
        </div> */}
        <Profile />
      </div>
    </div>
  );
}

export default Nav;
