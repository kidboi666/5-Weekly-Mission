import { useFetch } from "../usefetch";
import "./foldertitle.css";
function FolderTitle() {
  const folderData = useFetch(
    `https://bootcamp-api.codeit.kr/api/sample/folder`
  );

  return (
    <div className="folderTitle">
      <div className="folderTitle__container">
        <img
          className="folder__img"
          src={folderData?.folder?.owner?.profileImageSource}
          alt="프로필 이미지"
        />
        <h2 className="folder__tagName">{folderData?.folder?.owner?.name}</h2>
        <h1 className="folder__name">{folderData?.folder?.name}</h1>
      </div>
    </div>
  );
}

export default FolderTitle;
