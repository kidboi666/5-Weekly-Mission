import profileImg from "../assets/profile img.svg";
import { getUserData } from "../api/Api";
import useData from "../hooks/useData";

function Profile() {
  const userData = useData(getUserData);
  return userData ? (
    <div className="nav__profile">
      <img className="nav__ProfileImg" src={profileImg} alt="Profile Info" />
      <span className="nav__ProfileEmail">{userData.email}</span>
    </div>
  ) : (
    <a href="/signin.html" className="nav__signinBtn">
      로그인
    </a>
  );
}

export default Profile;
