import { ContainBody, ContainHead, TitleMs } from "@/styles/commonStyle";
import { BodyInner, BoxLinkSearch, ShareHeadInner } from "./folderStyle";
import useFetch from "@/src/hook/useFetch";
import { useParams } from "next/navigation";
import { IFolderContentApi, IFolderMenuButtonApi } from "./interface";
import { FOLDER_CONTANT_LIST_API, FOLDER_MENU_LIST_API } from "@/src/constant/api";
import Input from "@/components/common/atoms/Input";
import ContantList from "@/components/folder/ContantList";
import Loading from "@/components/loading/Loading";

const logo = '/assets/logo/logo_codeit.svg';
const search = '/assets/icon/icon_search.svg';

interface IFolder {
  $title?: string;
  $folderLogo?: string;
  $folderLogoAlt?: string;
}

export default function FolderHead({ $title, $folderLogo, $folderLogoAlt }: IFolder) {
  return (
    <ShareHeadInner>
      {$folderLogo && <img src={$folderLogo} alt={$folderLogoAlt} />}
      {$folderLogoAlt && <p>{$folderLogoAlt}</p>}
      {$title && <TitleMs>{$title}</TitleMs>}
    </ShareHeadInner>
  );
}

function useFatchDataLoad<T>(api: string) {
  return useFetch<T>(api);
}

function Shared() {
  const {id} = useParams();
  // const navigate = useNavigate();
  const { value: menus, isLoading: menusLoading } =
  useFatchDataLoad<IFolderMenuButtonApi>(`${FOLDER_MENU_LIST_API}`);
  const { value: title } =
  useFatchDataLoad<IFolderMenuButtonApi>(`${FOLDER_MENU_LIST_API}/${id}`);
  const { value: contant, isLoading: contantLoading } =
  useFatchDataLoad<IFolderContentApi>(`${FOLDER_CONTANT_LIST_API}?folderId=${id}`);

  const filter = menus?.data.some(data => `${data.id}` === id)
  if(filter === false) {
    // navigate('/not-found');
    return null;
  } 

  const loading = menusLoading === false || contantLoading === false;

  return (
    <>
      <ContainHead>
      <FolderHead
          $title={title?.data[0]?.name}
          $folderLogo={logo}
          $folderLogoAlt={'@코드잇'}
        />
      </ContainHead>
      {
        loading ?
        <ContainBody>
        <BodyInner>
          <BoxLinkSearch>
            <Input
              $inputClass={'input__link--search'}
              $placeholder={'링크를 검색해 보세요.'}
              $beforeBgIcon={search}
            />
          </BoxLinkSearch>
          <ContantList contant={contant?.data} />
        </BodyInner>
      </ContainBody>
      : <Loading/>
      }
     
    </>
  );
}
