import styles from "@/src/components/ConHeader/ConHeader.module.css";
import Image from "next/image";

interface FolderData {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: {
    id: number;
    createdAt: string;
    url: string;
    title: string;
    description: string;
    imageSource?: string;
  }[];
  count: number;
}

function ConHeader({ folderData }: { folderData: FolderData | null }) {
  const owner = folderData?.owner;

  return (
    <div className={styles.conHeaderWrap}>
      <div className={styles.conHeader}>
        <Image width={60} height={60} src={owner?.profileImageSource || ""} alt="" />
        <h3 className={styles.h3}>{owner?.name}</h3>
      </div>
      <h2 className={styles.h2}>{folderData?.name}</h2>
    </div>
  );
}

export default ConHeader;
