import { useCallback, useEffect } from "react";
import { axiosInstance } from "@/common/util";
import { mapLinksData } from "@/components-SharedPage/util-map/mapLinksData";
import { useAsync } from "@/common/util";
import { ALL_LINKS_ID } from "./constant";
import {
  SampleLink,
  Response,
  Link,
  Links,
} from "@/common/types/data-access-types";
import { AxiosResponse } from "axios";

type mapDataFormat = ({
  id,
  created_at,
  url,
  image_source,
  title,
  description,
}: Link) => SampleLink;

export const useGetLinks = (folderId = ALL_LINKS_ID) => {
  const queryString = folderId === ALL_LINKS_ID ? "" : `?folderId=${folderId}`;
  const getLinks: () => Promise<AxiosResponse<Response, any>> = useCallback(
    () => axiosInstance.get(`users/1/links${queryString}`),
    [queryString]
  );
  const { execute, loading, error, data } = useAsync(getLinks);

  useEffect(() => {
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderId]);

  const mapDataFormat: mapDataFormat = ({
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

  const linksData = data as Links;

  const links = linksData?.data.map(mapDataFormat).map(mapLinksData) ?? [];

  return { execute, loading, error, data: links };
};
