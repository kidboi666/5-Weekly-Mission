import { useCallback, useEffect } from 'react';
import { axiosInstance } from 'sharing/util';
import { mapLinksData } from 'link/util-map/mapLinksData';
import { useAsync } from 'sharing/util';
import { ALL_LINKS_ID } from './constant';
import { Link } from 'sharing/util';

export const useGetLinks = (folderId = ALL_LINKS_ID) => {
  const queryString = folderId === ALL_LINKS_ID ? '' : `?folderId=${folderId}`;
  const getLinks = useCallback(
    () => axiosInstance.get(`users/1/links${queryString}`),
    [queryString]
  );
  const { execute, loading, error, data } = useAsync<Link[]>(getLinks);

  useEffect(() => {
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderId]);

  const mapDataFormat = ({
    id,
    createdAt,
    url,
    imageSource,
    title,
    description,
  }: Link) => ({
    id,
    createdAt: createdAt,
    imageSource: imageSource,
    url,
    title,
    description,
  });
  if (data) {
    const linksData = data.map(mapDataFormat).map(mapLinksData) ?? [];

    return { execute, loading, error, data: linksData };
  }
};
