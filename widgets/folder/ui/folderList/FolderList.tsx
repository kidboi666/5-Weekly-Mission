import React, { useState } from "react";
import styles from "./folderList.module.css";
import bluePlusIcon from "@/public/img/folder/bluePlus.svg";
import Image from "next/image";
import Modal from "@//shared/ui/modal/linkModal/LinkModal";
import AddFolderModal from "@/features/folder/ui/addFolderModal/AddFolderModal";
import FolderBtn from "@/entities/folder/ui/folderBtn/folder";
import { useFolderState } from "@/shared/model/hooks/useFolderState";
import useGetFolderList from "../../model/useGetFolderList";

const FolderList = () => {
  const { folderList } = useGetFolderList();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { setFolderId, setFolderName } = useFolderState();

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <FolderBtn
          onClick={() => {
            setFolderId(null);
            setFolderName("전체");
          }}
          folder={{ name: "전체", id: 0 }}
        />
        {folderList?.map((folder) => {
          return (
            <FolderBtn
              onClick={() => {
                setFolderId(folder.id);
                setFolderName(folder.name);
              }}
              key={folder.id}
              folder={folder}
            />
          );
        })}
      </div>
      <button
        onClick={() => setIsOpenModal(true)}
        className={styles.addFolderBtn}
      >
        <p>폴더추가</p>
        <Image src={bluePlusIcon} alt="bluePlusIcon" width={16} height={16} />
      </button>
      {isOpenModal && (
        <Modal onClickCloseModal={() => setIsOpenModal(false)}>
          <AddFolderModal />
        </Modal>
      )}
    </div>
  );
};

export default FolderList;
