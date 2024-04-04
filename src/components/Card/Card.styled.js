import styled from "styled-components";

export const StyledThumnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.2s;
`;

export const StyledCard = styled.li`
  width: calc((100% - 40px) / 3);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 5px 25px 0px #00000014;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--background-color);
  }
  &:hover ${StyledThumnail} {
    transform: scale(1.3);
  }

  @media (max-width: 1124px) {
    width: calc((100% - 20px) / 2);
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const StyledThumnailWrap = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  @media (max-width: 767px) {
    height: 50vw;
  }
`;

export const StyledTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 20px;
`;

export const StyledDateAgo = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #666666;
`;

export const StyledTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const StyledDate = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #333333;
`;
