import styles from '@/styles/Folder.module.css';

function Folder({ owner = { profileImageSource: '', name: 'unknown' }, folderName }) {
  return (
    <div className={styles.folder}>
      <img src={owner.profileImageSource} alt="프로필 이미지" />
      <p>{owner.name}</p>
      <h1>{folderName}</h1>
    </div>
  );
}

export default Folder;
