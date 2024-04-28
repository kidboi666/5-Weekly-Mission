import "./Header.css";

export function Header({ user }) {
  return (
    <header className="header">
      <div className="header-contents">
        <a href="/">
          <img src="images/logo.svg" alt="linklabrary로고" />
        </a>
        <div className="user-container">
          <div className="icon">
            <img src="images/Ellipse21.svg" alt="myicon"></img>
            <img
              className="profile"
              src="images/myprofile.png"
              alt="myprofile"
            ></img>
          </div>
          <p>{user.email ?? "로그인"}</p>
        </div>
      </div>
    </header>
  );
}
