import styles from "@/src/components/CardList/CardList.module.css";
import Image from "next/image";
import Card from "../Card/Card";

interface CardListData {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}

interface UserFolderCardDataList {
  data: {
    id: number;
    createdAt: string;
    description?: string;
    folderId?: number;
    title?: string;
    updatedAt?: string;
    url: string;
    imageSource?: string;
  };
}

function renderCardList(cardData: CardListData[] | UserFolderCardDataList["data"][]) {
  return (
    <ul className={styles.cardList}>
      {Array.isArray(cardData) &&
        cardData.map((card) => {
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
  userFolderDataList?: UserFolderCardDataList;
}) {
  return (
    <>
      {cardListData && cardListData.length > 0 && renderCardList(cardListData)}
      {userFolderDataList &&
        Array.isArray(userFolderDataList.data) &&
        userFolderDataList.data.length > 0 &&
        renderCardList(userFolderDataList.data)}
      {!cardListData && !userFolderDataList && (
        <div className={styles.emptyLink}>저장된 링크가 없습니다.</div>
      )}
    </>
  );
}

export default CardList;
