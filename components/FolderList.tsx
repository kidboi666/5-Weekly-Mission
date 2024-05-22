import styles from "./FolderList.module.css";
import DeleteFolder from "../modals/DeleteFolder";
import EditAndAddFolder from "../modals/EditAndAddFolder";
import ShareFolder from "../modals/ShareFolder";
import { useState } from "react";
import CardListSection from "./CardListSection";
import FolderMenu from "./FolderMenu";
import AddFolderButton from "./AddFolderButton";
import useIsMobile from "@/hooks/useIsMobile";
import SearchInput from "./SearchInput";
import Image from "next/image";
import FolderEditMenu from "./FolderEditMenu";

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
  const [id, setId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const isMobile = useIsMobile();

  function handleTitle(folderName: string, folderId: number | null) {
    setTitle(folderName);
    setId(folderId);
  }

  function handleClose() {
    setModalOpen("");
  }

  const url =
    id === null
      ? "https://bootcamp-api.codeit.kr/api/users/1/links"
      : `https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${id}`;

  const handleSearch = (term: string): void => {
    setSearchTerm(term);
  };

  return (
    <section className={styles.folderLayout}>
      <SearchInput onSearch={handleSearch} />
      <div className={styles.folderLinkList}>
        <FolderMenu title={title} folders={folders} handleTitle={handleTitle} />
        <AddFolderButton isMobile={isMobile} setModalOpen={setModalOpen} />
      </div>

      <div>
        <>
          <div className={styles.folderLinkList__folderMenu}>
            <div
              className={styles.folderLinkList__folderName}
              id={id?.toString()}
            >
              {title}
            </div>
            {title !== "전체" && <FolderEditMenu setModalOpen={setModalOpen} />}
          </div>
          <CardListSection
            folders={folders}
            url={url}
            searchTerm={searchTerm}
          />
        </>
      </div>
      {modalOpen === "addFolder" && (
        <EditAndAddFolder
          madalTitle={"폴더 추가"}
          onClose={handleClose}
          alter={"추가하기"}
        />
      )}
      {modalOpen === "shareLink" && id && (
        <ShareFolder title={title} id={id} onClose={handleClose} />
      )}
      {modalOpen === "alterName" && (
        <EditAndAddFolder
          madalTitle={"폴더 추가"}
          onClose={handleClose}
          alter={"추가하기"}
        />
      )}
      {modalOpen === "delete" && (
        <DeleteFolder
          madalTitle={"폴더 삭제"}
          title={title}
          onClose={handleClose}
        />
      )}
    </section>
  );
};

export default FolderList;
