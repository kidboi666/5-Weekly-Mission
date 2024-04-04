import { useEffect, useState } from "react";
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
import { IFolderListApi, folderListApi } from "../../constant/api";
import Button from "../../components/common/atoms/Button";
import Input from "../../components/common/atoms/Input";
import { relative } from "path";
const logo = "/assets/logo/logo_codeit.svg";
const add = "/assets/icon/icon_primary_add.svg";
const search = "/assets/icon/icon_search.svg";
const link = "/assets/icon/icon_primaty_link.svg";

const folderControlBtn = [
  {
    id: "공유",
    imgSrc: "/assets/icon/icon_gray_share.svg",
  },
  {
    id: "이름 변경",
    imgSrc: "/assets/icon/icon_gray_pen.svg",
  },
  {
    id: "삭제",
    imgSrc: "/assets/icon/icon_gray_delete.svg",
  },
];

function Index() {
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
              <Button $btnClass={"button__outlined"}>전체</Button>
              <Button $btnClass={"button__outlined"}>북마크1</Button>
              <Button $btnClass={"button__outlined"}>북마크12</Button>
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
                  {btn.id}
                </Button>
              ))}
            </ShareListBtn>
          </ShareBox>

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

export default Index;
