import { useAsync, instance } from "@/src/util";
import { UserRawData } from "@/src/type";


/**
 * useGetUser 훅은 사용자 데이터를 가져와 반환합니다.
 *
 * @returns 훅의 반환 객체입니다.
 * @returns return.loading - 사용자 데이터를 가져오는 요청의 로딩 상태입니다.
 * @returns return.error - 사용자 데이터를 가져오는 요청 중 발생한 오류입니다.
 * @returns return.data - 가져온 사용자 데이터입니다.
 *
 * @example
 * const { loading, error, data } = useGetUser();
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
 *     <h1>{data.name}</h1>
 *     <p>{data.email}</p>
 *   </div>
 * );
 */
export const useGetUser = () => {
  const getUser = () => instance.get<{ data: UserRawData }>("sample/user");
  const { loading, error, data } = useAsync(getUser);
  return { loading, error, data: data?.data ?? null };
};
