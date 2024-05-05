import "./Header.css";

export function Header({ userEmail }) {
  return (
    <header className="header">
      <div className="header-contents">
        <a href="/">
          <img src="images/logo.svg" alt="linklabrary로고" />
        </a>
        <div className="user-container">
          <div className="icon">
            <img src="images/Ellipse21.svg" alt="myicon" />
            <img
              className="profile"
              src="images/myprofile.png"
              alt="myprofile"
            />
          </div>
          <p>{userEmail ?? "로그인"}</p>
        </div>
      </div>
    </header>
  );
}
