import "../css/Profile.css";

function Profile() {
  return (
    <div className="profile">
      <img
        className="profile-img"
        src="images/Ellipse 21.png"
        alt="프로필 이미지"
      />
      <p className="profile-email">이메일 주소</p>
    </div>
  );
}

export default Profile;
