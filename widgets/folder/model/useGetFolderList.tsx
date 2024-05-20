import { Category } from "@/types/category";
import apiInstance from "@//shared/model/api/axios";
import { useEffect, useState } from "react";

const useGetFolderList = () => {
  const [folderList, setFolderList] = useState<Category[]>();

  const getFolderList = async () => {
    const res = await apiInstance.get("/users/1/folders");
    const folderList = res.data.data;
    setFolderList(folderList);
  };

  useEffect(() => {
    getFolderList();
  }, []);

  return { folderList };
};

export default useGetFolderList;
