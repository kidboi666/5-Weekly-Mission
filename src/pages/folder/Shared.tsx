import { useEffect, useState } from "react";
import PostCard from "../../components/folder/PostCard";
import { ContainBody, ContainHead } from "../../styles/commonStyle";
import {
  BodyInner,
  EmptyBox,
  ShareHeadInner,
  PostCardWrap,
  BoxLinkSearch,
} from "./folderStyle";
import { IFolderListApi, folderListApi } from "../../api/api";
import { TitleMs } from "../../styles/commonStyle";
import Input from "../../components/common/atoms/Input";
const logo = "/assets/logo/logo_codeit.svg";
const search = "/assets/icon/icon_search.svg";

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

function Shared() {
  const [isLoading, setLoading] = useState(false);
  const [cardInfo, setCardInfo] = useState<IFolderListApi[]>();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await folderListApi();
        setCardInfo(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <ContainHead>
        <FolderHead
          $title={"⭐️ 즐겨찾기"}
          $folderLogo={logo}
          $folderLogoAlt={"@코드잇"}
        />
      </ContainHead>
      <ContainBody>
        <BodyInner>
          <BoxLinkSearch>
            <Input
              $inputClass={"input__link__search"}
              $placeholder={"링크를 검색해 보세요."}
              $beforeBgIcon={search}
            />
          </BoxLinkSearch>
          {isLoading ? (
            cardInfo ? (
              <PostCardWrap>
                {cardInfo &&
                  cardInfo.map((data) => <PostCard key={data.id} {...data} />)}
              </PostCardWrap>
            ) : (
              <EmptyBox>저장된 링크가 없습니다.</EmptyBox>
            )
          ) : (
            <EmptyBox>Loading...</EmptyBox>
          )}
        </BodyInner>
      </ContainBody>
    </>
  );
}

export default Shared;
