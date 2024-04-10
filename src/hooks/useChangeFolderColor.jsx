import { useEffect } from "react";

export const useChangeFolderColor = (currentFolderId, folderId, setIsSelected) => {
  useEffect(() => {
    currentFolderId === folderId ? setIsSelected(true) : setIsSelected(false);
  }, [currentFolderId, folderId, setIsSelected]);
};
