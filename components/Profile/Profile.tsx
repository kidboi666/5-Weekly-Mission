import styles from "./Profile.module.css";

export const Profile = ({ profile }) => {
  return (
    <div className={styles.wrapProfile}>
      <img
        src={profile.profileImageSource}
        className={styles.profileImage}
        alt="프로필이미지"
      />
      <span className={styles.profileEmail}>{profile.email}</span>
    </div>
  );
};
