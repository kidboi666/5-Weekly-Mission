interface FolderTabDataList {
  id: number;
  createdAt: string;
  favorite: boolean;
  link: Pick<FolderData, "count">;
  name: string;
  userId: number;
}

interface UserFolderdataList {
  id: number;
  createdAt: string;
  description?: string;
  folderId?: number;
  title?: string;
  updatedAt?: string;
  url: string;
  imageSource?: string;
}

interface FolderTabListInterface {
  folderTabDataList: FolderTabDataList[];
  forderDataId: number;
  setUserFolderDataList: (data: UserFolderdataList[]) => void;
  setFolderTabName: (name: string | null) => void;
  setForderDataId: (id: number) => void;
}

interface FolderData {
  id: number;
  name: string;
  owner: FolderDataOwner;
  links: FolderLinks[];
  count: number;
}

interface FolderDataOwner {
  id: number;
  name: string;
  profileImageSource: string;
}

interface FolderLinks {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}
