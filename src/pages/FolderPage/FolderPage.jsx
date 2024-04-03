import AddLinkBar from '../../components/AddLinkBar/AddLinkBar';

import LinkCardList from '../../components/LinkCardList/LinkCardList';
import { folders, links } from '../../utils/mockData';

export default function FolderPage() {
  return (
    <>
      <AddLinkBar />
      <LinkCardList folders={folders} items={links} />
    </>
  );
}
