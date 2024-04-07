import { useState } from "react";
import { useUsersFolder } from "../../hooks/useUsersFolder";
import LinkBar from "../../components/LinkBar/LinkBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import FolderList from "../FolderList/FolderList";
import "../Folder/FolderPage.css";
import addImg from "../../assets/add.svg";

function FolderPage() {
  const userdata = useUsersFolder();

  const [activeButton, setActiveButton] = useState("전체");
  const [activeButtonId, setActiveButtonId] = useState("");

  const handleFolderClick = (folderId, folderName) => {
    setActiveButton(folderName);
    setActiveButtonId(folderId);
  };
  return (
    <div className="container">
      <LinkBar />
      <SearchBar />
      <div className="folder-container">
        <div className="toolbar-container">
          <div className="toolbar-box">
            <button
              className="toolbar-btn"
              onClick={() => handleFolderClick("", "전체")}
              id="all"
            >
              전체
            </button>
            {userdata &&
              userdata.data.map((item) => (
                <div key={item.id}>
                  <div className="toolbar">
                    <button
                      className="toolbar-btn"
                      onClick={() => handleFolderClick(item.id, item.name)}
                      id={item.id}
                    >
                      {item.name}
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className="folder-btn-box">
            <button className="folder-btn">폴더 추가</button>
            <img src={addImg} alt="폴더 추가 이미지" />
          </div>
        </div>
        <span className="folder-name">{activeButton}</span>
        {activeButtonId === "" ? (
          <FolderList />
        ) : (
          <span className="no-link-msg">저장된 링크가 없습니다</span>
        )}
      </div>
    </div>
  );
}

export default FolderPage;
