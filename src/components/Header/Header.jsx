import { useFetchUser } from "../../hooks/useFetchUser";
import Logo from "../../assets/logo.svg";
import "../Header/Header.css";

function Header() {
  const userData = useFetchUser();

  return (
    <div className="header-container">
      <div className="header-nav">
        <img className="header-logo" src={Logo} alt="Linkbrary-logo" />
        {userData && (
          <div className="header-user-profile">
            <img
              className="header-user-logo"
              src={userData.profileImageSource}
              alt="profile-img"
            />
            <span>{userData.email}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
