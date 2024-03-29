import { useFetch } from "../hooks/useFetch";
import "./Folderdata.css";

function FolderData() {
  const folderData = useFetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );

  return (
    <div className="folderInfoContainer">
      {folderData && (
        <div className="folderInfo">
          <img
            src={folderData.folder.owner.profileImageSource}
            className="folderProfile"
            alt="프로필"
          />
          <span className="ownerName">{folderData.folder.owner.name}</span>
          <h1 className="folderName">{folderData.folder.name}</h1>
        </div>
      )}
    </div>
  );
}

export default FolderData;
