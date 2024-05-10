import styles from "@/src/components/CardList/CardList.module.css";
import Card from "../Card/Card";
import { useRouter } from "next/router";

interface CardListData {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}

interface UserFolderCardData {
  id: number;
  createdAt: string;
  description?: string;
  folderId?: number;
  title?: string;
  updatedAt?: string;
  url: string;
  imageSource?: string;
}

function renderCardList(cardData: CardListData[] | UserFolderCardData[]) {
  return (
    <ul className={styles.cardList}>
      {cardData.map((card) => {
        return <Card card={card} key={card.id} />;
      })}
    </ul>
  );
}

function CardList({
  cardListData,
  userFolderDataList,
}: {
  cardListData?: CardListData[];
  userFolderDataList?: UserFolderCardData[];
}) {
  const router = useRouter();
  const isFolder = router.pathname === "/folder";

  return (
    <>
      {cardListData && !isFolder && renderCardList(cardListData)}
      {userFolderDataList && isFolder && renderCardList(userFolderDataList)}
      {!cardListData && !userFolderDataList && (
        <div className={styles.emptyLink}>저장된 링크가 없습니다.</div>
      )}
    </>
  );
}

export default CardList;
