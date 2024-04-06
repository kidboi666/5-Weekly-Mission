import { getUserData } from "../api/Api";
// import { useState, useEffect } from "react";
import useData from "../hooks/useData";

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
    <a href="/signin.html" className="nav__signinBtn">
      로그인
    </a>
  );
}

export default Profile;
