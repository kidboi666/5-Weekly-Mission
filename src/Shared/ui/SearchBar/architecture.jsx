import SEARCH_IMAGE from "./imgSrc/search.svg";
import {SearchBarTemplate, Input, Img} from "./design"

export const SearchBar = () => {
  return (
    <SearchBarTemplate>
      <Input type="search" placeholder="링크를 검색해 보세요." />
      <Img
        src={SEARCH_IMAGE}
        alt="검색창인 것을 알려주는 돋보기 아이콘"
      />
    </SearchBarTemplate>
  );
};
