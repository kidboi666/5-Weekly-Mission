import "./CardList.css";
import CardListItem from "./CardListItem";

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
    count: number; // 링크의 수
  };
  name: string;
  user_id: number;
}

interface CardListProps {
  links: Link[];
  folders: Folder[];
}

const CardList: React.FC<CardListProps> = ({ links, folders }) => {
  return (
    <ul className="CardLinkList">
      {links &&
        links.map((link) => (
          <li key={link.id}>
            <CardListItem folders={folders} link={link} />
          </li>
        ))}
    </ul>
  );
};

export default CardList;
