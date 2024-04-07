import { useCallback, useEffect } from "react";
import { axiosInstance } from "Folder_and_Shared/util/axiosInstance";
import { useAsync } from "Folder_and_Shared/util/useAsync";
import { mapLinksData } from "Folder_and_Shared/util/mapLinksData";

const ALL_LINKS_ID = "all";

export const useGetLinks = (folderId = ALL_LINKS_ID) => {
  const queryString = folderId === ALL_LINKS_ID ? "" : `?folderId=${folderId}`;
  const getLinks = useCallback(
    () => axiosInstance.get(`users/1/links${queryString}`),
    [queryString]
  );
  const { execute, loading, error, data } = useAsync(getLinks);

  useEffect(() => {
    execute();
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

  const linksData = data?.data.map(mapDataFormat).map(mapLinksData) ?? [];

  return { execute, loading, error, data: linksData };
};
