import { mapLinksData } from 'link/util-map';
import { Folder } from 'sharing/util';

export const mapFolderData = (folder: Folder) => {
  const { name, owner } = folder.folder;
  const { links } = folder;
  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    folderName: name,
    links: links?.map(mapLinksData) ?? [],
  };
};
