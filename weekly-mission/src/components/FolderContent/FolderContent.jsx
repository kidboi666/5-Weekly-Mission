import LinksContent from "./LinksContent";

const FolderContent = ({ allLinksData, activeFolderName, activeFolderId }) => {
  return (
    <LinksContent
      linksData={allLinksData}
      activeFolderName={activeFolderName}
      activeFolderId={activeFolderId}
    />
  );
};

export default FolderContent;
