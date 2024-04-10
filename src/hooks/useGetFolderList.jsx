import { useState, useEffect } from "react";
import { getRequest } from "../api";

export const useGetFolderList = () => {
  const [folderList, setFolderList] = useState([{ id: "", name: "전체" }]);

  useEffect(() => {
    (async function () {
      const { data } = await getRequest("api/users/1/folders", null);

      setFolderList((prev) => {
        return [...prev, ...data];
      });
    })();
  }, []);

  return [folderList];
};
