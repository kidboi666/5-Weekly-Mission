import Icon from "../assets/icon.ico";
import { Link } from "react-router-dom";
import Profile from "./profile";
import { useFetch } from "../usefetch";
import './header.css';
function Header() {
  const profileData
   = useFetch("https://bootcamp-api.codeit.kr/api/sample/user");

  
  return (
    <div className="header">
      <div className="header__container">
        <Link to="/">
          <img src={Icon} alt="Linkbrary 로고" className="header__container--logo"/>
        </Link>
        {profileData ? (
          <Profile email={profileData.email} img={profileData.profileImageSource}/> 
        ) : <div>로그인</div>}
      </div>
    </div>
  );
}

export default Header;
