import { useCallback, useEffect } from "react";
import { instance, useAsync, mapLinksData, ALL_LINKS_ID } from "@/src/util";
import { SelectedFolderId, LinkRawData } from "@/src/type";


/**
 * useGetLinks 훅은 주어진 폴더 ID에 따라 링크 데이터를 가져와 매핑된 링크 데이터를 반환합니다.
 *
 * @param {SelectedFolderId} [folderId=ALL_LINKS_ID] - 링크를 가져올 폴더의 ID입니다. 기본값은 모든 링크를 가져오는 "ALL_LINKS_ID"입니다.
 * @returns {Object} 훅의 반환 객체입니다.
 * @returns {() => Promise<void>} return.execute - 링크 데이터를 수동으로 가져오는 함수입니다.
 * @returns {boolean} return.loading - 링크 데이터를 가져오는 요청의 로딩 상태입니다.
 * @returns {any | null} return.error - 링크 데이터를 가져오는 요청 중 발생한 오류입니다.
 * @returns {Array} return.data - 매핑된 링크 데이터 배열입니다.
 * @returns {number} return.data[].id - 링크의 고유 ID입니다.
 * @returns {string} return.data[].createdAt - 링크 생성 일자입니다.
 * @returns {string} return.data[].updatedAt - 링크 업데이트 일자입니다.
 * @returns {string} return.data[].url - 링크 URL입니다.
 * @returns {string} return.data[].imageSource - 링크 이미지 소스입니다.
 * @returns {string} return.data[].title - 링크의 제목입니다.
 * @returns {string} return.data[].description - 링크의 설명입니다.
 * @returns {string} return.data[].elapsedTime - 링크 생성 이후 경과 시간입니다.
 *
 * @example
 * const { execute, loading, error, data } = useGetLinks("folderId");
 *
 * useEffect(() => {
 *   execute();
 * }, [execute]);
 *
 * if (loading) {
 *   return <div>Loading...</div>;
 * }
 *
 * if (error) {
 *   return <div>Error occurred: {error.message}</div>;
 * }
 *
 * return (
 *   <div>
 *     {data.map(link => (
 *       <div key={link.id}>
 *         <h1>{link.title}</h1>
 *         <p>{link.description}</p>
 *         <a href={link.url}>{link.url}</a>
 *       </div>
 *     ))}
 *   </div>
 * );
 */
export const useGetLinks = (folderId: SelectedFolderId = ALL_LINKS_ID) => {
  const queryString = folderId === ALL_LINKS_ID ? "" : `?folderId=${folderId}`;
  const getLinks = useCallback(
    () => instance.get<{ data: LinkRawData[] }>(`users/1/links${queryString}`),
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
    updated_at,
    url,
    image_source,
    title,
    description,
  }: LinkRawData) => ({
    id,
    createdAt: created_at,
    updatedAt: updated_at,
    imageSource: image_source,
    url,
    title,
    description,
  });

  const linksData = data?.data.map(mapDataFormat).map(mapLinksData) ?? [];

  return { execute, loading, error, data: linksData };
};
