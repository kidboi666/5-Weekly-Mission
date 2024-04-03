import AddLinkBar from '../../components/AddLinkBar/AddLinkBar';

import LinkCardList from '../../components/LinkCardList/LinkCardList';
import { folders, links } from '../../utils/mockData';
import { useState } from 'react';

export default function FolderPage() {
  const [currentFolder, setCurrentFolder] = useState(null);

  const handleFolderNameButtonClick = (folderName) => {
    setCurrentFolder(folderName);
  };

  return (
    <>
      <AddLinkBar />
      <LinkCardList
        folders={folders}
        items={links}
        folderNameOnClick={handleFolderNameButtonClick}
      />
    </>
  );
}
