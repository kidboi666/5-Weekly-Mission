import CategoryHandle from "@/features/folder/ui/folderHandle/CategoryHandle";
import React, { Dispatch, SetStateAction } from "react";
import styles from "./folderOption.module.css";

import shareIcon from "@/public/img/folder/share.svg";
import editIcon from "@/public/img/folder/edit.svg";
import deleteIcon from "@/public/img/folder/delete.svg";
import { onClickFolder } from "@/features/folder/model/onClickFolder";

interface FolderOptionProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setModalType: Dispatch<SetStateAction<string>>;
}

const FolderOption = ({ setIsModalOpen, setModalType }: FolderOptionProps) => {
  return (
    <div className={styles.optionBtn}>
      <CategoryHandle
        src={shareIcon}
        text="공유"
        onClick={() => {
          onClickFolder(setIsModalOpen, setModalType, "share");
        }}
      />
      <CategoryHandle
        src={editIcon}
        text="수정"
        onClick={() => onClickFolder(setIsModalOpen, setModalType, "edit")}
      />
      <CategoryHandle
        src={deleteIcon}
        text="삭제"
        onClick={() => {
          onClickFolder(setIsModalOpen, setModalType, "delete");
        }}
      />
    </div>
  );
};

export default FolderOption;
