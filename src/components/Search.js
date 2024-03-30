import React from "react";
import styled from "styled-components";
import searchImg from "../assets/SearchIcon.svg";

const SearchBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 61rem;
  margin: 2.5rem auto 0;
  padding: 0.9375rem 1rem;
  border-radius: 0.625rem;
  background: #f5f5f5;

  div {
    display: flex;
    gap: 0.625rem;
  }

  p {
    margin: 0;
    color: var(--Text, #666);
    text-align: right;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
  }
`;

function Search() {
  // input으로 변경하기
  return (
    <SearchBlock>
      <div>
        <img src={searchImg} alt="검색" />
        <p>링크를 검색해 보세요.</p>
      </div>
    </SearchBlock>
  );
}

export default Search;
