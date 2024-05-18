import { ContainBody, ContainHead, Container, TitleMs } from '@/styles/commonStyle';
import { BodyInner, ShareHeadInner } from '../../styles/folderStyle';
import { IFolderContentApi, IFolderMenuButton } from '../../components/folder/interface';
import PostCardList from '@/components/folder/PostCardList';
import { instance } from '@/lib/axios';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import SearchInputBox from '@/components/folder/SearchInputBox';
import { useState } from 'react';
import Image from 'next/image';

const LOGO_IMAGE = '/assets/logo/logo_codeit.svg';
const SEARCH_IMAGE = '/assets/icon/icon_search.svg';

export async function getServerSideProps(contaxt: GetServerSidePropsContext) {
  const { query } = contaxt;
  try {
    const [resTitle, resContent] = await Promise.all([instance.get(`/folders/${query.id}`), instance.get(`/links?folderId=${query.id}`)]);
    const $title = resTitle.data;
    const $content = resContent.data;

    if (!$title.data[0]) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        $title,
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

export interface IShareTitle {
  data: Omit<IFolderMenuButton[], 'link'>;
}

export default function Shared({ $title, $content }: { $title: IShareTitle; $content: IFolderContentApi }) {
  const router = useRouter();
  const [searchContatn, setSearchContent] = useState<any>();

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

  if (!$title.data[0]) router.push('/notfound');
  return (
    <Container>
      <ContainHead>
        <ShareHeadInner>
          <Image
            src={LOGO_IMAGE}
            alt='@코드잇'
            width={60}
            height={60}
          />
          <p>@코드잇</p>
          {$title?.data[0]?.name && <TitleMs>{$title?.data[0]?.name}</TitleMs>}
        </ShareHeadInner>
      </ContainHead>
      <ContainBody>
        <BodyInner>
          {/* 검색창 */}
          <SearchInputBox
            $inputIconImg={SEARCH_IMAGE}
            onchange={handelSearch}
          />

          <PostCardList $content={contentSearch} />
        </BodyInner>
      </ContainBody>
    </Container>
  );
}
