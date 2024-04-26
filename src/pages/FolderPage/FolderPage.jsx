import AddLinkBar from '../../components/AddLinkBar/AddLinkBar';
import LinkCardList from '../../components/LinkCardList/LinkCardList';
import { getUserFolders, getUserLinks } from '../../utils/api';
import { useEffect, useState, useCallback } from 'react';
import './FolderPage.css';
import { convertObjectKeysToCamelCase } from '../../utils/convertObjectKeysToCamelCase';
import Modal from '../../components/Modal/Modal';
import FolderDelete from '../../components/ModalContents/FolderDelete';
import FolderInputModal from '../../components/ModalContents/FolderInputModal';
const allFolder = {
  id: 0,
  name: '전체',
  user_id: 1,
};

export default function FolderPage() {
  const [currentFolderId, setCurrentFolderId] = useState(0);
  const [folders, setFolders] = useState([allFolder]);
  const [links, setLinks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleFolderAddClick = () => {
    setShowModal(true);
    setModalContent(
      <FolderInputModal headerText={'폴더 추가'} buttonText={'추가하기'} />
    );
  };

  const handleFolderNameChangeClick = () => {
    setShowModal(true);
    const currentFolder = folders.find(
      (folder) => folder.id === currentFolderId
    );
    setModalContent(
      <FolderInputModal
        initialValue={currentFolder.name}
        headerText={'폴더 이름 변경'}
        buttonText={'변경하기'}
      />
    );
  };

  const handleFolderDeleteClick = () => {
    setShowModal(true);
    const currentFolder = folders.find(
      (folder) => folder.id === currentFolderId
    );
    setModalContent(<FolderDelete folderName={currentFolder.name} />);
  };

  const handleLoad = useCallback(async () => {
    let result;
    try {
      result = await getUserFolders();
    } catch (error) {}
    setFolders([allFolder, ...result]);
    try {
      result = await getUserLinks(0);
    } catch (error) {}
    let links = [];
    for (const link of result) {
      links.push(convertObjectKeysToCamelCase(link));
    }
    setLinks(links);
    setCurrentFolderId(0);
  }, []);

  const handleFolderNameButtonClick = async (id) => {
    setCurrentFolderId(id);
    let result;
    try {
      result = await getUserLinks(id);
    } catch (error) {}
    let links = [];
    for (const link of result) {
      links.push(convertObjectKeysToCamelCase(link));
    }
    setLinks(links);
  };

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <>
      {showModal && (
        <>
          <Modal onClose={() => setShowModal(false)}>{modalContent}</Modal>
          <div className={'overlay'} onClick={() => setShowModal(false)}></div>
        </>
      )}
      <AddLinkBar />
      <LinkCardList
        folders={folders}
        items={links}
        folderNameOnClick={handleFolderNameButtonClick}
        currentFolderId={currentFolderId}
        onFolderAddClick={handleFolderAddClick}
        onFolderNameChangeClick={handleFolderNameChangeClick}
        onFolderDeleteClick={handleFolderDeleteClick}
      />
    </>
  );
}
