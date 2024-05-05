import NoPage from "./NoPage";
import useSelectFolder from "../hooks/useSelectFolder";
import CardList from "./CardList";

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

interface UseSelectFolderResult {
  data: Link[];
}

interface CardListSectionProps {
  url: string;
  folders: Folder[];
  searchTerm: string;
}

const CardListSection: React.FC<CardListSectionProps> = ({
  url,
  folders,
  searchTerm,
}) => {
  const result = useSelectFolder<UseSelectFolderResult>({ url });
  const links = result?.data;
  return (
    <>
      {links && links.length === 0 ? (
        <NoPage />
      ) : (
        <CardList folders={folders} links={links} searchTerm={searchTerm} />
      )}
    </>
  );
};

export default CardListSection;
