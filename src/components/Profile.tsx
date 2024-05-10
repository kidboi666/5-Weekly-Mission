import { Link } from "react-router-dom";
import { getUserData } from "../api/Api";
import useData from "../hooks/useData";
import Btn from "./InputBtn";

function Profile() {
  const userData = useData(getUserData);

  return userData ? (
    <div className="nav__profile">
      <img
        className="nav__ProfileImg"
        src={userData?.data[0].image_source}
        alt="Profile Info"
      />
      <span className="nav__ProfileEmail">{userData?.data[0].email}</span>
    </div>
  ) : (
    <Link to={"/signin.html"}>
      <Btn> 로그인</Btn>
    </Link>
  );
}

export default Profile;
