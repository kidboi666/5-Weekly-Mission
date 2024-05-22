import styles from "./FolderMenu.module.css";

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

interface FolderListProp {
  folders: Folder[];
  title: string;
  handleTitle: (title: string, id: number | null) => void;
}

const FolderMenu: React.FC<FolderListProp> = ({
  title,
  folders,
  handleTitle,
}) => {
  return (
    <div className={styles.folderLinkList__folders}>
      <button
        className={
          "전체" === title
            ? styles.folderLinkList__folder__active
            : styles.folderLinkList__folder
        }
        id="0"
        onClick={() => handleTitle("전체", null)}
      >
        전체
      </button>
      {folders.map((folder) => (
        <button
          className={
            folder.name === title
              ? styles.folderLinkList__folder__active
              : styles.folderLinkList__folder
          }
          id={folder.id?.toString()}
          key={folder.id}
          onClick={() => {
            handleTitle(folder.name, folder.id);
          }}
        >
          {folder.name}
        </button>
      ))}
    </div>
  );
};

export default FolderMenu;
