import PostCard from '../../components/folder/PostCard';
import { ContainBody, ContainHead, SubTitle } from '../../styles/commonStyle';
import {
  BookMarkBtnList,
  BookmarkBox,
  BodyInner,
  ShareBox,
  EmptyBox,
  BoxLinkSearch,
  ShareListBtn,
  PostCardWrap,
  LinkAddHeadInner,
} from './folderStyle';

import Button from '../../components/common/atoms/Button';
import Input from '../../components/common/atoms/Input';
import useFetch from '../../hook/useFetch';
import Modal from '../../components/common/modal/Index';
import { FOLDERCONTANTLISTAPI, FOLDERMENULISTAPI } from '../../constant/api';
import { IFolderContentApi, IFolderMenuButtonApi } from './interface';
import { useState } from 'react';
import { IModal } from '../../components/common/modal/interface';
import { modalOrder } from '../../constant/modal';

const add = '/assets/icon/icon_primary_add.svg';
const search = '/assets/icon/icon_search.svg';
const link = '/assets/icon/icon_primaty_link.svg';

const folderControlBtn = [
  {
    id: 'fcb1',
    name: '공유',
    imgSrc: '/assets/icon/icon_gray_share.svg',
    body: 'folderShare',
  },
  {
    id: 'fcb2',
    name: '이름 변경',
    imgSrc: '/assets/icon/icon_gray_pen.svg',
    body: 'folderChangeName',
  },
  {
    id: 'fcb3',
    name: '삭제',
    imgSrc: '/assets/icon/icon_gray_delete.svg',
    body: 'folderDelete',
  },
];

function useFatchDataLoad<T>(api: string) {
  return useFetch<T>(api);
}

function Index() {
  const [title, setTitle] = useState('전체');
  const [btnActive, setBtnActive] = useState<number>(-1);
  const [dynamicAPI, setDynamicAPI] = useState<string>(FOLDERCONTANTLISTAPI);
  const [modalShow, setModalShow] = useState(false);
  const [modalInfo, setModalInfo] = useState<IModal>({
    $title: '',
    $titleDescText: null,
    $body: null,
    $buttonStyle: null,
    $buttonText: null,
    $modalData: null,
  });
  const { value: menu, isLoading: menuLoading } =
    useFatchDataLoad<IFolderMenuButtonApi>(FOLDERMENULISTAPI);
  const { value: contant, isLoading: contantLoading } =
    useFatchDataLoad<IFolderContentApi>(dynamicAPI);

  const handleClick = (api: string, index: number) => {
    if (menu === undefined || api === '') return;
    if (index !== undefined) {
      setBtnActive(index);
    }
    if (api === 'all') {
      setDynamicAPI(FOLDERCONTANTLISTAPI);
      setTitle('전체');
      return;
    }
    setDynamicAPI(`${FOLDERCONTANTLISTAPI}?folderId=${api}`);
    const result = menu?.data.filter((data) => +data.id === +api);
    result && setTitle(result[0]?.name as '');
  };

  const handleModalOpen = (type: any) => {
    let modalInfo = modalOrder[type];
    if (type === 'folderInAdd') {
      modalInfo = {
        ...modalInfo,
        $modalData: menu,
      };
    }
    setModalInfo(modalInfo);
    setModalShow(true);
  };

  const handleModalClose = () => {
    setModalShow(false);
  };
  return (
    <>
      <ContainHead>
        <LinkAddHeadInner>
          <Input
            $inputClass={'input__link--add'}
            $placeholder={'링크를 추가해 보세요'}
            $beforeBgIcon={link}
            $btnShow={true}
            $btnText={'추가하기'}
            $btnClass={'button--gradient mideum'}
          />
        </LinkAddHeadInner>
      </ContainHead>
      <ContainBody>
        <BodyInner>
          {/* 검색창 */}
          <BoxLinkSearch>
            <Input
              $inputClass={'input__link--search'}
              $placeholder={'링크를 검색해 보세요.'}
              $beforeBgIcon={search}
            />
          </BoxLinkSearch>
          {/* 폴더버튼 리스트 */}
          <BookmarkBox>
            <BookMarkBtnList>
              {!menuLoading && (
                <>
                  <Button
                    $id={'all'}
                    $btnClass={`button--outlined ${
                      btnActive === -1 ? 'active' : ''
                    }`}
                    $clickEvent={() => handleClick('bookmarkId', -1)}
                  >
                    전체
                  </Button>
                  {menu &&
                    menu.data.map((menu: any, i) => (
                      <Button
                        key={menu.id}
                        $id={menu.id}
                        $btnClass={`button--outlined ${
                          btnActive === i ? 'active' : ''
                        }`}
                        $clickEvent={() => handleClick('bookmarkId', i)}
                      >
                        {menu.name}
                      </Button>
                    ))}
                </>
              )}
            </BookMarkBtnList>
            <div>
              <Button
                $btnClass={'button--icon-after'}
                $afterButtonIcon={add}
                $clickEvent={() => handleModalOpen('folderAdd')}
              >
                폴더추가
              </Button>
            </div>
          </BookmarkBox>
          {/* 버튼 수정 */}
          <ShareBox>
            <SubTitle>{title}</SubTitle>
            {title === '전체' || (
              <ShareListBtn>
                {folderControlBtn.map((btn) => (
                  <Button
                    key={btn.id}
                    $id={btn.id}
                    $btnClass={'button--icon-before'}
                    $BeforButtonIcon={btn.imgSrc}
                    $clickEvent={() => handleModalOpen(`${btn.body}`)}
                  >
                    {btn.name}
                  </Button>
                ))}
              </ShareListBtn>
            )}
          </ShareBox>
          {contantLoading ? (
            <EmptyBox>Loading...</EmptyBox>
          ) : contant ? (
            <PostCardWrap>
              {/* {contant.data.map((data) => (
                <PostCard key={data.id} {...data} />
              ))} */}
            </PostCardWrap>
          ) : (
            <EmptyBox>저장된 링크가 없습니다.</EmptyBox>
          )}
        </BodyInner>
      </ContainBody>
      <Modal onOpen={modalShow} onClose={handleModalClose} {...modalInfo} />
    </>
  );
}

export default Index;
