import { useEffect, useRef, useState } from 'react';
import { changeDate, calculateDate } from '../../util/util';
import * as S from './Card.styled';
import KebabMenu from '../KebabMenu/KebabMenu';
import { LinkData } from '../../hooks/useGetFolder';
import Image from 'next/image';
import Link from 'next/link';
import { Folders } from '@/hooks/useGetFolderList';

function Card({ item, list }: { item: LinkData; list: Folders }) {
  const [createdAt, setCreatedAt] = useState({ time: 0, result: '' });
  const [fullDate, setFullDate] = useState('');
  const { image_source } = item;
  const [kebabView, setKebabView] = useState(false);
  const [like, setLike] = useState(false);
  const { url, description } = item;

  const createdText = `${createdAt.time} ${createdAt.result} ago`;

  useEffect(() => {
    const nowDate = new Date();
    let createdate = new Date(item.created_at);
    const date = (Number(nowDate) - Number(createdate)) / 1000;
    setCreatedAt(calculateDate(date));
    setFullDate(changeDate(createdate));
  }, [item]);

  return (
    <Link href={url} target="_blank" rel="noreferrer">
      <S.ItemCard>
        <S.StarIcon
          src={like ? '/full_star.svg' : '/star.svg'}
          alt="별 이미지"
          onClick={(e) => {
            setLike(!like);
            e.preventDefault();
          }}
        />
        {image_source ? (
          <S.ItemImg image={image_source} />
        ) : (
          <S.EmptyImg>
            <Image src="/logo.svg" alt="빈 이미지" width={133} height={24} />
          </S.EmptyImg>
        )}
        <S.ItemInfo>
          <S.KebabIcon
            src="/kebab.svg"
            alt="kebabIcon"
            onClick={(e) => {
              setKebabView(!kebabView);
              e.preventDefault();
            }}
          />
          <S.ItemDate>{createdText}</S.ItemDate>
          <S.ItemDescription>
            {description ? description : url}
          </S.ItemDescription>
          <S.ItemFullDate>{fullDate}</S.ItemFullDate>
        </S.ItemInfo>
        {kebabView && (
          <KebabMenu
            setKebabView={setKebabView}
            kebabView={kebabView}
            list={list}
          />
        )}
      </S.ItemCard>
    </Link>
  );
}

export default Card;
