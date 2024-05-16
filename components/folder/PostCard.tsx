import { useMemo, useState } from "react";
import Link from "next/link";
import { IModal } from "../modal/interface";
import { calculateTimeAgo } from "@/src/utils/calcTilmAgo";
import Modal from "../modal/Modal";
import { BookMarkBtn, CardMenu, CardWrap } from "./PostCardStyle";
import { DFlaxAlignCenterBtw, EllipsisLine } from "@/styles/commonStyle";
import Image from "next/image";
import { IFolderContent } from "./interface";

const emptyImg = '/assets/logo/logo.svg';

export default function PostCard({ image_source, description, created_at}: IFolderContent) {
  const [bookMark, setBookMark] = useState(false);
  const [cardMenuShow, setCardMenuShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalInfo, setModalInfo] = useState<IModal>({
    $title: '',
    $titleDescText: null,
    $body: null,
    $buttonStyle: null,
    $buttonText: null,
    $modalData: null,
  });

  const handelerBookMarkActive = () => setBookMark((prev) => !prev);
  const handelerCardDropdown = () => setCardMenuShow((prev) => !prev);

  const handleModalClose = () => {
    setModalShow(false);
  };

  const date = useMemo(() => {
    return new Date(`${created_at}`);
  }, []);

  return (
    <>
      <CardWrap>
        <BookMarkBtn
          className={bookMark ? 'active' : ''}
          onClick={handelerBookMarkActive}
        >
          북마크버튼
        </BookMarkBtn>
        <Link href="/" target="_blank" className="card__link">
          <figure>
            <div className="card__image">
              {image_source ? (
                <Image fill src={image_source} alt={image_source} />
              ) : (
                <img className="empty" src={emptyImg} alt="" />
              )}
            </div>
            <figcaption className="card__info">
              <DFlaxAlignCenterBtw className="card__time-ago">
                {calculateTimeAgo(`${created_at}`)}
              </DFlaxAlignCenterBtw>
              <EllipsisLine $tline={2} className="card__content">
                {description}
              </EllipsisLine>
              <p className="card__date">{date.toLocaleString()}</p>
            </figcaption>
          </figure>
        </Link>
        <CardMenu>
          <button
            className="card__dropdown-contant"
            onClick={handelerCardDropdown}
          >
            <img src="/assets/icon/icon_dotte.svg" alt="메뉴" />
          </button>
          {cardMenuShow && (
            <div className="card__dropdown-menu">
              {/* <button
                className="card__menu-btn"
                onClick={() => handleModalOpen('folderDelete')}
              >
                삭제하기
              </button>
              <button
                className="card__menu-btn"
                onClick={() => handleModalOpen('folderInAdd')}
              >
                폴더에 추가
              </button> */}
            </div>
          )}
        </CardMenu>
      </CardWrap>
      <Modal onOpen={modalShow} onClose={handleModalClose} {...modalInfo} />
    </>
  );
}
