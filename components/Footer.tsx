import styled from "styled-components";
import { BLACK } from "./color";
import Image from "next/image";

const YEAR = new Date().getFullYear();
const ICON_H_W = 20;

const Hlink = styled.a`
  color: #cfcfcf;
`;

const LinkImg = styled(Image)`
  display: inline-block;
  vertical-align: top;
  width: ${ICON_H_W}px;
  height: ${ICON_H_W}px;
`;

const Foote = styled.footer`
  display: flex;
  height: 160px;
  padding: 32px 104px 64px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: ${BLACK};
  margin-top: 60px;

  @media (max-width: 767px) {
    padding: 32px;
    margin-top: 40px;
  }
`;

const UnderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1716px;
  flex-grow: 1;
  color: #cfcfcf;
  font-family: Acme;
  line-height: normal;

  @media (max-width: 767px) {
    display: grid;
    grid-template: 1fr 1fr / 181px 1fr 116px;
    row-gap: 60px;
  }
`;

const CopyRight = styled.div`
  color: #cfcfcf;
  @media (max-width: 767px) {
    grid-row: 2/3;
    grid-column: 1/2;
  }
`;

const FaqPolicy = styled.div`
  display: flex;
  column-gap: 30px;

  @media (max-width: 767px) {
    grid-row: 1/2;
    grid-column: 1/2;
  }
`;

const LinkIcons = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr 1fr 1fr;
  column-gap: 12px;

  @media (max-width: 767px) {
    grid-row: 1/2;
    grid-column: 3/4;
  }
`;

const Footer = ({
  observer,
}: {
  observer?: (node?: Element | null | undefined) => void;
}) => {
  return (
    <Foote ref={observer}>
      <UnderBar>
        <CopyRight>©codeit - {YEAR}</CopyRight>
        <FaqPolicy>
          <Hlink href="https://www.google.com/" rel="noreferrer">
            Privacy Policy
          </Hlink>
          <Hlink href="https://www.naver.com/" rel="noreferrer">
            FAQ
          </Hlink>
        </FaqPolicy>
        <LinkIcons>
          <Hlink href="http://facebook.com" target="_blank" rel="noreferrer">
            <LinkImg
              src="/akar-icons_facebook-fill.svg"
              alt="페이스북"
              width={ICON_H_W}
              height={ICON_H_W}
            />
          </Hlink>
          <Hlink href="https://twitter.com/" target="_blank" rel="noreferrer">
            <LinkImg
              src="/akar-icons_twitter-fill.svg"
              alt="트위터X"
              width={ICON_H_W}
              height={ICON_H_W}
            />
          </Hlink>
          <Hlink
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkImg
              src="/akar-icons_youtube-fill.svg"
              alt="유튜브"
              width={ICON_H_W}
              height={ICON_H_W}
            />
          </Hlink>
          <Hlink href="http://instagram.com" target="_blank" rel="noreferrer">
            <LinkImg
              src="/ant-design_instagram-filled.svg"
              alt="인스타그램"
              width={ICON_H_W}
              height={ICON_H_W}
            />
          </Hlink>
        </LinkIcons>
      </UnderBar>
    </Foote>
  );
};

export default Footer;
