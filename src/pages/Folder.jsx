import Search from "../components/Search/Search";
import { useEffect, useState } from "react";
import AddLinkForm from "../components/AddLinkForm/AddLinkForm";
import { tabDataList, userFoldersData } from "../fetchUtils";
import FolderTabList from "../components/FolderTabList/FolderTabList";
import CardList from "../components/CardList/CardList";
import Modal from "../components/Modal/Modal";
import useModal from "../hooks/useModal";

function Folder() {
  const [folderTabDataList, setFolderTabDataList] = useState([]);
  const [userFolderDataList, setUserFolderDataList] = useState([]);
  const { isOpen, openModal, closeModal } = useModal();

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
      <AddLinkForm />
      <Modal isOpen={isOpen} closeModal={closeModal} type="add" />
      <div className="wrap">
        <Search />
        <FolderTabList
          folderTabDataList={folderTabDataList}
          setUserFolderDataList={setUserFolderDataList}
          openModal={openModal}
        />
        <CardList userFolderDataList={userFolderDataList} />
      </div>
    </div>
  );
}

export default Folder;
