import "./Profile.css";

export const Profile = ({ profile }) => {
  return (
    <div className="profile">
      <img
        src={profile.profileImageSource}
        className="profile-image"
        alt="프로필이미지"
      />
      <span className="profile-email">{profile.email}</span>
    </div>
  );
};
