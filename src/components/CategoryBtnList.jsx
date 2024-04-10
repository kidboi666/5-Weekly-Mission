import { useState } from "react";
import { styled } from "styled-components";
import { useChangeFolderColor } from "../hooks/useChangeFolderColor";

export const CategoryBtnList = ({ folderList, folderId, setFolderId, setSelectedCategory }) => {
  return (
    <BtnContainer>
      {folderList.map((folder) => {
        return (
          <CategoryBtn
            key={folder.id}
            currentFolderId={folderId}
            folderId={folder.id}
            setFolderId={setFolderId}
            setSelectedCategory={setSelectedCategory}
          >
            {folder.name}
          </CategoryBtn>
        );
      })}
    </BtnContainer>
  );
};

const CategoryBtn = ({ folderId, currentFolderId, setFolderId, setSelectedCategory, children }) => {
  const [isSeleted, setIsSelected] = useState(false);

  useChangeFolderColor(currentFolderId, folderId, setIsSelected);

  const onChangeFolder = () => {
    setFolderId(folderId);
    setSelectedCategory(children);
  };

  return (
    <Btn onClick={onChangeFolder} $isSeleted={isSeleted}>
      {children}
    </Btn>
  );
};

const BtnContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
  flex-wrap: wrap;
  width: 50%;

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

const Btn = styled.button`
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.GraPurpleblue};
  background: #fff;
  padding: 8px 12px;
  cursor: pointer;
  color: ${({ $isSeleted, theme }) => ($isSeleted ? theme.color.White : theme.color.Gray1)};
  background-color: ${({ $isSeleted, theme }) => ($isSeleted ? theme.color.GraPurpleblue : "#fff")};
  white-space: nowrap;
`;
