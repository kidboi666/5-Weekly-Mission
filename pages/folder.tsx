import Search from "@/src/components/Search/Search";
import { useEffect, useState } from "react";
import AddLinkForm from "@/src/components/AddLinkForm/AddLinkForm";
import { tabDataList, userFoldersData } from "@/src/fetchUtils/index";
import FolderTabList from "@/src/components/FolderTabList/FolderTabList";
import CardList from "@/src/components/CardList/CardList";
import Modal from "@/src/components/Modal/Modal";
import useModal from "@/src/hooks/useModal";
import ModalContext from "@/src/components/Modal/ModalContext";

interface UserFolderdataList {
  id: number;
  createdAt: string;
  description?: string;
  folderId?: number;
  title?: string;
  updatedAt?: string;
  url: string;
  imageSource?: string;
}

function Folder() {
  const [folderTabDataList, setFolderTabDataList] = useState([]);
  const [userFolderDataList, setUserFolderDataList] = useState<UserFolderdataList[]>();

  const { isOpen, openModal, closeModal } = useModal();
  const [modalType, setModalType] = useState("add");
  const [cardUrl, setCardUrl] = useState("");
  const [folderTabName, setFolderTabName] = useState<string | null>("");

  useEffect(() => {
    async function fetchDataAndSetState() {
      const folderTabDataList = await tabDataList();
      const { data } = folderTabDataList;
      setFolderTabDataList(data);
    }
    fetchDataAndSetState();
  }, []);

  useEffect(() => {
    async function fetchDataAndSetState() {
      const userFolderDataList = await userFoldersData();
      const { data } = userFolderDataList;
      setUserFolderDataList(data);
    }
    fetchDataAndSetState();
  }, []);

  return (
    <div className="content-wrap">
      <ModalContext.Provider value={{ isOpen, openModal, closeModal, setModalType, setCardUrl }}>
        <AddLinkForm />
        <Modal
          modalType={modalType}
          folderTabDataList={folderTabDataList}
          cardUrl={cardUrl}
          folderTabName={folderTabName}
        />
        <div className="wrap">
          <Search />
          <FolderTabList
            folderTabDataList={folderTabDataList}
            setUserFolderDataList={setUserFolderDataList}
            setFolderTabName={setFolderTabName}
          />
          <CardList userFolderDataList={userFolderDataList} />
        </div>
      </ModalContext.Provider>
    </div>
  );
}

export default Folder;
