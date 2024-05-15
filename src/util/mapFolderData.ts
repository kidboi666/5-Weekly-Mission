import { mapLinksData, DEFAULT_FOLDER_DATA } from "@/src/util";
import { SampleFolderRawData } from "@/src/type";

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
