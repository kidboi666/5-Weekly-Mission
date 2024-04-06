import format from "date-fns/format";
import { getElapsedTime } from "./getElapsedTime";

/**
 * API로 불러온 유저폴더정보 가공
 * * 7주차 템플릿 코드 사용
 *
 * @study
 * * date-fns를 사용 한 이유 : moment.js와 비교하여 크기가 작고 모듈화가 잘 되어있음. 일반적으로 최신 프로젝트에서는 moment.js보다는 date-fns/format을 사용하는 것이 좋다고 함
 * * "?." 옵셔널 체이닝이란 : 객체의 중첩된 속성에 대한 접근 시, 중간에 속성이 없는 경우에도 오류를 방지하기 위해 사용됨
 *
 * @author yum
 * @date 23.04
 * @param date
 * @return
 */
export const mapFolderData = (folder) => {
  if (!folder) return [];
  const { name, owner, links } = folder;

  const mapLinks = (link) => {
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

  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    folderName: name,
    links: links?.map(mapLinks) ?? [],
  };
};
