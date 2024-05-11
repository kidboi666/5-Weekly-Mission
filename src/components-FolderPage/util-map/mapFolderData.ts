import {
  EditedSampleLink,
  SampleFolder,
} from "@/common/types/data-access-types";
import { mapLinksData } from "@/components-SharedPage/util-map";

type mapFolderData = (folder: SampleFolder["folder"] | undefined) =>
  | {
      profileImage: string | undefined;
      ownerName: string | undefined;
      folderName: string | undefined;
      links: EditedSampleLink[] | undefined;
    }
  | {};

export const mapFolderData: mapFolderData = (folder) => {
  if (!folder) return {};

  const { name, owner, links } = folder;

  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    folderName: name,
    links: links?.map(mapLinksData) ?? [],
  };
};
