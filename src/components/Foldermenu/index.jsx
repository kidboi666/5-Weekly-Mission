// Foldermenu.jsx
import { useFetch } from '../../utils/hooks/useFetch';
import styled from 'styled-components';
import './index.css';
import addfolderIcon from '../../assets/addfolder.svg';
import deleteicon from '../../assets/deleteicon.svg';
import changenameicon from '../../assets/changenameicon.svg';
import shareicon from '../../assets/shareicon.svg';
import { useState } from 'react';
import Cardsfolder from '../../components/Cardsfolder';
import ModalFolder from '../../modal/ModalFolder';
import ModalShare from '../../modal/ModalShare'; // ModalShare import 추가
import ModalDelete from '../../modal/ModalDelete';

const BASE_URL_FOLDER = 'https://bootcamp-api.codeit.kr/api/users/1/folders';
const BASE_URL_ALL_FOLDER = 'https://bootcamp-api.codeit.kr/api/users/1/links';

const FolderListContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 0.8rem;
  position: relative;
  flex-wrap: wrap;
`;

const FolderMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.4rem;
  height: 3.2rem;
  margin-bottom: 2.4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  height: 1.8rem;
`;

function Foldermenu() {
  const FolderlistData = useFetch(BASE_URL_FOLDER);
  const [activeButton, setActiveButton] = useState('전체');
  const [url, setUrl] = useState(BASE_URL_ALL_FOLDER);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalShareOpen, setIsModalShareOpen] = useState(false);
  const [isModalRenameOpen, setIsModalRenameOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [currentFolderId, setCurrentFolderId] = useState(null); // 현재 폴더의 ID 추가

  function handleCloseModal(isOpen) {
    setIsModalOpen(isOpen);
  }
  function handleClickButton() {
    setIsModalOpen(true);
  }

  function handleCloseShareModal(isOpen) {
    setIsModalShareOpen(isOpen);
  }
  function handleClickShareButton() {
    setIsModalShareOpen(true);
  }

  function handleCloseRenameModal(isOpen) {
    setIsModalRenameOpen(isOpen);
  }
  function handleClickRenameButton() {
    setIsModalRenameOpen(true);
  }

  function handleCloseDeleteModal(isOpen) {
    setIsModalDeleteOpen(isOpen);
  }
  function handleClickDeleteButton() {
    setIsModalDeleteOpen(true);
  }

  const handleOnClick = (e) => {
    const folderId = e.currentTarget.id; // 클릭된 버튼의 ID 가져오기
    const folderName = e.currentTarget.textContent; // 클릭된 버튼의 텍스트 가져오기

    // 클릭된 버튼에 active 클래스 추가하기
    const btns = document.querySelectorAll('.folderButtons');
    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
    e.currentTarget.classList.add('active');

    setActiveButton(folderName); // 선택된 폴더의 이름 설정하기
    setCurrentFolderId(folderId); // 현재 폴더의 ID 설정하기

    if (folderId !== 'all') {
      setUrl(`${BASE_URL_ALL_FOLDER}?folderId=${folderId}`); // 선택된 폴더에 해당하는 URL 설정하기
    } else {
      setUrl(BASE_URL_ALL_FOLDER);
    }
  };

  return (
    <div>
      <div className="buttonContainer">
        <FolderListContainer>
          <button
            className="folderButtons allFolders active"
            onClick={handleOnClick}
            id="all"
          >
            전체
          </button>
          {FolderlistData &&
            FolderlistData.data.map((folderdata) => (
              <button
                className="folderButtons"
                key={folderdata.id}
                onClick={handleOnClick}
                id={folderdata.id}
              >
                {folderdata.name}
              </button>
            ))}
        </FolderListContainer>
        <button onClick={handleClickButton}>
          <img
            className="addFolderIcon"
            src={addfolderIcon}
            alt="폴더 추가 아이콘"
          />
        </button>
      </div>
      <FolderMenuContainer>
        <p className="folderName">{activeButton}</p>
        {activeButton === '전체' && (
          <ImageContainer>
            <button onClick={handleClickShareButton}>
              <img src={shareicon} alt="폴더 공유 아이콘" />
            </button>
            <button onClick={handleClickRenameButton}>
              <img src={changenameicon} alt="폴더 이름 변경 아이콘" />
            </button>
            <button onClick={handleClickDeleteButton}>
              <img src={deleteicon} alt="폴더 삭제 아이콘" />
            </button>
          </ImageContainer>
        )}
      </FolderMenuContainer>
      <Cardsfolder url={url} />

      {isModalOpen && (
        <ModalFolder
          title={'폴더 추가'}
          targetName={''}
          onClose={handleCloseModal}
          buttonName={'추가하기'}
          isModalOpen={isModalOpen}
        />
      )}
      {isModalShareOpen && (
        <ModalShare
          title={'폴더 공유'}
          targetName={activeButton}
          onClose={handleCloseShareModal}
          isModalOpen={isModalShareOpen}
          currentFolderId={currentFolderId} // currentFolderId 전달
        />
      )}
      {isModalRenameOpen && (
        <ModalFolder
          title={'폴더 이름 변경'}
          folderName={activeButton}
          onClose={handleCloseRenameModal}
          buttonName={'변경하기'}
          isModalOpen={isModalRenameOpen}
        />
      )}
      {isModalDeleteOpen && (
        <ModalDelete
          title={'폴더 삭제'}
          DeleteName={activeButton}
          onClose={handleCloseDeleteModal}
          isModalOpen={isModalDeleteOpen}
        />
      )}
    </div>
  );
}

export default Foldermenu;
