import { useState, useEffect } from "react";
import { getRequest } from "../api";

export const useGetLinks = (userId, folderId) => {
  const [linkList, setLinkList] = useState([]);

  useEffect(() => {
    (async function () {
      let res;
      if (folderId) res = await getRequest(`api/users/${userId}/links?folderId=${folderId}`);
      else res = await getRequest(`api/users/${userId}/links`);

      setLinkList(() => {
        return [...res.data];
      });
    })();
  }, [folderId, userId]);

  return [linkList];
};
