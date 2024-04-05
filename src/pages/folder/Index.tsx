import PostCard from "../../components/folder/PostCard";
import { ContainBody, ContainHead, SubTitle } from "../../styles/commonStyle";
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
} from "./folderStyle";

import Button from "../../components/common/atoms/Button";
import Input from "../../components/common/atoms/Input";
import useFetch from "../../hook/useFetch";
import { FOLDERLISTAPI, SHAREDCONTANTAPI } from "../../constant/api";
import {
  IFolderListApi,
  IFolderMenuButtonWrapApi,
} from "../../constant/interface";
const add = "/assets/icon/icon_primary_add.svg";
const search = "/assets/icon/icon_search.svg";
const link = "/assets/icon/icon_primaty_link.svg";

const folderControlBtn = [
  {
    id: "fcb1",
    name: "공유",
    imgSrc: "/assets/icon/icon_gray_share.svg",
  },
  {
    id: "fcb2",
    name: "이름 변경",
    imgSrc: "/assets/icon/icon_gray_pen.svg",
  },
  {
    id: "fcb3",
    name: "삭제",
    imgSrc: "/assets/icon/icon_gray_delete.svg",
  },
];

function Index() {
  const { value: cardInfo, isLoading: cardInfoLoading } =
    useFetch<IFolderListApi[]>(SHAREDCONTANTAPI);
  const { value: btnBookMarkMenu, isLoading: btnMenuLoading } =
    useFetch<IFolderMenuButtonWrapApi>(FOLDERLISTAPI);

  return (
    <>
      <ContainHead>
        <LinkAddHeadInner>
          <Input
            $inputClass={"input__link__add"}
            $placeholder={"링크를 추가해 보세요"}
            $beforeBgIcon={link}
            $btnShow={true}
            $btnText={"추가하기"}
            $btnClass={"button__gradient mideum"}
          />
        </LinkAddHeadInner>
      </ContainHead>
      <ContainBody>
        <BodyInner>
          {/* 검색창 */}
          <BoxLinkSearch>
            <Input
              $inputClass={"input__link__search"}
              $placeholder={"링크를 검색해 보세요."}
              $beforeBgIcon={search}
            />
          </BoxLinkSearch>
          {/* 폴더버튼 리스트 */}
          <BookmarkBox>
            <BookMarkBtnList>
              {btnMenuLoading && (
                <>
                  <Button key={"folder-all"} $btnClass={"button__outlined"}>
                    전체
                  </Button>
                  {btnBookMarkMenu &&
                    btnBookMarkMenu.data.map((menu: any) => (
                      <Button key={menu.id} $btnClass={"button__outlined"}>
                        {menu.name}
                      </Button>
                    ))}
                </>
              )}
            </BookMarkBtnList>
            <div>
              <Button $btnClass={"button__icon-after"} $afterButtonIcon={add}>
                폴더추가
              </Button>
            </div>
          </BookmarkBox>
          {/* 버튼 수정 */}
          <ShareBox>
            <SubTitle>유용한 글</SubTitle>
            <ShareListBtn>
              {folderControlBtn.map((btn) => (
                <Button
                  key={btn.id}
                  $btnClass={"button__icon-before"}
                  $BeforButtonIcon={btn.imgSrc}
                >
                  {btn.name}
                </Button>
              ))}
            </ShareListBtn>
          </ShareBox>

          {cardInfoLoading ? (
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

export default Index;
