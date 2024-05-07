import { ContainBody, ContainHead } from '../../styles/commonStyle';
import { BodyInner, ShareHeadInner, BoxLinkSearch } from './folderStyle';
import { TitleMs } from '../../styles/commonStyle';
import Input from '../../components/common/atoms/Input';
import { SHAREDCONTANTAPI } from '../../constant/api';
import useFetch from '../../hook/useFetch';
import { IFolderContent } from './interface';
import ContantList from '../../components/folder/ContantList';
const logo = '/assets/logo/logo_codeit.svg';
const search = '/assets/icon/icon_search.svg';

interface IFolder {
  $title?: string;
  $folderLogo?: string;
  $folderLogoAlt?: string;
}

function FolderHead({ $title, $folderLogo, $folderLogoAlt }: IFolder) {
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
  const { value, isLoading } =
    useFatchDataLoad<IFolderContent[]>(SHAREDCONTANTAPI);

  return (
    <>
      <ContainHead>
        <FolderHead
          $title={'⭐️ 즐겨찾기'}
          $folderLogo={logo}
          $folderLogoAlt={'@코드잇'}
        />
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
          <ContantList contant={value} loading={isLoading} />
        </BodyInner>
      </ContainBody>
    </>
  );
}

export default Shared;
