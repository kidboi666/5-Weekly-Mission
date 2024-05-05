import React from "react";
import LinksContent from "./LinksContent";
import { Folder } from "../../hooks/useFoldersByUserId";
import { FolderId } from "../Folder/Folder";
import { LinkData } from "../../services/fetchFolderLinksData";

export interface FolderContentProps {
  foldersData: Folder[];
  allLinksData: LinkData[];
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
