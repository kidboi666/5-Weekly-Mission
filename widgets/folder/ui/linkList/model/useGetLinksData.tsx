import { Link } from "@/types/link";
import { useFolderState } from "../../../../../shared/model/hooks/useFolderState";
import apiInstance from "../../../../../shared/model/api/axios";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

const useGetLinksData = () => {
  const [linkDataList, setLinkDataList] = useState<Link[]>();
  const [error, setError] = useState();
  const { folderId } = useFolderState();

  const getLinksData = async (folderId: number) => {
    try {
      let url = "/users/1/links";

      if (folderId === 0) {
        url = "/users/1/links";
      } else {
        url = `/users/1/links?folderId=${folderId}`;
      }

      const res = await apiInstance.get(url);
      const linkList = res.data.data;

      setLinkDataList(linkList);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err.response?.data.details || err.message);
      }
    }
  };

  useEffect(() => {
    getLinksData(folderId);
  }, [folderId]);

  return { linkDataList, error };
};

export default useGetLinksData;
