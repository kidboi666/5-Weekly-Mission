import linkbrary from "../assets/logo.svg";
import "./Header.css";

const Header = ({ user }) => {
  let { email, profileImageSource } = user;
  return (
    <div className="Header">
      <div className="logo">
        <img src={linkbrary} alt="Linkbrary" />
      </div>
      {email ? (
        <div className="profile">
          <img src={profileImageSource} alt="profileImageSource" />
          <p>{email}</p>
        </div>
      ) : (
        <div className="button">로그인</div>
      )}
    </div>
  );
};
export default Header;
