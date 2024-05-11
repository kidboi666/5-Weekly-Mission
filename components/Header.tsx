import useData from "../../hooks/hooks/useData";
import { getSampleUserData } from "../api/Api";
import "./Header.css";

function Header() {
  const folderData = useData(getSampleUserData);
  return (
    <header>
      {folderData && (
        <div className="Header__profileArea">
          <img
            className="Header__profileArea__profileImg"
            src={folderData.folder.owner.profileImageSource}
            alt="프로필사진"
          />
          <div className="Header__profileArea__nickname">
            {folderData.folder.owner.name}
          </div>
          <div className="Header__profileArea__folderName">
            {folderData.folder.name}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
