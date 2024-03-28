import "../css/Navigation.css";

function Nav() {
  return (
    <div className="nav">
      <div className="wrap">
        <img src="/images/logo.png" alt="logo" />
        <div className="login-button">
          <p className="login-button-text">로그인</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
