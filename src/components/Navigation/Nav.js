import logoImg from "../../assets/logo.svg";
import "./Nav.css";
import { useFetch } from "../hooks/useFetch";

function Nav() {
  const Userprofile = useFetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );

  return (
    <div className="Navigation">
      <div className="Container">
        <a href="/">
          <img className="NavigationLogo" src={logoImg} alt="Linkbrary 로고" />
        </a>
        {Userprofile ? (
          <div className="userProfile">
            <img
              src={Userprofile.profileImageSource}
              alt="유저 프로필사진"
              className="userProfileImg"
            />
            <span className="userProfileId">{Userprofile.email}</span>
          </div>
        ) : (
          <button className="signButton signButtonShort">로그인</button>
        )}
      </div>
    </div>
  );
}

export default Nav;
