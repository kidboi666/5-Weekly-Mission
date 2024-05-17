import { useFetch } from '../../hooks/useFetch';
import styles from './index.module.css';
import addfolderIcon from '@/public/addfolder.svg';
import deleteicon from '@/public/deleteicon.svg';
import changenameicon from '@/public/changenameicon.svg';
import shareicon from '@/public/shareicon.svg';
import { useState } from 'react';
import FolderCards from '@/components/FolderCards';
import ModalFolder from '@/components/modal/ModalFolder';
import ModalShare from '@/components/modal/ModalShare';
import ModalDelete from '@/components/modal/ModalDelete';
import SearchableBar from '@/components/SearchableBar';
import Image from 'next/image';
import S from './foldermenu.module.css';
import {
  BASE_URL_FOLDER,
  BASE_URL_ALL_FOLDER,
  BASE_FOLDER_ID,
} from '@/constant/folder-constant';

interface Card {
  id: string;
  url: string;
  title: string;
  description: string;
}
interface Folder {
  id: string;
  name: string;
}

interface FolderResponse {
  data: Folder[];
}

function Foldermenu() {
  const folder = useFetch<FolderResponse>(BASE_URL_FOLDER);
  const folderNames = folder?.data;
  const [activeButton, setActiveButton] = useState('전체');
  const [url, setUrl] = useState(BASE_URL_ALL_FOLDER);
  const [currentFolderId, setCurrentFolderId] = useState<string | null>(
    BASE_FOLDER_ID
  );
  const [filteredLinks, setFilteredLinks] = useState<Card[]>([]);
  const [modalState, setModalState] = useState({
    addFolder: false,
    shareFolder: false,
    renameFolder: false,
    deleteFolder: false,
  });

  const handleModalOpen = (modalType: string) => {
    setModalState((prevState) => ({
      ...prevState,
      [modalType]: true,
    }));
  };

  const handleModalClose = (modalType: string) => {
    setModalState((prevState) => ({
      ...prevState,
      [modalType]: false,
    }));
  };
  const handleSearch = (filteredLinks: Card[]) => {
    setFilteredLinks(filteredLinks);
  };

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const folderId = e.currentTarget.id;
    const folderName = e.currentTarget.textContent || '';
    setActiveButton(folderName);
    setCurrentFolderId(folderId);

    if (folderId !== BASE_FOLDER_ID) {
      setUrl(`${BASE_URL_ALL_FOLDER}?folderId=${folderId}`);
    } else {
      setUrl(BASE_URL_ALL_FOLDER);
    }
  };

  return (
    <div>
      <SearchableBar links={filteredLinks} onSearch={handleSearch} />
      <div className={styles.buttonContainer}>
        <div className={S.folderListContainer}>
          <button
            className={`${styles.folderButtons} ${styles.allFolders} ${
              currentFolderId == BASE_FOLDER_ID ? styles.active : ''
            }`}
            onClick={handleOnClick}
            id={BASE_FOLDER_ID}
          >
            전체
          </button>
          {folderNames &&
            folderNames.map((foldername) => (
              <button
                className={`${styles.folderButtons} ${
                  currentFolderId == foldername.id ? styles.active : ''
                }`}
                key={foldername.id}
                onClick={handleOnClick}
                id={foldername.id}
              >
                {foldername.name}
              </button>
            ))}
        </div>
        <button onClick={() => handleModalOpen('addFolder')}>
          <Image
            className={styles.addFolderIcon}
            src={addfolderIcon}
            alt="폴더 추가 아이콘"
          />
        </button>
      </div>
      <div className={S.folderMenuContainer}>
        <p className={styles.folderName}>{activeButton}</p>
        {activeButton === '전체' && (
          <div className={S.imageContainer}>
            <button onClick={() => handleModalOpen('shareFolder')}>
              <Image src={shareicon} alt="폴더 공유 아이콘" />
            </button>
            <button onClick={() => handleModalOpen('renameFolder')}>
              <Image src={changenameicon} alt="폴더 이름 변경 아이콘" />
            </button>
            <button onClick={() => handleModalOpen('deleteFolder')}>
              <Image src={deleteicon} alt="폴더 삭제 아이콘" />
            </button>
          </div>
        )}
      </div>
      <FolderCards url={url} />

      {modalState.addFolder && (
        <ModalFolder
          title={'폴더 추가'}
          folderName={''}
          onClose={() => handleModalClose('addFolder')}
          buttonName={'추가하기'}
          isModalOpen={modalState.addFolder}
        />
      )}
      {modalState.shareFolder && (
        <ModalShare
          title={'폴더 공유'}
          targetName={activeButton}
          onClose={() => handleModalClose('shareFolder')}
          isModalOpen={modalState.shareFolder}
          currentFolderId={currentFolderId}
        />
      )}
      {modalState.renameFolder && (
        <ModalFolder
          title={'폴더 이름 변경'}
          folderName={activeButton}
          onClose={() => handleModalClose('renameFolder')}
          buttonName={'변경하기'}
          isModalOpen={modalState.renameFolder}
        />
      )}
      {modalState.deleteFolder && (
        <ModalDelete
          title={'폴더 삭제'}
          DeleteName={activeButton}
          onClose={() => handleModalClose('deleteFolder')}
          isModalOpen={modalState.deleteFolder}
        />
      )}
    </div>
  );
}

export default Foldermenu;
