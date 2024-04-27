import { useState, useEffect } from "react";

const useFolderId = (folderData) => {
  const [selcetedFolderId, setSelectedFolderId] = useState([]);

  useEffect(() => {
    if (folderData && folderData.length > 0) {
      const selectedFolder = folderData.find((folder) => folder.selected);
      if (selectedFolder) {
        setSelectedFolderId(selectedFolder.id);
      }
    }
  }, [folderData]);

  return setSelectedFolderId;
};

export default useFolderId;
