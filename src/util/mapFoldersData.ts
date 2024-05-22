import { Folder, FolderRawData } from "@/src/type";

/**
 * 주어진 폴더 데이터 배열을 매핑하여 폴더 정보 객체 배열을 반환하는 함수입니다.
 * 폴더 데이터가 주어지지 않으면 빈 배열을 반환합니다.
 *
 * @param {FolderRawData[]} [folders] - 매핑할 폴더 데이터 배열입니다.
 * @returns {Folder[]} 매핑된 폴더 정보 객체 배열입니다.
 *
 * @example
 * const foldersData = [
 *   {
 *     id: 1,
 *     created_at: "2022-01-01T00:00:00Z",
 *     name: "내 폴더",
 *     user_id: 123,
 *     link: { count: 10 }
 *   }
 * ];
 * const mappedData = mapFoldersData(foldersData);
 * console.log(mappedData);
 * // [
 * //   {
 * //     id: 1,
 * //     createdAt: "2022-01-01T00:00:00Z",
 * //     name: "내 폴더",
 * //     userId: 123,
 * //     linkCount: 10
 * //   }
 * // ]
 */
export const mapFoldersData = (folders?: FolderRawData[]): Folder[] => {
  if (!folders) return [];

  return folders.map((folder) => {
    const { id, created_at, name, user_id, link } = folder;

    return {
      id,
      createdAt: created_at,
      name,
      userId: user_id,
      linkCount: link.count,
    };
  });
};
