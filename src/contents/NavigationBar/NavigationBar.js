import "./NavigationBar.css";
import logoImg from "../../images/linkbrary.svg";
import { useFetch } from "../../hooks/useFetch";

function NavigationBar() {
  const Profile = useFetch("https://bootcamp-api.codeit.kr/api/sample/user");
  return (
    <div className="navigation">
      <div className="frame">
        <a href="/">
          <img className="logo" src={logoImg} alt="Linkbrary로고" />
        </a>
        {Profile ? (
          <div className="profile">
            <img
              src={Profile.profileImageSource}
              alt="사용자 프로필"
              className="profileImg"
            />
            <span className="userEmail">{Profile.email}</span>
          </div>
        ) : (
          <span className="loginButton">로그인</span>
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
