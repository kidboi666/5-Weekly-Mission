import AddLinkBar from '../../components/AddLinkBar/AddLinkBar';

import LinkCardList from '../../components/LinkCardList/LinkCardList';
import { folders, links } from '../../utils/mockData';
import { useState } from 'react';

const allFolder = {
  'id': 0,
  'name': '전체',
  'user_id': 1,
};

const newFolders = [allFolder, ...folders];

export default function FolderPage() {
  const [currentFolderId, setCurrentFolderId] = useState(newFolders[0].id);

  const handleFolderNameButtonClick = (id) => {
    setCurrentFolderId(id);
  };

  return (
    <>
      <AddLinkBar />
      <LinkCardList
        folders={newFolders}
        items={links}
        folderNameOnClick={handleFolderNameButtonClick}
        currentFolderId={currentFolderId}
      />
    </>
  );
}
