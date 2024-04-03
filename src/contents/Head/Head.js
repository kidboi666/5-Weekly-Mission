import { useFetch } from "../../hooks/useFetch";
import "./Head.css";

function Head() {
  const UserInfo = useFetch("https://bootcamp-api.codeit.kr/api/sample/folder");

  return (
    <div className="container">
      {UserInfo && (
        <div className="title">
          <img
            src={UserInfo.folder.owner.profileImageSource}
            className="profileImage"
            alt="사용자 이미지"
          />
          <p className="userName">{UserInfo.folder.owner.name}</p>
          <h1 className="folderName">{UserInfo.folder.name}</h1>
        </div>
      )}
    </div>
  );
}

export default Head;
