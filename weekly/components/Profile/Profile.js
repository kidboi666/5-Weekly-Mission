import styles from '@/styles/Profile.module.css';

function Profile({ email, imgUrl }) {
  return (
    <div className={styles.profile}>
      <img src={imgUrl} alt="프로필 이미지" />
      <p>{email}</p>
    </div>
  );
}

export default Profile;
