import styled from "styled-components";

export const PopoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 64px;
  gap: 4px;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px 0px #3332361a;
`;

export const PopoverButton = styled.button`
  background-color: #ffffff;
  padding: 7px 12px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: #e7effb;
    color: #6d6afe;
  }
`;
