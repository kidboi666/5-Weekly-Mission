import Search from "../components/Search/Search";
import { useEffect, useState } from "react";
import AddLinkForm from "../components/AddLinkForm/AddLinkForm";
import { tabDataList, userFoldersData } from "../fetchUtils";
import FolderTabList from "../components/FolderTabList/FolderTabList";
import CardList from "../components/CardList/CardList";
import Modal from "../components/Modal/Modal";
import useModal from "../hooks/useModal";
import ModalContext from "../components/Modal/ModalContext";

function Folder() {
  const [folderTabDataList, setFolderTabDataList] = useState([]);
  const [userFolderDataList, setUserFolderDataList] = useState([]);
  const { isOpen, openModal, closeModal } = useModal();
  const [modalType, setModalType] = useState("add");

  useEffect(() => {
    async function fetchDataAndSetState() {
      const folderTabDataList = await tabDataList();
      const userFolderDataList = await userFoldersData();
      const { data } = folderTabDataList;
      setFolderTabDataList(data);
      setUserFolderDataList(userFolderDataList);
    }
    fetchDataAndSetState();
  }, []);

  return (
    <div className="content-wrap">
      <ModalContext.Provider value={{ isOpen, openModal, closeModal, setModalType }}>
        <AddLinkForm />
        <Modal
          modalType={modalType}
          folderTabDataList={folderTabDataList}
          userFolderDataList={userFolderDataList}
        />
        <div className="wrap">
          <Search />
          <FolderTabList
            folderTabDataList={folderTabDataList}
            setUserFolderDataList={setUserFolderDataList}
          />
          <CardList userFolderDataList={userFolderDataList} />
        </div>
      </ModalContext.Provider>
    </div>
  );
}

export default Folder;
