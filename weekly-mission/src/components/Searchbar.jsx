import searchIcon from "../../image/Search.png";
import styled from "styled-components";

const SearchbarContainer = styled.div`
  position: relative;
  padding: 0 32px;

  input {
    width: 100%;
    height: 54px;
    padding: 15px 20px 15px 40px;
    border-radius: 10px;
    background-color: #f5f5f5;
    border: none;
  }

  img {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 45px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
  }
`;

const SearchBar = () => {
  return (
    <SearchbarContainer>
      <img src={searchIcon} alt="Search Icon" />
      <input type="text" placeholder="링크를 검색해 보세요." />
    </SearchbarContainer>
  );
};

export default SearchBar;

/*-최대한 컴포넌트 별로 나누어보려고 했는데 괜찮은지 모르겠습니다
-Card.jsx 파일에서 비구조화 할당을 이용하였는데 동작은 잘 되지만 vscode 상으로는 link is missing in props validation과 같은 경고메세지가 떠서 더 좋은 방법이 있을 지 궁금합니다..!*/
