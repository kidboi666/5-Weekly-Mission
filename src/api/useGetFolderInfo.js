import { useAsync } from "../hooks/useAsync";
import { axiosInstance } from "../utill/axiosInstance";
import { mapFolderData } from "../utill/mapFolderData";

/**
 * 유저 폴더 정보 불러오기
 *
 * @author yum
 * @date 23.04
 * @param
 * @return { profileImage, ownerName, folderName, links}
 */
export const useGetFolderInfo = () => {
  const getFolderInfo = () => axiosInstance.get("sample/folder");
  const { error, data } = useAsync(getFolderInfo);

  const folderData = mapFolderData(data?.folder);

  return { error, data: folderData };
};
