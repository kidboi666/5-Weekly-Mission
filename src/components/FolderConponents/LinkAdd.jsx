import { LinkAddBackGround, SearchBar, SearchBarInput, Input, SearchImg } from './Folderstyles/LinkAddStyled';
import icon from '../../assets/linkicon.svg';

function LinkAdd() {
  return (
    <>
      <LinkAddBackGround>
        <SearchBar>
          <SearchBarInput>
            <Input id="searchInput" type="search" placeholder="링크를 추가해 보세요" />
            <label htmlFor="searchInput">
              <SearchImg src={icon} alt="SearchIcon" />
            </label>
          </SearchBarInput>
        </SearchBar>
      </LinkAddBackGround>
    </>
  );
}
export default LinkAdd;
