// user login info
export interface IHeaderUserLoginInfoApi {
  email:string,
  id:string,
  name?:string,
  profileImageSource?:string,
}
// folder page bookmark api
export interface IFolderMenuButtonApi {
  id: number;
  created_at?: string;
  name?: string;
  user_id?: number;
  favorite?: boolean;
  link?: {
    count?: number;
  };
}
export interface IFolderMenuButtonWrapApi {
  data: IFolderMenuButtonApi[];
}

export interface IFolderListApi {
  id:string,
  image_url:string,
  description?:string,
  created_at?:string,
}