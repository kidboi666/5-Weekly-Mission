import "./FolderList.css";
import addBtn from "../assets/add.svg";
import addBtnMobile from "../assets/add 2.svg";
import shareBtn from "../assets/share.svg";
import renameBtn from "../assets/pen.svg";
import deleteBtn from "../assets/Group 36.svg";
import { useState } from "react";
import CardListSection from "./CardListSection";

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
    <section className="folderLayout">
      <div className="folderLinkList">
        <div className="folderLinkList__folders">
          <button
            className={
              "전체" === title
                ? "folderLinkList__folder--active"
                : "folderLinkList__folder"
            }
            id="0"
            onClick={() => handleTitle("전체", null)}
          >
            전체
          </button>
          {folders.map((folder) => (
            <button
              className={
                folder.name === title
                  ? "folderLinkList__folder--active"
                  : "folderLinkList__folder"
              }
              id={folder.id}
              key={folder.id}
              onClick={() => handleTitle(folder.name, folder.id)}
            >
              {folder.name}
            </button>
          ))}
        </div>
        <button className="folderLinkList__addFolderButton">
          폴더 추가
          <img
            className="folderLinkList__addFolderIcon"
            src={addBtn}
            alt="폴더추가"
          />
        </button>
        <button className="folderLinkList__addFolderButton--mobile">
          폴더 추가
          <img
            className="folderLinkList__addFolderIcon"
            src={addBtnMobile}
            alt="폴더추가"
          />
        </button>
      </div>
      <div className="folderLinkList__folderMenu">
        <div className="folderLinkList__folderName" id={id}>
          {title}
        </div>
        {title !== "전체" && (
          <div className="folderLinkList__folderEditBtns">
            <button className="folderLinkList__folderEditBtn">
              <img src={shareBtn} alt="공유하기" /> 공유
            </button>
            <button className="folderLinkList__folderEditBtn">
              <img src={renameBtn} alt="이름변경" /> 이름 변경
            </button>
            <button className="folderLinkList__folderEditBtn">
              <img src={deleteBtn} alt="삭제" /> 삭제
            </button>
          </div>
        )}
      </div>
      <div>
        {title === "전체" ? (
          <CardListSection url={all_links_url} />
        ) : (
          <CardListSection url={url} />
        )}
      </div>
    </section>
  );
}

export default FolderList;
