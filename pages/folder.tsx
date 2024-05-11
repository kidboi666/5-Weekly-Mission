import Search from "@/src/components/Search/Search";
import React, { useEffect, useState } from "react";
import AddLinkForm from "@/src/components/AddLinkForm/AddLinkForm";
import { tabDataList, userFoldersData } from "@/src/fetchUtils/index";
import FolderTabList from "@/src/components/FolderTabList/FolderTabList";
import CardList from "@/src/components/CardList/CardList";
import useModal from "@/src/hooks/useModal";
import ModalContext from "@/src/components/Modal/ModalContext";
import ModalContainer from "@/src/components/Modal/ModalContainer";

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
  const [searchInputValue, setSearchInputValue] = useState<string>("");

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

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  return (
    <div className="content-wrap">
      <ModalContext.Provider value={{ isOpen, openModal, closeModal, setModalType, setCardUrl }}>
        <AddLinkForm />
        <ModalContainer
          modalType={modalType}
          folderTabDataList={folderTabDataList}
          cardUrl={cardUrl}
          folderTabName={folderTabName}
        />
        <div className="wrap">
          <Search searchInputValue={searchInputValue} onChangeValue={onChangeValue} />
          <FolderTabList
            folderTabDataList={folderTabDataList}
            setUserFolderDataList={setUserFolderDataList}
            setFolderTabName={setFolderTabName}
          />
          <CardList userFolderDataList={userFolderDataList} searchInputValue={searchInputValue} />
        </div>
      </ModalContext.Provider>
    </div>
  );
}

export default Folder;
