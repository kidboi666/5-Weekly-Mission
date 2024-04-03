import AddLinkBar from '../../components/AddLinkBar/AddLinkBar';
import FolderToolBar from '../../components/FolderToolBar/FolderToolBar';
import LinkCardList from '../../components/LinkCardList/LinkCardList';
import { folders } from '../../utils/mockData';

export default function FolderPage() {
  return (
    <>
      <AddLinkBar />
      <FolderToolBar folder={folders} currentFolder={'전체'} />
    </>
  );
}
