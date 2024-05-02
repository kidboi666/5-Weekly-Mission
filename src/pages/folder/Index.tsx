import { ContainBody, ContainHead } from '../../styles/commonStyle';
import { BookmarkBox, BodyInner } from './folderStyle';

import Button from '../../components/common/atoms/Button';
import useFetch from '../../hook/useFetch';
import Modal from '../../components/common/modal/Modal';
import { FOLDERCONTANTLISTAPI, FOLDERMENULISTAPI } from '../../constant/api';
import { IFolderContentApi, IFolderMenuButtonApi } from './interface';
import { useEffect, useState } from 'react';
import { IModal } from '../../components/common/modal/interface';
import { modalOrder } from '../../constant/modal';
import ContantList from '../../components/folder/ContantList';
import LinkAddHeader from '../../components/folder/LinkAddHeader';
import SearchInputBox from '../../components/folder/SearchInputBox';
import FolderButtonList from '../../components/folder/FolderButtonList';
import FolderContentControll from '../../components/folder/FolderContentControll';

const addImage = '/assets/icon/icon_primary_add.svg';
const searchImage = '/assets/icon/icon_search.svg';
const linkImage = '/assets/icon/icon_primaty_link.svg';

function useFatchDataLoad<T>(api: string) {
  return useFetch<T>(api);
}

function Index() {
  const [title, setTitle] = useState('전체');
  const [btnActive, setBtnActive] = useState<number>(-1);
  const [dynamicAPI, setDynamicAPI] = useState<string>(FOLDERCONTANTLISTAPI); // 버튼리스트 클릭시 해당 컨텐트 노출
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
  const [search, setSearch] = useState<any>();

  // 폴더리스트버튼
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

  // 모달오픈
  const handleModalOpen = (type: string) => {
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

  // 모달닫기
  const handleModalClose = () => {
    setModalShow(false);
  };

  // 검색어 filter
  const handelSearch = (value: string) => {
    let filter;
    if (value) {
      filter = contant?.data.filter((con) => {
        if (!con) return;
        return (
          con.description?.includes(value) ||
          con.title?.includes(value) ||
          con.url?.includes(value)
        );
      });
      console.log(filter);
      setSearch(filter);
      return;
    }
    setSearch(contant?.data);
  };

  // contant list
  const contantSearch = search ? search : contant?.data;

  return (
    <>
      <ContainHead>
        <LinkAddHeader $inputIconImg={linkImage} />
      </ContainHead>
      <ContainBody>
        <BodyInner>
          {/* 검색창 */}
          <SearchInputBox $inputIconImg={searchImage} onchange={handelSearch} />
          {/* 폴더 리스트 버튼 */}
          <BookmarkBox>
            <FolderButtonList
              $menu={menu}
              $loading={menuLoading}
              $btnActive={btnActive}
              onClick={handleClick}
            />
            <div>
              <Button
                $btnClass={'button--icon-after'}
                $afterButtonIcon={addImage}
                onclick={() => handleModalOpen('folderAdd')}
              >
                폴더추가
              </Button>
            </div>
          </BookmarkBox>
          {/* 설정 버튼 */}
          <FolderContentControll $title={title} onclick={handleModalOpen} />
          {/* 컨텐츠 리스트 */}
          <ContantList contant={contantSearch} loading={contantLoading} />
        </BodyInner>
      </ContainBody>
      <Modal onOpen={modalShow} onClose={handleModalClose} {...modalInfo} />
    </>
  );
}

export default Index;
