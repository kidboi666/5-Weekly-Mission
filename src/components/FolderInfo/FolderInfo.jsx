import './FolderInfo.css';

const STYLE_FOLDER_INFO_CLASS_NAME = 'folder-info';
const STYLE_OWNER_PROFILE_CLASS_NAME = 'owner-profile';
const STYLE_OWNER_PROFILE_IMAGE_CLASS_NAME = 'owner-profile-image';
const STYLE_FOLDER_NAME_CLASS_NAME = 'folder-name';

export default function FolderInfo({
  ownerName,
  folderName,
  profileImgSource,
}) {
  return (
    <div className={STYLE_FOLDER_INFO_CLASS_NAME}>
      <div className={STYLE_OWNER_PROFILE_CLASS_NAME}>
        <img
          src={profileImgSource}
          alt="Folder Owner Profile"
          className={STYLE_OWNER_PROFILE_IMAGE_CLASS_NAME}
        />
        <span>@{ownerName}</span>
      </div>

      <span className={STYLE_FOLDER_NAME_CLASS_NAME}>{folderName}</span>
    </div>
  );
}
