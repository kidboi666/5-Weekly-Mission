import styled from 'styled-components';
import { useState } from 'react';
import FolderListButton from './Button/FolderListButton';
import shareIcon from '../assets/share.svg';
import editIcon from '../assets/pen.svg';
import deleteIcon from '../assets/trash.svg';
import Modal from './Modal/Modal';

function FolderButton({ setFolderId, folderId, folderName, selected, handleSelect }) {
  const handleOnClick = () => {
    setFolderId(folderId);
    handleSelect(folderName);
  };

  return (
    <FolderListButton onClick={handleOnClick} $isSelected={selected === folderName}>
      {folderName}
    </FolderListButton>
  );
}

function Sorting({ folderList, setFolderId }) {
  const [selectedFolderName, setSelectedFolderName] = useState('전체');

  if (!folderList) return;

  const handelOnClickTotal = () => {
    setFolderId(null);
    setSelectedFolderName('전체');
  };

  return (
    <FolderToolBarWrap>
      <FolderListWrapper>
        <FolderListButton onClick={handelOnClickTotal} $isSelected={selectedFolderName === '전체'}>
          전체
        </FolderListButton>
        {Object.values(folderList).map((folder) => {
          return <FolderButton key={folder.id} setFolderId={setFolderId} folderId={folder.id} folderName={folder.name} selected={selectedFolderName} handleSelect={setSelectedFolderName} />;
        })}
      </FolderListWrapper>
      <Modal title="폴더 추가" content="input" buttonMessage="추가하기">
        <p>폴더 추가</p>
        <div className="icon"></div>
      </Modal>
      <FolderName>{selectedFolderName}</FolderName>
      {selectedFolderName === '전체' ? null : (
        <OptionWrapper>
          <OptionButton>
            <img className="icon" src={shareIcon} alt="아이콘" />
            공유
          </OptionButton>
          <OptionButton>
            <img className="icon" src={editIcon} alt="아이콘" />
            이름 변경
          </OptionButton>
          <OptionButton>
            <img className="icon" src={deleteIcon} alt="아이콘" />
            삭제
          </OptionButton>
        </OptionWrapper>
      )}
    </FolderToolBarWrap>
  );
}

const FolderToolBarWrap = styled.div`
  display: grid;
  grid-template-areas: 'folderList folderList addFolder' 'folderName option option';
  grid-row-gap: 2.4rem;
  grid-column-gap: 1.2rem;
  align-items: center;
  margin-bottom: 2.4rem;

  @media screen and (max-width: 767px) {
    grid-template-areas:
      'folderList'
      'folderName'
      'option';
  }
`;

const FolderListWrapper = styled.div`
  display: flex;
  grid-area: folderList;
  column-gap: 0.8rem;
  flex-wrap: wrap;
  row-gap: 1.2rem;
`;

const FolderName = styled.h2`
  grid-area: folderName;
  margin: 0;
`;

const OptionWrapper = styled.div`
  display: flex;
  grid-area: option;
  justify-self: flex-end;

  @media screen and (max-width: 767px) {
    justify-self: flex-start;
  }
`;

const OptionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  border: none;
  background-color: transparent;
`;

export default Sorting;
