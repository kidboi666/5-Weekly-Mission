import styled from "styled-components";

export const ProfileTemplate = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.6rem;
`;
export const Img = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
`;
export const Email = styled.span`
  display: none;
  font-size: 1.4rem;
  color: #373740;

  @media (min-width: 768px) {
    display: inline;
  }
`;
