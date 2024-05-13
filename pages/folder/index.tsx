import { IModal } from "@/components/modal/interface";
import { FOLDER_CONTANT_LIST_API, FOLDER_MENU_LIST_API } from "@/src/constant/api";
import useFetch from "@/src/hook/useFetch";
import { useState } from "react";
import { IFolderContentApi, IFolderMenuButtonApi } from "./interface";
import { modalOrder } from "@/src/constant/modal";
import { BodyInner, BookmarkBox, FolderContainHead } from "./folderStyle";
import LinkAddHeader from "@/components/folder/LinkAddHeader";
import { ContainBody } from "@/styles/commonStyle";
import SearchInputBox from "@/components/folder/SearchInputBox";
import FolderButtonList from "@/components/folder/FolderButtonList";
import Button from "@/components/common/atoms/Button";
import FolderContentControll from "@/components/folder/FolderContentControll";
import ContantList from "@/components/folder/ContantList";
import Loading from "@/components/loading/Loading";
import Modal from "@/components/modal/Modal";

const addImage = '/assets/icon/icon_primary_add.svg';
const searchImage = '/assets/icon/icon_search.svg';
const linkImage = '/assets/icon/icon_primaty_link.svg';

function useFatchDataLoad<T>(api: string) {
  return useFetch<T>(api);
}

export default function Folder() {
  const [title, setTitle] = useState('전체');
  const [btnActive, setBtnActive] = useState<number>(-1);
  const [dynamicAPI, setDynamicAPI] = useState<string>(FOLDER_CONTANT_LIST_API); // 버튼리스트 클릭시 해당 컨텐트 노출
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
    useFatchDataLoad<IFolderMenuButtonApi>(FOLDER_MENU_LIST_API);
  const { value: contant, isLoading: contantLoading } =
    useFatchDataLoad<IFolderContentApi>(dynamicAPI);
  const [searchContatn, setSearchContant] = useState<any>();

  // 폴더리스트버튼
  const handleClick = (id: number) => {
    if (!id) return;

    if (id < 0) {
      setDynamicAPI(FOLDER_CONTANT_LIST_API);
      setTitle('전체');
      setBtnActive(id)
      return;
    }

    setBtnActive(id);
    setDynamicAPI(`${FOLDER_CONTANT_LIST_API}?folderId=${id}`);
    const result = menu?.data.filter((data) => +data.id === +id);
    result && setTitle(result[0]?.name as '');
  };

  // modal open
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

  // modal close
  const handleModalClose = () => {
    setModalShow(false);
  };

  // Search
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
      setSearchContant(filter);
      return;
    }
    setSearchContant(contant?.data);
  };

  // contant list
  const contantSearch = searchContatn ? searchContatn : contant?.data;
  const loading = menuLoading === false && contantLoading === false;

  return (
    <>
      <FolderContainHead className='folder--header'>
        <LinkAddHeader $inputIconImg={linkImage} />
      </FolderContainHead>
      
      {loading ? 
        <ContainBody className='folder__dody'>
          <BodyInner>
            {/* 검색창 */}
            <SearchInputBox $inputIconImg={searchImage} onchange={handelSearch} />
            {/* 폴더 리스트 버튼 */}
            <BookmarkBox>
              <FolderButtonList
                $menu={menu}
                $btnActive={btnActive}
                onClick={handleClick}
              />
              <Button
                $btnClass={'button--icon-after button--folder-add'}
                $afterButtonIcon={addImage}
                onclick={() => handleModalOpen('folderAdd')}
              >
                폴더추가
              </Button>
            </BookmarkBox>
            {/* 설정 버튼 */}
            <FolderContentControll $title={title} onclick={handleModalOpen} />
            {/* 컨텐츠 리스트 */}
            <ContantList contant={contantSearch}/>
          </BodyInner>
        </ContainBody>
        : <Loading/>  
      }

      <Modal onOpen={modalShow} onClose={handleModalClose} $folderId={btnActive} {...modalInfo} />
    </>
  );
}
