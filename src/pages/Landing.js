import React from 'react';
import { Link } from 'react-router-dom';
import GNB from '../components/gnb';
import Footer from '../components/footer';
import mainContentImg from '../assets/content2.png';
import content2Img from '../assets/content2.png';
import content3Img from '../assets/content3.png';
import content4Img from '../assets/content4.png';
import content5Img from '../assets/content5.png';
import { styled } from 'styled-components';

function Landing() {
    const LinkStyle = {
        textDecoration: 'none',
    };
    return (
        <>
            <GNB text={'로그인'} />

            <main>
                <MainContent>
                    <Explain>
                        <Highlight>세상의 모든 정보</Highlight>를 <br />
                        쉽게 저장하고 관리해 보세요
                    </Explain>
                    <Link to="/sign-up" style={LinkStyle}>
                        <AddLink>링크 추가하기</AddLink>
                    </Link>
                    <MainImg>
                        <MainContentImg src={mainContentImg} alt="홈페이지 이미지" />
                    </MainImg>
                </MainContent>
                <ContentInterval>
                    <ContentContainer>
                        <TextBox>
                            <ContentTitle>
                                <LinkHighlight>원하는 링크</LinkHighlight>를 <br />
                                저장하세요
                            </ContentTitle>
                            <ContentParagraph>
                                나중에 읽고 싶은 글, 다시 보고 싶은 영상, <br />
                                사고 싶은 옷, 기억하고 싶은 모든 것을 <br />한 공간에 저장하세요.
                            </ContentParagraph>
                        </TextBox>
                        <ContentImg src={content2Img} alt="링크 저장" />
                    </ContentContainer>
                </ContentInterval>
                <Content>
                    <ContentContainer>
                        <ContentImg src={content3Img} alt="폴더 관리" />
                        <TextBox>
                            <ContentTitle>
                                링크를 폴더로 <br />
                                <ManageHighlight>관리</ManageHighlight>하세요
                            </ContentTitle>
                            <ContentParagraph>
                                나만의 폴더를 무제한으로 만들고 <br />
                                다양하게 활용할 수 있습니다.
                            </ContentParagraph>
                        </TextBox>
                    </ContentContainer>
                </Content>
                <Content>
                    <ContentContainer>
                        <TextBox>
                            <ContentTitle>
                                저장한 링크를 <br />
                                <ShareHighlight>공유</ShareHighlight>해보세요
                            </ContentTitle>
                            <ContentParagraph>
                                여러 링크를 폴더에 담고 공유할 수 있습니다.
                                <br />
                                가족, 친구, 동료들에게 쉽고 빠르게 링크를 <br />
                                공유해 보세요.
                            </ContentParagraph>
                        </TextBox>
                        <ContentImg src={content4Img} alt="링크 공유" />
                    </ContentContainer>
                </Content>
                <Content>
                    <ContentContainer>
                        <ContentImg src={content5Img} alt="링크 검색" />
                        <TextBox>
                            <ContentTitle>
                                저장한 링크를 <br />
                                <SearchHighlight>검색</SearchHighlight>해보세요
                            </ContentTitle>
                            <ContentParagraph>중요한 정보들을 검색으로 쉽게 찾아보세요.</ContentParagraph>
                        </TextBox>
                    </ContentContainer>
                </Content>
            </main>
            <Footer />
        </>
    );
}

export default Landing;

const MainContent = styled.div`
    display: flex;
    width: 100%;
    padding: 70px 360px 0px 360px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 40px;
    background-color: #f0f6ff;

    @media screen and (max-width: 1200px) {
        padding-left: 251px;
        padding-right: 250px;
    }

    @media screen and (max-width: 768px) {
        padding-top: 28px;
    }
`;

const Explain = styled.p`
    text-align: center;
    font-family: Pretendard;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 80px;

    @media screen and (max-width: 1200px) {
        padding-left: 113px;
        padding-right: 113px;
    }

    @media screen and (max-width: 768px) {
        padding-left: 44.5px;
        padding-right: 44.5px;
    }
`;

const Highlight = styled.span`
    background: linear-gradient(91deg, #6d6afe 17.28%, #ff9f9f 74.98%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const AddLink = styled.p`
    display: flex;
    width: 350px;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    color: var(--Grey-Light, #f5f5f5);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration-line: none;
`;

const MainImg = styled.div`
    width: 1200px;
    height: 590px;
    padding: 50px 41px;
    overflow: hidden;

    @media screen and (max-width: 1200px) {
        width: 698px;
        height: 343px;
        padding: 29px 24px;
        overflow: hidden;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const MainContentImg = styled.img`
    width: 1118px;
    height: 659px;
    flex-shrink: 0;
    border-radius: 25px;
    box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
    background: linear-gradient(180deg, rgba(196, 196, 196, 0) 67.68%, #f0f6ff 94.76%);

    @media screen and (max-width: 1200px) {
        width: 698px;
        height: 343px;
        padding: 29px 24px;
        overflow: hidden;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const Content = styled.div`
    display: flex;
    padding: 50px 461px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
        padding-left: 0;
        padding-right: 0;
    }

    @media screen and (max-width: 768px) {
        padding-left: 32px;
        padding-right: 32px;
        padding-top: 40px;
        padding-bottom: 40px;
    }
`;

const ContentInterval = styled(Content)`
    ${Content};
    padding-top: 120px;
`;

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 157px;

    @media screen and (max-width: 1200px) {
        gap: 51px;
    }

    @media screen and (max-width: 768px) {
        gap: 20px;
        flex-direction: column;
        width: 100%;
    }
`;

const ContentImg = styled.img`
    width: 550px;
    height: 450px;
    border-radius: 15px;

    @media screen and (max-width: 1200px) {
        width: 385px;
        height: 315px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
        order: 2;
    }
`;

const TextBox = styled.div`
    @media screen and (max-width: 1200px) {
        width: 262px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        &:nth-child(n) {
            display: contents;
        }
        &:nth-child(2n) {
            display: contents;
        }
    }
`;

const ContentTitle = styled.h1`
    color: #000;
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.3px;
    white-space: nowrap;
`;

const ContentParagraph = styled.p`
    color: #6b6b6b;
    font-family: Abel;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    @media screen and (max-width: 768px) {
        order: 3;
    }
`;

const LinkHighlight = styled.span`
    background: linear-gradient(96deg, #fe8a8a 1.72%, #a4ceff 74.97%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const ManageHighlight = styled.span`
    background: linear-gradient(277deg, #6fbaff 59.22%, #ffd88b 93.66%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.3px;
`;

const ShareHighlight = styled.span`
    background: linear-gradient(99deg, #6d7ccd 19.76%, rgba(82, 136, 133, 0.22) 52.69%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const SearchHighlight = styled.span`
    background: var(--Fandom-K-gra-blue-to-pink, linear-gradient(271deg, #fe578f -9.84%, #68e8f9 107.18%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
