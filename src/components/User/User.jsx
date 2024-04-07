import { useFetchFolder } from "../../hooks/useFetchFolder";
import "../User/User.css";

function User() {
  const dataFolder = useFetchFolder();

  return (
    <div className="user-container">
      {dataFolder && (
        <div className="user-content">
          <img
            className="user-avatar"
            src={dataFolder.folder.owner.profileImageSource}
            alt="유저 이미지"
          />
          <p className="user-oner">@{dataFolder.folder.owner.name}</p>
          <p className="user-name">{dataFolder.folder.name}</p>
        </div>
      )}
    </div>
  );
}

export default User;
