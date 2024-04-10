import { styled } from "styled-components";
import { useGetTimeAgo } from "../hooks/useGetTimeAgo";
import { useFormattingDate } from "../hooks/useFormattingDate";

export const LinkList = ({ linkList }) => {
  return (
    <LinksContainer>
      {linkList.map((link) => {
        return <Link key={link.id} link={link} />;
      })}
    </LinksContainer>
  );
};

const Link = ({ link }) => {
  return (
    <LinkCard>
      <CardImg src={link.image_source} alt="link 이미지" />
      <CardContent>
        <StyledDate>{useGetTimeAgo(link.created_at)}</StyledDate>
        <Description>{link.description}</Description>
        <StyledDate>{useFormattingDate(link.created_at)}</StyledDate>
      </CardContent>
    </LinkCard>
  );
};

const LinksContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;

  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const LinkCard = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
`;

const CardImg = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 15px 15px 0 0;
`;

const CardContent = styled.div`
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  align-items: flex-start;
  height: 100px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 0px 0px 15px 15px;
  background: #fff;
`;

const StyledDate = styled.span`
  color: ${({ theme }) => theme.color.Text};
  font-size: 12px;
  font-weight: 400;
`;

const Description = styled.p`
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  max-width: 300px;

  display: -webkit-box;
  -webkit-line-clamp: 2; // 원하는 라인수
  -webkit-box-orient: vertical;
`;
