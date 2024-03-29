import React from "react";
import styled from "styled-components";

const SearchBlock = styled.div`
  p {
    margin: 0;
  }
`;

function Search() {
  return (
    <SearchBlock>
      <p>테스트검색바</p>
    </SearchBlock>
  );
}

export default Search;
