import React from "react";
import LinksContent from "./LinksContent";
import { Folder } from "@api/useFoldersByUserId";
import { FolderId } from "@components/Folder";
import { LinkData } from "@api/fetchFolderLinksData";

export interface FolderContentProps {
  foldersData: Folder;
  allLinksData: {
    id: number;
    title: string;
    created_at: string;
    url: string;
    description?: string;
    image_source?: string;
  }[];
  activeFolderName: string;
  activeFolderId: FolderId;
}

const FolderContent = ({
  foldersData,
  allLinksData,
  activeFolderName,
  activeFolderId,
}: FolderContentProps) => {
  return (
    <LinksContent
      foldersData={foldersData}
      linksData={allLinksData}
      activeFolderName={activeFolderName}
      activeFolderId={activeFolderId}
    />
  );
};
export default FolderContent;
