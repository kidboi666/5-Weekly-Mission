import { format } from "date-fns/format";
import { getElapsedTime } from "./getElapsedTime";
import { Folder, FormattedFolderData } from "@/types/folder.interface";
import { Link, FormattedLink } from "@/types/link.interface";

/**
 * API로 불러온 유저 폴더 정보 가공
 * * 7주차 템플릿 코드 사용
 *
 * @author yum
 * @date 23.05
 * @param folder 유저 폴더 정보
 * @returns { profileImage, ownerName, folderName, links } 가공된 유저 폴더 정보
 */
export const mapFolderData = (
  folder: Folder | undefined
): FormattedFolderData | [] => {
  if (!folder) return [];

  const { name, owner, links } = folder;

  const mapLinks = (link: Link): FormattedLink => {
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
    profileImage: owner.profileImageSource,
    ownerName: owner.name,
    folderName: name,
    links: links.map(mapLinks),
  };
};
