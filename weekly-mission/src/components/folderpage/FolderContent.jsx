import LinksContent from "../folderpage/LinksContent";

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
