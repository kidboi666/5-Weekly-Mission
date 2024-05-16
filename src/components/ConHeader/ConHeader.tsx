import styles from "@/src/components/ConHeader/ConHeader.module.css";
import Image from "next/image";

interface FolderData {
  id: number;
  name: string;
  owner: FolderDataOwner;
  links: folderLinks[];
  count: number;
}
interface FolderDataOwner {
  id: number;
  name: string;
  profileImageSource: string;
}
interface folderLinks {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}

function ConHeader({ folderData }: { folderData: FolderData | null }) {
  const owner = folderData?.owner;

  return (
    <div className={styles.conHeaderWrap}>
      <div className={styles.conHeader}>
        {owner?.profileImageSource && (
          <Image width={60} height={60} src={owner.profileImageSource} alt={owner.name} />
        )}
        <h3 className={styles.h3}>{owner?.name}</h3>
      </div>
      <h2 className={styles.h2}>{folderData?.name}</h2>
    </div>
  );
}

export default ConHeader;
