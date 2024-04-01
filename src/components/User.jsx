import { useFetchFolder } from "../hooks/useFetchFolder";
import "../components/User.css";

function User() {
  const dataFolder = useFetchFolder();

  return (
    <div className="user-container">
      {dataFolder && (
        <div className="user-content">
          <img
            className="user-avatar"
            src={dataFolder.folder.owner.profileImageSource}
          />
          <p className="user-oner">@{dataFolder.folder.owner.name}</p>
          <p className="user-name">{dataFolder.folder.name}</p>
        </div>
      )}
    </div>
  );
}

export default User;
