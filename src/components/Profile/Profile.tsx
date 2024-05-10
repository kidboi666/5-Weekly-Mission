import React from "react";
import "./Profile.css";

interface loginFetchData {
  id: number;
  email: string;
  name: string;
  profileImageSource: string;
}

function Profile({ user }: { user: loginFetchData }) {
  const { name, email, profileImageSource } = user;
  return (
    <div className="header-profile">
      <div className="header-img">
        <img src={profileImageSource} alt={name} />
      </div>
      <div className="header-email">{email}</div>
    </div>
  );
}

export default Profile;
