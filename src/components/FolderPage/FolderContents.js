import CardList from '../CardList';

function FolderContents({ items }) {
  return <CardList items={items?.data} />;
}

export default FolderContents;
