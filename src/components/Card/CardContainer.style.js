import styled from "styled-components";

/* Card 이미지를 감싸는 상위 div */
export const CardImageWrap = styled.div`
  width: 100%;
  height: 20rem;
  overflow: hidden;
`;

/* Card 이미지 */
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  transform: scale(1);
  transition: transform 200ms;
  object-fit: cover;
`;

/* Card 내용 */
export const CardContent = styled.div`
  height: 13.5rem;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  transition: background-color 0.3s ease-in-out;
`;

export const CardContentElapsedTime = styled.span`
  font-size: 1.3rem;
  color: var(--text-content-gray);
`;

export const CardContentDescription = styled.p`
  height: 4.9rem;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.6rem;
  line-height: 150%;
`;

export const CardContentCreatedAt = styled.span`
  font-size: 1.4rem;
  color: var(--text-content-black);
`;

/* Card를 감싸는 상위 div */
export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 32.5rem;
  height: 32.7rem;
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    width: 34rem;
    height: 33.5rem;
  }

  &:hover ${CardImage} {
    transform: scale(1.3);
    transition: transform 200ms;
  }

  &:hover ${CardContent} {
    background-color: var(--Linkbrary-bg);
    transition: all 200ms;
  }
`;

export const FavoritCardButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 3.4rem;
  height: 3.4rem;
  z-index: var(--z-index-icon);
`;

export const KebabButton = styled.button`
  position: absolute;
  top: 20.7rem;
  right: 2rem;
  z-index: var(--z-index-icon);

  @media (min-width: 768px) {
    top: 21.5rem;
  }
`;
