import { useEffect, useState } from "react";
import PostCard from "../../components/folder/PostCard";
import SearchInput from "../../components/form/FormInput";
import { ContainBody, ContainHead, TitleMs } from "../../styles/commonStyle";
import {
  FolderContainBodyInner,
  FolderContainHeadInner,
  PostCardWrap,
} from "./folderStyle";
import { IFolderListApi, folderListApi } from "../../constant/api";
const logo = "/assets/logo/logo_codeit.svg";

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
        <FolderContainHeadInner>
          <img src={logo} alt="코드잇 로고" />
          <p>@코드잇</p>
          <TitleMs as={"h2"}>⭐️ 즐겨찾기</TitleMs>
        </FolderContainHeadInner>
      </ContainHead>
      <ContainBody>
        <FolderContainBodyInner>
          <SearchInput></SearchInput>
          {isLoading ? (
            <PostCardWrap>
              {cardInfo
                ? cardInfo.map((data) => <PostCard key={data.id} {...data} />)
                : "리스트가 없습니다."}
            </PostCardWrap>
          ) : (
            "Loading..."
          )}
        </FolderContainBodyInner>
      </ContainBody>
    </>
  );
}

export default Index;
