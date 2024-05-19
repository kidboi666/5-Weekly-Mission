import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import { ContainBody, Container } from '@/styles/commonStyle';
import LinkAddHeader from '@/components/folder/LinkAddHeader';
import SearchInputBox from '@/components/folder/SearchInputBox';
import FolderButtonList from '@/components/folder/FolderButtonList';
import Button from '@/components/common/atoms/Button';
import FolderContentControll from '@/components/folder/FolderContentControll';
import PostCardList from '@/components/folder/PostCardList';
import Modal from '@/components/modal/Modal';
import Loading from '@/components/loading/Loading';
import { BodyInner, BookmarkBox, EmptyBox, FolderContainHead } from '../../styles/folderStyle';
import { IFolderContentApi, IFolderMenuButtonApi } from '../../components/folder/interface';
import { instance } from '@/lib/axios';

const ADD_IMAGE = '/assets/icon/icon_primary_add.svg';
const SEARCH_IMAGE = '/assets/icon/icon_search.svg';
const LINK_IMAGE = '/assets/icon/icon_primaty_link.svg';

export async function getServerSideProps(contaxt: GetServerSidePropsContext) {
  const { query } = contaxt;
  try {
    let resContent;
    const resMenu = await instance.get(`/folders`);
    if (query.id) {
      resContent = await instance.get(`/links?folderId=${query.id}`);
    } else {
      resContent = await instance.get(`/links`);
    }

    const $menu = resMenu.data;
    const $content = resContent.data;
    return {
      props: {
        $menu,
        $content,
      },
    };
  } catch (error) {
    console.log('ERROR IN SERVER FETCHING DATA: ', error);
    return {
      notFound: true,
    };
  }
}

export default function Folder({ $menu, $content }: { $menu: IFolderMenuButtonApi; $content: IFolderContentApi }) {
  const router = useRouter();
  const [tabTitle, setTabTitle] = useState('전체');
  const [activeBtn, setActiveBtn] = useState<number>(-1);
  const [isModalShow, setIsModalShow] = useState(false);
  const [modalType, setModalType] = useState<string>('');
  const [searchContatn, setSearchContent] = useState<any>();
  const [isStylesLoaded, setIsStylesLoaded] = useState(false);

  // 폴더리스트버튼
  const handleClick = (id: number) => {
    if (!id) return;

    if (id === -1) {
      router.push(``);
      setTabTitle('전체');
    } else {
      router.push(`?id=${id}`);
      let title = $menu.data.filter((data) => `${data.id}` === `${id}`);
      setTabTitle(`${title[0].name}`);
    }
    setActiveBtn(id);
  };

  // modal open
  const handleModalOpen = (type: string) => {
    setIsModalShow(true);
    if (type === 'folderDelete') {
      let aaa = tabTitle;
    }
    setModalType(type);
  };

  // modal close
  const handleModalClose = () => {
    setIsModalShow(false);
  };

  // Search
  const handelSearch = (value: string) => {
    let filter;
    if (value) {
      filter = $content?.data.filter((con) => {
        if (!con) return;
        return con.description?.includes(value) || con.title?.includes(value) || con.url?.includes(value);
      });
      setSearchContent(filter);
      return;
    }
    setSearchContent($content?.data);
  };

  // search
  const contentSearch = searchContatn ?? $content?.data;

  useEffect(() => {
    let idExists;

    if (router.query.id) {
      // folder가 있을때
      idExists = $menu.data.some((item: any) => `${item.id}` === `${router.query.id}`);
    } else if (router.query.id === '-1') {
      // 전체 일때
      router.push(`/folder`);
    }

    if (idExists === false) {
      // folder가 없을때
      alert('페이지가 없습니다.');
      router.push(`/folder`);
    }

    setIsStylesLoaded(true);
  }, [$menu, router]);

  if (!isStylesLoaded) return <Loading />;

  return (
    <Container>
      <FolderContainHead className='folder--header'>
        <LinkAddHeader $inputIconImg={LINK_IMAGE} />
      </FolderContainHead>

      <ContainBody className='folder__dody'>
        <BodyInner>
          {/* 검색창 */}
          <SearchInputBox
            $inputIconImg={SEARCH_IMAGE}
            onchange={handelSearch}
          />
          {/* 폴더 리스트 버튼 */}
          <BookmarkBox>
            <FolderButtonList
              $menu={$menu}
              $activeBtnId={activeBtn}
              onClick={handleClick}
            />
            <Button
              $btnClass={'button--icon-after button--folder-add'}
              $afterButtonIcon={ADD_IMAGE}
              onclick={() => handleModalOpen('folderAdd')}>
              폴더추가
            </Button>
          </BookmarkBox>
          {/* 탭 타이틀, 설정 버튼 */}
          <FolderContentControll
            $id={activeBtn}
            $title={tabTitle}
            onclick={handleModalOpen}
          />
          {/* 컨텐츠 리스트 */}
          <PostCardList $content={contentSearch} />
        </BodyInner>
      </ContainBody>

      <Modal
        onOpen={isModalShow}
        onClose={handleModalClose}
        $type={modalType}
        $descText={modalType === 'folderDelete' ? tabTitle : ''}
      />
    </Container>
  );
}
