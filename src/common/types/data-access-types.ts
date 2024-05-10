//user
export type User = {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
};

//link
export type Link = {
  id: number;
  created_at: string;
  updated_at: null;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
};

export type Links = {
  data: Link[];
};

//folder
export type Folder = {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
};

export type Folders = {
  data: Folder[];
};

//sample
export type sampleUser = {
  id: number;
  name: string;
  email?: string;
  profileImageSource: string;
};

export type sampleLink = {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
};

export type sampleFolder = {
  folder: {
    id: number;
    name: string;
    owner: sampleUser;
    links: sampleLink[];
  };
};

export type DataTypes =
  | User
  | Link
  | Links
  | Folder
  | Folders
  | sampleUser
  | sampleLink
  | sampleFolder;

//response
export type FolderResponse = {
  data: DataTypes;
  headers: any;
};
