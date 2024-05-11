import "./FolderList.css";
import addBtn from "@/public//add.svg";
import addBtnMobile from "@/public//add 2.svg";
import shareBtn from "@/public//share.svg";
import renameBtn from "@/public//pen.svg";
import deleteBtn from "@/public//Group 36.svg";
import DeleteFolder from "../modals/DeleteFolder";
import EditAndAddFolder from "../modals/EditAndAddFolder";
import ShareFolder from "../modals/ShareFolder";
import { useState } from "react";
import CardListSection from "./CardListSection";
import SearchInput from "./SearchInput";

interface Folder {
  created_at: string;
  favorite: boolean;
  id: number;
  link: {
    count: number;
  };
  name: string;
  user_id: number;
}

interface FolderListProp {
  folders: Folder[];
}
const FolderList: React.FC<FolderListProp> = ({ folders }) => {
  const [modalOpen, setModalOpen] = useState<string>("");
  const [title, setTitle] = useState<string>("전체");
  const [id, setId] = useState<number>();
  const [searchTerm, setSearchTerm] = useState<string>("");

  function handleTitle(folderName: string, folderId: number) {
    setTitle(folderName);
    setId(folderId);
  }

  const url =
    id === null
      ? "https://bootcamp-api.codeit.kr/api/users/1/links"
      : `https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${id}`;

  const handleSearch = (term: string): void => {
    setSearchTerm(term);
  };

  return (
    <section className="folderLayout">
      <SearchInput onSearch={handleSearch} />
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
              id={id?.toString()}
              key={folder.id}
              onClick={() => {
                handleTitle(folder.name, folder.id);
              }}
            >
              {folder.name}
            </button>
          ))}
        </div>
        <button
          className="folderLinkList__addFolderButton"
          onClick={(e) => {
            e.preventDefault();
            setModalOpen("addFolder");
          }}
        >
          폴더 추가
          <img
            className="folderLinkList__addFolderIcon"
            src={addBtn}
            alt="폴더추가"
          />
        </button>
        <button
          className="folderLinkList__addFolderButton--mobile"
          onClick={(e) => {
            e.preventDefault();
            setModalOpen("addFolder");
          }}
        >
          폴더 추가
          <img
            className="folderLinkList__addFolderIcon"
            src={addBtnMobile}
            alt="폴더추가"
          />
        </button>
        {modalOpen === "addFolder" && (
          <EditAndAddFolder
            madalTitle={"폴더 추가"}
            onClose={setModalOpen}
            alter={"추가하기"}
          />
        )}
      </div>

      <div>
        {title === "전체" ? (
          <>
            <div className="folderLinkList__folderMenu">
              <div className="folderLinkList__folderName" id={id?.toString()}>
                {title}
              </div>
            </div>
            <CardListSection
              folders={folders}
              url={url}
              searchTerm={searchTerm}
            />
          </>
        ) : (
          <>
            <div className="folderLinkList__folderMenu">
              <div className="folderLinkList__folderName" id={id?.toString()}>
                {title}
              </div>
              <div className="folderLinkList__folderEditBtns">
                <button
                  className="folderLinkList__folderEditBtn"
                  onClick={(e) => {
                    e.preventDefault();
                    setModalOpen("shareLink");
                  }}
                >
                  <img src={shareBtn} alt="공유하기" /> 공유
                </button>
                <button
                  className="folderLinkList__folderEditBtn"
                  onClick={(e) => {
                    e.preventDefault();
                    setModalOpen("alterName");
                  }}
                >
                  <img src={renameBtn} alt="이름변경" /> 이름 변경
                </button>

                <button
                  className="folderLinkList__folderEditBtn"
                  onClick={(e) => {
                    e.preventDefault();
                    setModalOpen("delete");
                  }}
                >
                  <img src={deleteBtn} alt="삭제" /> 삭제
                </button>
              </div>
            </div>
            <CardListSection
              folders={folders}
              url={url}
              searchTerm={searchTerm}
            />
          </>
        )}
      </div>

      {modalOpen === "shareLink" && (
        <ShareFolder title={title} id={id} onClose={setModalOpen} />
      )}
      {modalOpen === "alterName" && (
        <EditAndAddFolder
          madalTitle={"폴더 추가"}
          onClose={setModalOpen}
          alter={"추가하기"}
        />
      )}
      {modalOpen === "delete" && (
        <DeleteFolder
          madalTitle={"폴더 삭제"}
          title={title}
          onClose={setModalOpen}
        />
      )}
    </section>
  );
};

export default FolderList;
