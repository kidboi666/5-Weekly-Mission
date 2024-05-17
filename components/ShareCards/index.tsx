import { useFetch } from '@/hooks/useFetch';
import { formatDate, generateTimeText } from '@/utils/date';
import styles from '@/components/ShareCards/index.module.css';
import Image from 'next/image';
import { SyntheticEvent, useState } from 'react';
import thumbnail from '@/public/thumbnail.svg';
import Link from 'next/link';

export interface CardData {
  id: string;
  url: string;
  imageSource?: string;
  title: string;
  createdAt: Date;
  description: string;
}

interface FolderData {
  folder: {
    links: CardData[];
  };
}

function ShareCards({ url }: { url: string }) {
  const Card = useFetch<FolderData>(url);
  const CardDatas = Card?.folder.links;
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className={styles.card_grid_container}>
      {!CardDatas ? (
        <div className={styles.noLinkText}>저장된 링크가 없습니다</div>
      ) : (
        CardDatas.map((CardData: CardData) => (
          <Link href={CardData.url} key={CardData.id}>
            <div className={styles.card}>
              <div className={styles.card_img_div}>
                <Image
                  width="320"
                  height="200"
                  src={
                    imageErrors[CardData.id]
                      ? thumbnail
                      : CardData.imageSource || thumbnail
                  }
                  className={styles.card_img}
                  alt={CardData.imageSource ? CardData.title : '썸네일'}
                  onError={() => handleImageError(CardData.id)}
                />
              </div>
              <div className={styles.card_txt_div}>
                <div className={styles.card_txt_div_top}>
                  <p className={styles.left_time_p}>
                    {generateTimeText(CardData.createdAt)}
                  </p>
                </div>
                <div className={styles.card_txt_div_body}>
                  <p className={styles.card_txt_div_body}>
                    {CardData.description}
                  </p>
                </div>
                <div className={styles.card_txt_date}>
                  {formatDate(CardData.createdAt)}
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default ShareCards;
