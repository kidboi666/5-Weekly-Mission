import styles from "./CardList.module.css";
import CardListItem from "./CardListItem";
import NoPage from "./NoPage";

interface Link {
  created_at: string;
  description: string;
  folder_id: number;
  id: number;
  image_source: string;
  title: string;
  updated_at: number | null;
  url: string;
  [key: string]: any;
}

interface Folder {
  created_at: string;
  favorite: boolean;
  id: number;
  link: {
    count: number;
  };
  name: string;
  user_id: number;
}

interface CardListProps {
  links: Link[];
  folders: Folder[];
  searchTerm: string;
}

const CardList: React.FC<CardListProps> = ({ links, folders, searchTerm }) => {
  if (!links) return;
  const filteredFolders = links.filter((link) => {
    return (
      link.title?.includes(searchTerm) ||
      link.url?.includes(searchTerm) ||
      link.description?.includes(searchTerm)
    );
  });

  return (
    <>
      {filteredFolders.length === 0 ? (
        <NoPage text="검색 결과가 없습니다." />
      ) : (
        <ul className="CardLinkList">
          {filteredFolders.map((link) => (
            <li key={link.id}>
              <CardListItem folders={folders} link={link} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CardList;
