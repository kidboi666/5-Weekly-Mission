import { useAsync } from "@/hooks/useAsync";
import { axiosInstance } from "@/utils/axios";
import { mapFolderData } from "@/utils/mapFolderData";
import { SampleFolderRawData } from "@/types/folder.interface";

/**
 * 유저 폴더 정보 불러오기
 *
 * @author yum
 * @date 23.05
 * @param
 * @return { profileImage, ownerName, folderName, links}
 */
export const useGetFolderInfo = () => {
  const getFolderInfo = () =>
    axiosInstance.get<{ folder: SampleFolderRawData }>("sample/folder");
  const { loading, error, data } = useAsync(getFolderInfo);

  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
};
