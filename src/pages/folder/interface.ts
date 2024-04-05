// folder menu button api
export interface IFolderMenuButton {
  id: number;
  created_at?: string;
  name?: string;
  user_id?: number;
  favorite?: boolean;
  link?: {
    count?: number;
  };
}
export interface IFolderMenuButtonApi {
  data: IFolderMenuButton[];
}

// folder contant api
export interface IFolderContent {
  id: number,
  created_at: string,
  updated_at: string | null,
  url: string,
  title: string | null,
  description: string | null,
  image_source: string | null,
  folder_id: string | null
}
export interface IFolderContentApi {
  data: IFolderContent[];
}