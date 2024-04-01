import PostCard from "../../components/bookMark/PostCard";
import SearchInput from "../../components/form/SearchInput";
import { ContainBody, ContainHead, TitleMs } from "../../styles/commonStyle";
import {
  FolderContainBodyInner,
  FolderContainHeadInner,
  PostCardWrap,
} from "./bookMarkStyle";
const logo = "/assets/logo/logo_codeit.svg";

function Index() {
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
          <PostCardWrap>
            {Array.from({ length: 10 }, (_, i) => (
              <PostCard></PostCard>
            ))}
          </PostCardWrap>
        </FolderContainBodyInner>
      </ContainBody>
    </>
  );
}

export default Index;
