import { format } from "date-fns";
import { getElapsedTime } from "@/src/util";

/**
 * 주어진 링크 데이터를 매핑하여 링크 정보 객체를 반환하는 함수입니다.
 *
 * @param {LinkRawData} link - 매핑할 링크 데이터입니다.
 * @returns {Link} 매핑된 링크 정보 객체입니다.
 *
 * @example
 * const linkData = {
 *   id: 1,
 *   createdAt: "2022-01-01T00:00:00Z",
 *   imageSource: "image.jpg",
 *   url: "https://example.com",
 *   title: "Example",
 *   description: "This is an example."
 * };
 * const mappedData = mapLinksData(linkData);
 * console.log(mappedData);
 * // {
 * //   id: 1,
 * //   title: "Example",
 * //   url: "https://example.com",
 * //   imageSource: "image.jpg",
 * //   alt: "Example의 대표 이미지",
 * //   elapsedTime: "1 year ago",
 * //   description: "This is an example.",
 * //   createdAt: "2022. 01. 01"
 * // }
 */
export const mapLinksData = (link: {
  id: number;
  createdAt: string;
  imageSource: string;
  url: string;
  title: string;
  description: string;
}) => {
  const { id, createdAt, url, imageSource, title, description } = link;

  return {
    id,
    title,
    url,
    imageSource,
    alt: `${title ?? url}의 대표 이미지`,
    elapsedTime: getElapsedTime(createdAt),
    description,
    createdAt: format(new Date(createdAt), "yyyy. MM. dd"),
  };
};
