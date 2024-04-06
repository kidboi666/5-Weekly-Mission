import { SEARCH_IMAGE } from "./constant";
import * as SearchBarLayout from "./SearchBar.style";

export const SearchBar = () => {
  return (
    <SearchBarLayout.SearchBarWrap>
      <SearchBarLayout.SearchBarInput
        type="text"
        placeholder="링크를 검색해 보세요."
      />
      <SearchBarLayout.SearchBarIcon src={SEARCH_IMAGE} alt="돋보기 아이콘" />
    </SearchBarLayout.SearchBarWrap>
  );
};
