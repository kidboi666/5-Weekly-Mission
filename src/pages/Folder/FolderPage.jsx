import { useState } from "react";
import { useUsersFolder } from "../../hooks/useUsersFolder";
import LinkBar from "../../components/LinkBar/LinkBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import FolderList from "../FolderList/FolderList";
import "../Folder/FolderPage.css";
import addImg from "../../assets/add.svg";
import share from "../../assets/share.svg";
import pen from "../../assets/pen.svg";
import deleteIcon from "../../assets/delete.svg";
import { Layout } from "../../sharing/ui-layout/Layout";

function FolderPage() {
  const userdata = useUsersFolder();

  const [activeButton, setActiveButton] = useState("전체");
  const [activeButtonId, setActiveButtonId] = useState("");

  const handleFolderClick = (folderId, folderName) => {
    setActiveButton(folderName);
    setActiveButtonId(folderId);
  };
  return (
    <Layout isSticky={false}>
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
          <div className="add-btn-box">
            <button className="add-btn">폴더 추가</button>
            <img className="add-icon" src={addImg} alt="폴더 추가 이미지" />
          </div>
          {activeButton !== "전체" ? (
            <div className="btns-box">
              <img src={share} alt="share" />
              <button>공유</button>
              <img src={pen} alt="pen" />
              <button>이름 변경</button>
              <img src={deleteIcon} alt="delete" />
              <button>삭제</button>
            </div>
          ) : (
            ""
          )}

          <span className="folder-name">{activeButton}</span>
        </div>
        {activeButtonId === "" ? (
          <FolderList />
        ) : (
          <span className="no-link-msg">저장된 링크가 없습니다</span>
        )}
      </div>
    </Layout>
  );
}

export default FolderPage;
