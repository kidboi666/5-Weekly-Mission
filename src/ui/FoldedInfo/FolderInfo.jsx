import "./FolderInfo.css";

export const FolderInfo = ({ profileImage, ownerName, folderName }) => {
  return (
    <div className="FolderInfo">
      <img
        className="FolderInfo-profile"
        src={profileImage}
        alt="폴더 사용자 이름"
      />
      <h3 className="FolderInfo-owner">{ownerName}</h3>
      <h1 className="FolderInfo-folder">{folderName}</h1>
    </div>
  );
};
