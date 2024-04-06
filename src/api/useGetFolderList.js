import { useAsync } from "../hooks/useAsync";
import { axiosInstance } from "../utill/axiosInstance";

/**
 * 유저 폴더 목록 불러오기
 *
 * @author yum
 * @date 23.04
 * @param
 * @return { profileImage, ownerName, folderName, links}
 */
export const useGetFolderList = (userId) => {
  const getFolderList = () => axiosInstance.get(`users/${userId}/folders`);
  const { error, data } = useAsync(getFolderList);

  const folderList = data?.data ?? [];
  const sortedFolderList = folderList.sort((a, b) => a?.id - b?.id);

  return { error, data: sortedFolderList };
};
