import "./FolderInfo.css";

export const FolderInfo = ({ folderName, ownerName, profileImage }) => {
  return (
    <div className="folderInfo">
      <img
        src={profileImage}
        alt="폴더 유저 프로필 이미지"
        className="folderInfo-profile"
      />
      <span className="folderInfo-owner">{ownerName}</span>
      <h2 className="folderInfo-folder">{folderName}</h2>
    </div>
  );
};
