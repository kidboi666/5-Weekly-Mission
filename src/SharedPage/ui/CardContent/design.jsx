import styled from "styled-components";
import TextColor from "palette/text-color";

export const CardContentTemplate = styled.div`
  height: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  transition: background-color 0.3s ease-in-out;
`;
export const ElapsedTime = styled(TextColor.ContentGray)`
  font-size: 1.3rem;
`;
export const Description = styled.p`
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
export const CreatedAt = styled(TextColor.ContentBlack)`
  font-size: 1.4rem;
`;
