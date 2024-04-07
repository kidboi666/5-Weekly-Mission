import "./FolderList.css";
import addBtn from "../assets/add.svg";
import { useState } from "react";
import CardList from "./CardList";

function FolderList({ folders }) {
  const [title, setTitle] = useState("전체");
  const [id, setId] = useState(0);

  function handleTitle(folderName, folderId) {
    setTitle(folderName);
    setId(folderId);
  }

  const url = `https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${id}`;
  const all_links_url = `https://bootcamp-api.codeit.kr/api/users/1/links`;

  return (
    <div className="folderLinkList">
      <div className="folderLinkList__folders">
        <button
          className="folderLinkList__folder"
          id="0"
          onClick={() => handleTitle("전체", null)}
        >
          전체
        </button>
        {folders.map((folder) => (
          <button
            className="folderLinkList__folder"
            id={folder.id}
            key={folder.id}
            onClick={() => handleTitle(folder.name, folder.id)}
          >
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
      <div className="folderName" id={id}>
        {title}
      </div>
      <div>
        {title === "전체" ? (
          <CardList url={all_links_url} />
        ) : (
          <CardList url={url} />
        )}
      </div>
    </div>
  );
}

export default FolderList;
