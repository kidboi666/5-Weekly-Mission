import { format } from "date-fns";
import { getElapsedTime } from "@/common/util";
import { SampleLink, EditedSampleLink } from "@/common/types/data-access-types";

type mapLinksData = ({
  id,
  createdAt,
  imageSource,
  url,
  title,
  description,
}: SampleLink) => EditedSampleLink;

export const mapLinksData: mapLinksData = (link) => {
  const { id, createdAt, url, imageSource, title, description } = link;

  return {
    id,
    createdAt: format(new Date(createdAt), "yyyy. MM. dd"),
    url,
    description,
    imageSource,
    alt: `${title ?? url}의 대표 이미지`,
    elapsedTime: getElapsedTime(createdAt),
  };
};
