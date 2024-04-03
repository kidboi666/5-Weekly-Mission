import styled from "styled-components";

export const StyledInput = styled.input`
  border-radius: 10px;
  background: #f5f5f5 url("../../assets/search_icon.svg") no-repeat 15px 18px /
    16px;
  font-size: 16px;
  color: #666;
  @media (max-width: 768px) {
    height: 43px;
    padding-left: 38px;
    margin: 20px 0 32px;
    font-size: 14px;
    background-position: 16px 12px;
  }
`;
