import React from "react";
import "./ConHeader.css";

interface FolderData {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: {
    id: number;
    createdAt: string;
    url: string;
    title: string;
    description: string;
    imageSource?: string;
  }[];
  count: number;
}

function ConHeader({ folderData }: { folderData: FolderData | null }) {
  const owner = folderData?.owner;

  return (
    <div className="con-header-wrap">
      <div className="con-header">
        <img src={owner?.profileImageSource} alt="" />
        <h3>{owner?.name}</h3>
      </div>
      <h2>{folderData?.name}</h2>
    </div>
  );
}

export default ConHeader;
