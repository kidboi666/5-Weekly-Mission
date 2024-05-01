import * as S from "./Folder.styled";
import { useState, useEffect, memo } from "react";
import useFetchData from "../../hooks/useFetchData";
import FolderMenuList from "../FolderMenuList/FolderMenuList";
import FolderContent from "../FolderContent/FolderContent";
import AddButton from "../AddButton/AddButton";
import Modal from "../Modal/Modal";
import { useModal } from "../Context/ModalContext";

import { fetchLinkData } from "../../services/fetchFolderLinksData";

const Folder = ({ folderId }) => {
  const { data: foldersData, isLoading } = useFetchData(
    `${import.meta.env.VITE_BASE_URL}/users/1/folders`
  );

  const [activeButton, setActiveButton] = useState(null);
  const [allLinksData, setAllLinksData] = useState(null);
  const [activeFolderName, setActiveFolderName] = useState("전체");

  const { isModalOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLinkData(folderId);
        setAllLinksData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [folderId]);

  const handleButtonClick = async (folderId, folderName) => {
    if (folderId === activeButton) {
      return;
    }

    setActiveButton(folderId === "전체" ? null : folderId);
    setActiveFolderName(folderName);
    const data = await fetchLinkData(folderId);
    setAllLinksData(data);
  };

  if (!foldersData) return null;

  return (
    <>
      <S.FoldermenuToolbar>
        <FolderMenuList
          folders={foldersData.data}
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
        />
        <AddButton />
      </S.FoldermenuToolbar>

      <FolderContent
        allLinksData={allLinksData}
        activeFolderName={activeFolderName}
        activeFolderId={activeButton}
      />

      {isModalOpen.deleteFolder && (
        <Modal
          text="폴더 삭제"
          showButton={true}
          buttonText="삭제하기"
          buttonType="red"
          content="폴더명"
          onClick={() => closeModal("deleteFolder")}
        />
      )}

      {isModalOpen.addLink && (
        <Modal
          text="폴더에 추가"
          showButton={true}
          buttonText="추가하기"
          buttonType="primary"
          content="링크 주소"
          onClick={() => closeModal("addLink")}
        />
      )}
    </>
  );
};

export default memo(Folder);
