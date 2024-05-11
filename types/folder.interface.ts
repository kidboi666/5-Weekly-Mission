import { SampleLinkRawData, Link, FormattedLink } from "./link.interface";

export interface SampleFolderRawData {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: SampleLinkRawData[];
}

export interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface Folder {
  name: string;
  owner: Owner;
  links: Link[];
}

export interface FormattedFolderData {
  folderName?: string;
  ownerName?: string;
  profileImage?: string;
  links: FormattedLink[];
}

export interface FolderInfoProps {
  folderName: string;
  ownerName: string;
  profileImage: string;
}
