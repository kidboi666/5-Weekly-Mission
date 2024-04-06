import "./FolderList.css";
import addBtn from "../assets/add.svg";

function FolderList({ folders }) {
  console.log(folders);
  return (
    <div className="folderLinkList">
      <div className="folderLinkList__folders">
        <div className="folderLinkList__folder">전체</div>
        {folders.map((folder) => (
          <div className="folderLinkList__folder" key={folder.id}>
            <div className="folderLinkList__items">{folder.name}</div>
          </div>
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
