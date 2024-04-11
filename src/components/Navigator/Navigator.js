import logoImg from "../assets/svg/Linkbrary.svg";
import profileImg from "../assets/images/profile.png";
import "./Navigator.css";

function Profile({ user }) {
  if (user.email) {
    return (
      <div className="navbar-profile">
        <img
          className="navbar-profile-img"
          alt="profile-img"
          src={profileImg}
        ></img>
        <div className="navbar-user">{user.email}</div>
      </div>
    );
  } else {
    return (
      <a className="navbar-login" href="signin.html">
        로그인
      </a>
    );
  }
}

function Navbar({ user }) {
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <a href="/">
            <img src={logoImg} alt="Linkbrary"></img>
          </a>
        </div>
        <Profile user={user} />
      </div>
    </>
  );
}

export default Navbar;
