import { useCallback, useEffect } from "react";
import { ALL_LINKS_ID } from "./constant";
import { axiosInstance } from "../utill/axiosInstance";
import { useAsync } from "../hooks/useAsync";
import { mapLinkListData } from "../utill/mapLinkListData";

export const useGetLinkList = (folderId = ALL_LINKS_ID, userId) => {
  const queryString = folderId === ALL_LINKS_ID ? "" : `?folderId=${folderId}`;
  const getLinkList = useCallback(
    () => axiosInstance.get(`users/${userId}/links${queryString}`),
    [userId, queryString]
  );
  const { asyncData, error, data } = useAsync(getLinkList);

  useEffect(() => {
    asyncData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderId]);

  const mapDataFormat = ({
    id,
    created_at,
    url,
    image_source,
    title,
    description,
  }) => ({
    id,
    createdAt: created_at,
    imageSource: image_source,
    url,
    title,
    description,
  });

  const linkListData = data?.data.map(mapDataFormat).map(mapLinkListData) ?? [];

  return { asyncData, error, data: linkListData };
};
