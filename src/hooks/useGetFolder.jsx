import { useState, useEffect } from "react";
import { getRequest } from "../api";

export const useGetFolder = () => {
  const [folderData, setFolderData] = useState({ owner: null, name: "", links: [] });

  useEffect(() => {
    (async function () {
      const { folder } = await getRequest("api/sample/folder", null);
      setFolderData((prev) => {
        return {
          owner: folder.owner,
          name: folder.name,
          links: folder.links,
        };
      });
    })();
  }, []);

  return [folderData];
};
