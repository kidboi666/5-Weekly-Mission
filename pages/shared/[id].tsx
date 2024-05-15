import { ContainBody, ContainHead, TitleMs } from "@/styles/commonStyle";
import { BodyInner, BoxLinkSearch, ShareHeadInner } from "../folder/folderStyle";
import { IFolderContentApi, IFolderMenuButton } from "../folder/interface";
import Input from "@/components/common/atoms/Input";
import PostCardList from "@/components/folder/PostCardList";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";

const logo = '/assets/logo/logo_codeit.svg';
const search = '/assets/icon/icon_search.svg';

export async function getServerSideProps(contaxt:GetServerSidePropsContext) {
  let $title;
  let $content;
  const { query } = contaxt;
  try {
    const resTitle = await axios.get(`/folders/${query.id}`);
    const resContent = await axios.get(`/links?folderId=${query.id}`);
    $title = resTitle.data;
    $content = resContent.data;
    if(!$title.data[0]) {
      return {
        notFound: true,
      }
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }

  return {
    props:{
      $title,
      $content
    }
  }
}

export interface IShareTitle {
  data: Omit<IFolderMenuButton[], 'link'>;
}

export default function Shared({$title, $content}:{$title:IShareTitle, $content:IFolderContentApi}) {
  const router = useRouter();

  if(!$title.data[0]) router.push('/not-found');;
  return (
    <>
      <ContainHead>
        <ShareHeadInner>
          <img src={logo} alt='@코드잇' />
          <p>@코드잇</p>
          {$title?.data[0]?.name && <TitleMs>{$title?.data[0]?.name}</TitleMs>}
        </ShareHeadInner>
      </ContainHead>
        <ContainBody>
        <BodyInner>
          <BoxLinkSearch>
            <Input
              $inputClass={'input__link--search'}
              $placeholder={'링크를 검색해 보세요.'}
              $beforeBgIcon={search}
            />
          </BoxLinkSearch>
          <PostCardList $content={$content?.data} />
        </BodyInner>
      </ContainBody>   
    </>
  );
}
