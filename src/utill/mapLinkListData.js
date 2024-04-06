import format from "date-fns/format";
import { getElapsedTime } from "./getElapsedTime";

/**
 * API로 불러온 폴더 링크 리스트 가공
 * * 8주차 템플릿 코드 사용
 *
 * @author yum
 * @date 23.04
 * @param date
 * @return
 */
export const mapLinkListData = (link) => {
  const { id, createdAt, url, imageSource, title, description } = link;

  return {
    id,
    url,
    imageSource,
    alt: `${title ?? url}의 대표 이미지`,
    elapsedTime: getElapsedTime(createdAt),
    description,
    createdAt: format(new Date(createdAt), "yyyy. MM. dd"),
  };
};
