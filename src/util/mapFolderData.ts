import { mapLinksData, DEFAULT_FOLDER_DATA } from "@/src/util";
import { SampleFolderRawData } from "@/src/type";

/**
 * 주어진 폴더 데이터를 매핑하여 폴더 정보 객체를 반환하는 함수입니다.
 * 폴더 데이터가 주어지지 않으면 기본 폴더 데이터를 반환합니다.
 *
 * @param {SampleFolderRawData} [folder] - 매핑할 폴더 데이터입니다.
 * @returns {Object} 매핑된 폴더 정보 객체입니다.
 * @returns {string} return.profileImage - 폴더 소유자의 프로필 이미지 URL입니다.
 * @returns {string} return.ownerName - 폴더 소유자의 이름입니다.
 * @returns {string} return.folderName - 폴더의 이름입니다.
 * @returns {Array} return.links - 폴더에 포함된 링크의 배열입니다.
 *
 * @example
 * const folderData = {
 *   name: "내 폴더",
 *   owner: { profileImageSource: "profile.jpg", name: "홍길동" },
 *   links: [{ url: "https://example.com", description: "Example" }]
 * };
 * const mappedData = mapFolderData(folderData);
 * console.log(mappedData);
 * // {
 * //   profileImage: "profile.jpg",
 * //   ownerName: "홍길동",
 * //   folderName: "내 폴더",
 * //   links: [{ url: "https://example.com", description: "Example" }]
 * // }
 */
export const mapFolderData = (folder?: SampleFolderRawData) => {
  if (!folder) return DEFAULT_FOLDER_DATA;

  const { name, owner, links } = folder;

  return {
    profileImage: owner?.profileImageSource ?? "",
    ownerName: owner?.name ?? "",
    folderName: name ?? "",
    links: links?.map(mapLinksData) ?? [],
  };
};
