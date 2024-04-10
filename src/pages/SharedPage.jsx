import { useState } from "react";
import { styled } from "styled-components";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { LinkList } from "../components/LinkList";
import { Footer } from "../components/Footer";
import { useGetFolder } from "../hooks/useGetFolder.jsx";
import { CategoryBtnList } from "../components/CategoryBtnList.jsx";
import { FolderEditBtns } from "../components/FolderEditBtns.jsx";
import { useGetFolderList } from "../hooks/useGetFolderList.jsx";
import plusIcon from "../assets/PlusIcon.svg";
import { useGetLinks } from "../hooks/useGetLinks.jsx";

export const SharedPage = () => {
  const [folderId, setFolderId] = useState("");
  const [folderData] = useGetFolder();
  const [folderList] = useGetFolderList();
  const [linkList] = useGetLinks(1, folderId);
  const [selectedCategory, setSelectedCategory] = useState(folderList[0].name);

  return (
    <>
      <Header
        profileImg={folderData.owner?.profileImageSource}
        ownerName={folderData.owner?.name}
        folderName={folderData.name}
      />
      <Main $isFolderData={folderData.name}>
        <SearchBar />

        <Container>
          <CategoryBtnList
            folderList={folderList}
            folderId={folderId}
            setFolderId={setFolderId}
            setSelectedCategory={setSelectedCategory}
          />
          <AddFolderBtn>
            <span>폴더 추가</span> <PlusIcon src={plusIcon} alt="플러스 아이콘" />
          </AddFolderBtn>
        </Container>

        <Container>
          <CategoryText>{selectedCategory}</CategoryText>
          <FolderEditBtns />
        </Container>
        {linkList[0] ? (
          <LinkList linkList={linkList} />
        ) : (
          <NotFoundFolder>
            <p>저장된 링크가 없습니다.</p>
          </NotFoundFolder>
        )}
      </Main>
      <FAB>폴더 추가</FAB>
      <Footer />
    </>
  );
};

const Main = styled.main`
  margin-top: 40px;
  margin-bottom: 100px;
  padding: 0 190px;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 32px;
    margin-bottom:${({ $isFolderData }) => ($isFolderData ? "100px" : "367px")} 
  
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const CategoryText = styled.span`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.2px;
`;

const AddFolderBtn = styled.button`
  color: ${({ theme }) => theme.color.GraPurpleblue};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.3px;
  background: none;
  border: none;
  display: flex;
  gap: 4px;
  margin-top: 40px;
  cursor: pointer;
  flex-wrap: wrap;
  white-space: nowrap;
  width: 50%;
  justify-content: flex-end;

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

const PlusIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const NotFoundFolder = styled.div`
  margin-top: 40px;
  padding: 41px 0;
  text-align: center;
`;

const FAB = styled.button`
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }

  @media ${({ theme }) => theme.device.mobile} {
    display: block;
    position: fixed;
    z-index: 1;
    border-radius: 20px;
    padding: 8px 24px;
    border: 1px solid var(--Linkbrary-white, #fff);
    background: var(--Linkbrary-primary-color, #6d6afe);
    color: var(--Linkbrary-gray10, #e7effb);
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.3px;
    bottom: 101px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
