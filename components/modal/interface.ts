import { IFolderMenuButtonApi } from "../../pages/folder/interface";

export interface IModalData {
  data: any;
}
export interface IModal {
  $title: string;
  $titleDescText?: string | null;
  $body?: string | null;
  $buttonStyle?: string | null;
  $buttonText?: string | null;
  $modalData?: IModalData | null | IFolderMenuButtonApi;
}
