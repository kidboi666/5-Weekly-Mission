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
import { FOLDERBOOKMARKLISTAPI, FOLDERLISTAPI } from "../../constant/api";
import { IFolderContentApi, IFolderMenuButtonApi } from "./interface";
import { useEffect, useState } from "react";

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

function useFatchDataLoad<T>(api: string) {
  return useFetch<T>(api);
}

function Index() {
  const [title, setTitle] = useState("전체");
  const [dynamicAPI, setDynamicAPI] = useState<string>(FOLDERBOOKMARKLISTAPI);
  const { value: menu, isLoading: menuLoading } =
    useFatchDataLoad<IFolderMenuButtonApi>(FOLDERLISTAPI);
  const { value: contant, isLoading: contantLoading } =
    useFatchDataLoad<IFolderContentApi>(dynamicAPI);

  const handleClick = (api: string) => {
    if (menu === undefined || api === "") return;
    if (api === "all") {
      setDynamicAPI(FOLDERBOOKMARKLISTAPI);
      setTitle("전체");
      return;
    }
    // api/users/1/links?folderId={해당 폴더 ID}
    setDynamicAPI(`${FOLDERBOOKMARKLISTAPI}?folderId=${api}`);
    const result = menu?.data.filter((data) => +data.id === +api);
    result && setTitle(result[0]?.name as "");
  };

  useEffect(() => {}, [menu, contant]);

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
              {menuLoading && (
                <>
                  <Button
                    $id={"all"}
                    $btnClass={"button__outlined"}
                    clickEvent={handleClick}
                    $clickEventName={"bookmarkId"}
                  >
                    전체
                  </Button>
                  {menu &&
                    menu.data.map((menu: any) => (
                      <Button
                        key={menu.id}
                        $id={menu.id}
                        $btnClass={"button__outlined"}
                        clickEvent={handleClick}
                        $clickEventName={"bookmarkId"}
                      >
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
            <SubTitle>{title}</SubTitle>
            <ShareListBtn>
              {folderControlBtn.map((btn) => (
                <Button
                  key={btn.id}
                  $id={btn.id}
                  $btnClass={"button__icon-before"}
                  $BeforButtonIcon={btn.imgSrc}
                >
                  {btn.name}
                </Button>
              ))}
            </ShareListBtn>
          </ShareBox>

          {contantLoading ? (
            contant && contant.data.length !== 0 ? (
              <PostCardWrap>
                {contant &&
                  contant.data.map((data) => (
                    <PostCard key={data.id} {...data} />
                  ))}
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
