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

  input {
    width: 58rem;
    margin: 0;
    color: #666;
    background: #f5f5f5;
    text-align: right;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    text-align: left;
    border: none;
  }

  input:focus {
    outline: none;
  }
`;

function Search() {
  return (
    <SearchBlock>
      <div>
        <img src={searchImg} alt="검색 아이콘" />
        <form>
          <input type="text" placeholder="링크를 검색해 보세요."></input>
        </form>
      </div>
    </SearchBlock>
  );
}

export default Search;
