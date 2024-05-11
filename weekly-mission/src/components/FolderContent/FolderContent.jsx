import LinksContent from "./LinksContent";

const FolderContent = ({
  foldersData,
  allLinksData,
  activeFolderName,
  activeFolderId,
}) => {
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
