import styled from "styled-components";

export const ProfileTemplate = styled.div`
  width: 158px;
  height: 28px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 28px;
  }
`;
export const Img = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;
export const Email = styled.div`
  display: none;
  font-size: 14px;
  color: #373740;

  @media (min-width: 768px) {
    display: inline;
  }
`;
