import { ContainBody, ContainHead } from '../../styles/commonStyle';
import { BookmarkBox, BodyInner } from './folderStyle';

import Button from '../../components/common/atoms/Button';
import useFetch from '../../hook/useFetch';
import Modal from '../../components/common/modal/Modal';
import { FOLDERCONTANTLISTAPI, FOLDERMENULISTAPI } from '../../constant/api';
import { IFolderContentApi, IFolderMenuButtonApi } from './interface';
import { useState } from 'react';
import { IModal } from '../../components/common/modal/interface';
import { modalOrder } from '../../constant/modal';
import ContantList from '../../components/folder/ContantList';
import LinkAddHeader from '../../components/folder/LinkAddHeader';
import SearchInputBox from '../../components/folder/SearchInputBox';
import FolderButtonList from '../../components/folder/FolderButtonList';
import FolderContentControll from '../../components/folder/FolderContentControll';

const add = '/assets/icon/icon_primary_add.svg';
const search = '/assets/icon/icon_search.svg';
const link = '/assets/icon/icon_primaty_link.svg';

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

  const handleModalClose = () => {
    setModalShow(false);
  };
  return (
    <>
      <ContainHead>
        <LinkAddHeader $inputIconImg={link} />
      </ContainHead>
      <ContainBody>
        <BodyInner>
          {/* 검색창 */}
          <SearchInputBox $inputIconImg={search} />
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
                $afterButtonIcon={add}
                $clickEvent={() => handleModalOpen('folderAdd')}
              >
                폴더추가
              </Button>
            </div>
          </BookmarkBox>
          {/* 설정 버튼 */}
          <FolderContentControll $title={title} onclick={handleModalOpen} />
          {/* 컨텐츠 리스트 */}
          <ContantList contant={contant?.data} loading={contantLoading} />
        </BodyInner>
      </ContainBody>
      <Modal onOpen={modalShow} onClose={handleModalClose} {...modalInfo} />
    </>
  );
}

export default Index;
