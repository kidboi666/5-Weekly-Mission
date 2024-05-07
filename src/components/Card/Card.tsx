import React, { useState } from 'react';
import defaultImage from '../../assets/images/no-image.png';
import { formatDateToString, formatDateToAgo } from '../../utils/date';
import { Link } from 'react-router-dom';
import * as S from './Card.styled';
import star from '../../assets/images/star_icon.png';
import kebab from '../../assets/images/kebab_icon.png';
import Modal from '../Modal/Modal';

interface Props {
  item: {
    createdAt: string;
    url: string;
    title: string;
    imageSource: string;
  };
  folderNames: string[];
  itemCountsInEachFolder: number[];
}

export default function Card({
  item,
  folderNames,
  itemCountsInEachFolder,
}: Props) {
  const { createdAt, url, title, imageSource } = item;
  const [KebabModalVisible, setKebabModalVisible] = useState(false);
  const [deleteCardModalVisible, setDeleteCardModalVisible] = useState(false);
  const [addInFolderModalVisible, setAddInFolderModalVisible] = useState(false);

  const dateBetween = formatDateToAgo(createdAt);
  const date = formatDateToString(createdAt);

  const addDefaultImage = (e: {
    currentTarget: {
      src: string;
    };
  }) => {
    e.currentTarget.src = defaultImage;
  };

  const handleStarClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('별 클릭');
  };
  const handleKebabClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setKebabModalVisible(!KebabModalVisible);
  };

  const handleDeleteButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDeleteCardModalVisible(true);
  };
  const handleAddFolderButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setAddInFolderModalVisible(true);
  };

  return (
    <>
      <S.Card>
        <Link to={url} target='_blank' rel='noreferrer'>
          <S.ThumnailWrap>
            <S.Thumnail
              src={imageSource ? imageSource : defaultImage}
              alt={title}
              onError={addDefaultImage}
            />
          </S.ThumnailWrap>
          <S.TextWrap>
            <S.TextTopWrap>
              <S.DateAgo>{dateBetween}</S.DateAgo>
              <S.Kebab onClick={handleKebabClick}>
                <img src={kebab} alt='더보기' />
              </S.Kebab>
              {KebabModalVisible && (
                <S.KebabModal>
                  <button onClick={handleDeleteButtonClick}>삭제하기</button>
                  <button onClick={handleAddFolderButtonClick}>
                    폴더에 추가
                  </button>
                </S.KebabModal>
              )}
            </S.TextTopWrap>
            <S.Title>{title}</S.Title>
            <S.Date>{date}</S.Date>
          </S.TextWrap>
          <S.Star onClick={handleStarClick}>
            <img src={star} alt='별' />
          </S.Star>
        </Link>
      </S.Card>
      {deleteCardModalVisible && (
        <Modal
          title='링크 삭제'
          semiTitle={url}
          button='삭제하기'
          setVisible={setDeleteCardModalVisible}
        />
      )}
      {addInFolderModalVisible && (
        <Modal
          title='폴더에 추가'
          semiTitle={url}
          folders={folderNames}
          counts={itemCountsInEachFolder}
          button='추가하기'
          setVisible={setAddInFolderModalVisible}
        />
      )}
    </>
  );
}
