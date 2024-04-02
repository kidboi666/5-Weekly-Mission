import "../css/Folder.css";

function Folder() {
  return (
    <div className="warp">
      <div className="user">
        <img
          className="folder-user"
          src="/images/Avatar.png"
          alt="프로필 이미지"
        />
        <span className="folder-user-name">@코드잇</span>
        <img className="folder-name" src="/images/star.png" alt="폴더" />
      </div>
    </div>
  );
}

export default Folder;
