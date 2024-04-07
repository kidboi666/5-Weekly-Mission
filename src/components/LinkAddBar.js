import React from "react";
import styled from "styled-components";
import linkIcon from "../assets/linkIcon.svg";
import { Button } from "../components/NavigationBar";

function LinkAddBar() {
  return (
    <>
      <BarBlock>
        <div>
          <img
            src={linkIcon}
            alt="링크를 추가할 수 있는 것을 알려주는 링크 아이콘"
            className="SearchBar-icon"
          />
          <Input type="search" placeholder="링크를 추가해 보세요." />
          <LinkButton>추가하기</LinkButton>
        </div>
      </BarBlock>
    </>
  );
}

export default LinkAddBar;

const BarBlock = styled.div`
  background: #f0f6ff;
  padding: 6rem 20rem;

  div {
    display: flex;
    gap: 0.75rem;
    padding: 0 1.25rem;
    width: 100%;
    border-radius: 0.9375rem;
    border: 1px solid #6d6afe;
    background: #fff;
  }

  @media screen and (max-width: 1124px) {
    padding: 6rem 4rem;
  }
`;

const Input = styled.input`
  width: 100%;
  margin: 0;
  padding: 1.5rem 1.25rem 1.5rem 0;
  border: 0px solid #ffffff;
  background: #fff;

  &:focus {
    outline: none;
  }
`;

const LinkButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  margin: 10px 0;
  padding: 0.4rem;
  color: #f5f5f5;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
