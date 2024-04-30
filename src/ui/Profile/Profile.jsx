import "./Profile.css";

export const Profile = ({ profile }) => {
  const { email, profileImageSource } = profile;
  return (
    <div className="Profile">
      <img
        className="Profile-image"
        alt="사용자 프로필 이미지"
        src={profileImageSource}
      />
      <span className="Profile-email">{email}</span>
    </div>
  );
};
