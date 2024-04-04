import "./Profile.css";

function Profile({ email, imgUrl }) {
  return (
    <div className="profile">
      <img src={imgUrl} alt="프로필 이미지" />
      <p>{email}</p>
    </div>
  );
}

export default Profile;
