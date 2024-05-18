import { useMemo, useState } from 'react';
import Link from 'next/link';
import { IModal } from '../modal/interface';
import { calculateTimeAgo } from '@/src/utils/calcTilmAgo';
import Modal from '../modal/Modal';
import { BookMarkBtn, CardMenu, CardWrap } from './PostCardStyle';
import { DFlaxAlignCenterBtw, EllipsisLine } from '@/styles/commonStyle';
import Image from 'next/image';
import { IFolderContent } from './interface';

const EMPTY_IMAGE = '/assets/logo/logo.svg';

export default function PostCard({ image_source, description, created_at }: IFolderContent) {
  const [isBookMark, setIsBookMark] = useState(false);
  const [isCardMenu, setIsCardMenu] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);
  const [modalInfo] = useState<IModal>({
    $title: '',
    $titleDescText: null,
    $body: null,
    $buttonStyle: null,
    $buttonText: null,
    $modalData: null,
  });

  const handelerBookMarkActive = () => setIsBookMark((prev) => !prev);
  const handelerCardDropdown = () => setIsCardMenu((prev) => !prev);

  const handleModalClose = () => {
    setIsModalShow(false);
  };

  const date = useMemo(() => {
    return new Date(`${created_at}`);
  }, []);

  return (
    <>
      <CardWrap>
        <BookMarkBtn
          className={isBookMark ? 'active' : ''}
          onClick={handelerBookMarkActive}>
          북마크버튼
        </BookMarkBtn>
        <Link
          href='/'
          target='_blank'
          className='card__link'>
          <figure>
            <div className='card__image'>
              {image_source ? (
                <Image
                  fill
                  src={image_source}
                  alt={image_source}
                  sizes='(max-width: 23.4375rem) 300px, 500px'
                  priority
                />
              ) : (
                <Image
                  className='empty'
                  src={EMPTY_IMAGE}
                  alt='로고'
                  width={133}
                  height={25}
                />
              )}
            </div>
            <figcaption className='card__info'>
              <DFlaxAlignCenterBtw className='card__time-ago'>{calculateTimeAgo(`${created_at}`)}</DFlaxAlignCenterBtw>
              <EllipsisLine
                $tline={2}
                className='card__content'>
                {description}
              </EllipsisLine>
              <p className='card__date'>{date.toLocaleString()}</p>
            </figcaption>
          </figure>
        </Link>
        <CardMenu>
          <button
            className='card__dropdown-contant'
            onClick={handelerCardDropdown}>
            <Image
              src='/assets/icon/icon_dotte.svg'
              alt='메뉴'
              width={21}
              height={17}
            />
          </button>
          {isCardMenu && (
            <div className='card__dropdown-menu'>
              {/* <button
                className='card__menu-btn'
                onClick={() => handleModalOpen('folderDelete')}>
                삭제하기
              </button>
              <button
                className='card__menu-btn'
                onClick={() => handleModalOpen('folderInAdd')}>
                폴더에 추가
              </button> */}
            </div>
          )}
        </CardMenu>
      </CardWrap>
      <Modal
        onOpen={isModalShow}
        onClose={handleModalClose}
        {...modalInfo}
      />
    </>
  );
}
