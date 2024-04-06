import "./FolderList.css";
import addBtn from "../assets/add.svg";

function FolderList({ folders }) {
  return (
    <div className="folderLinkList">
      <div className="folderLinkList__folders">
        <button className="folderLinkList__folder">전체</button>
        {folders.map((folder) => (
          <button className="folderLinkList__folder" key={folder.id}>
            {folder.name}
          </button>
        ))}
      </div>
      <div className="folderLinkList__addFolderButton">
        <div className="folderLinkList__addFolderButton">
          폴더 추가
          <img
            className="folderLinkList__addFolderIcon"
            src={addBtn}
            alt="폴더추가"
          />
        </div>
      </div>
    </div>
  );
}

export default FolderList;
