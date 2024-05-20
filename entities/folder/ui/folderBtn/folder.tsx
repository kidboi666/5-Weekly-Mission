import React from "react";
import styles from "./folder.module.css";
import type { Category } from "@/types/category";
import { useFolderState } from "@/shared/model/hooks/useFolderState";

interface FolderBtnProps {
  folder: Category;
  onClick: () => void;
}

const FolderBtn = ({ folder, onClick }: FolderBtnProps) => {
  const { folderId } = useFolderState();
  const isSelected = folderId === folder.id;

  return (
    <button
      onClick={onClick}
      className={isSelected ? styles.select : styles.container}
    >
      {folder.name}
    </button>
  );
};

export default FolderBtn;
