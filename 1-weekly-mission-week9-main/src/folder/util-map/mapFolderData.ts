import { mapLinksData } from 'link/util-map';

interface FolderData {
  folder: {
    id: number;
    name: string;
    owner: {
      id: number;
      name: string;
      profileImageSource: string;
    };
  };
  links: {
    id: number;
    createdAt: string;
    url: string;
    title: string;
    description: string;
    imageSource: string;
  }[];
  count: number;
}

export const mapFolderData = (folder: FolderData) => {
  const { name, owner } = folder.folder;
  const { links } = folder;
  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    folderName: name,
    links: links?.map(mapLinksData) ?? [],
  };
};
