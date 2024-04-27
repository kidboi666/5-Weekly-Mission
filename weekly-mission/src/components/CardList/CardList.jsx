import SearchBar from "../Searchbar/Searchbar";
import Folder from "../Folder/Folder";
import useFetchData from "../../Hooks/useFetchData";
import { memo } from "react";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import { useModal } from "../Context/ModalContext";
import * as S from "./CardList.styled";

const CardList = ({ isFolderPage }) => {
  const { data: folderData, isLoading } = useFetchData(
    `${import.meta.env.VITE_BASE_URL}/sample/folder`
  );

  const { isModalOpen, closeModal } = useModal();

  if (isLoading) return <div>Loading...</div>;
  if (!folderData) return null;

  const folderId = null;

  return (
    <S.CardListWrapper>
      <SearchBar />
      {isFolderPage ? (
        <Folder folderId={folderId} />
      ) : (
        <S.CardContainer>
          {folderData.folder.links.map((link) => (
            <Card key={link.id} link={link} />
          ))}
        </S.CardContainer>
      )}

      {isModalOpen.deleteFolder && (
        <Modal
          text="폴더 삭제"
          buttonText="삭제하기"
          buttonType="red"
          onClick={() => closeModal("deleteFolder")}
        />
      )}
      {isModalOpen.addLink && (
        <Modal
          text="폴더에 추가"
          buttonText="추가하기"
          buttonType="primary"
          onClick={() => closeModal("addLink")}
        />
      )}
    </S.CardListWrapper>
  );
};

export default memo(CardList);
