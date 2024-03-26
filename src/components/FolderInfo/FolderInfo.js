import './FolderInfo.css';

export default function Profile({ ownerName, folderName, profileImgSource }) {
  console.log(ownerName);
  return (
    <div className='folder-info'>
      <div className='owner-profile'>
        <img
          src={profileImgSource}
          alt='Folder Owner Profile'
          className='owner-profile-image'
        />
        <span>@{ownerName}</span>
      </div>

      <span className='folder-name'>{folderName}</span>
    </div>
  );
}
