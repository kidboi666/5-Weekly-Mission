import React from "react";
import styled from "styled-components";

import MainImg from "../images/img_landing_main.png";
import FirstImg from "../images/img1_landing.svg";
import SecondImg from "../images/img2_landing.svg";
import ThirdImg from "../images/img3_landing.svg";
import FourthImg from "../images/img4_landing.svg";
import { Button, ButtonLabel } from "../components/button";
import TextColor from "../palette/text-color";
import Nav from "../components/nav";
import Footer from "../components/footer";

const ContentsFrame = styled.div``;
const TextArea = styled.div``;
const ImageArea = styled.div``;
const LargeText = styled.div``;
const SmallText = styled.div``;
const SecondLine = styled.p``;
const FirstLine = styled.p``;

const EnterPC = styled.div`
  @media (max-width: 1199px) {
    display: inline;
  }
`;
const EnterTablet = styled.div`
  display: inline;
  @media (max-width: 1199px) {
    display: block;
  }
  @media (max-width: 767px) {
    display: inline;
  }
`;
const EnterMobile = styled.div`
  display: inline;
  @media (max-width: 767px) {
    display: block;
  }
`;

const SectionTemplate = styled.section`
  position: relative;
  margin: 0;
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: center;

  @media (max-width: 1199px) {
    height: 415px;
  }

  @media (max-width: 767px) {
    height: 457px;
  }

  ${ContentsFrame} {
    max-width: 998px;
    width: 100%;
    height: 450px;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: ${(props) =>
      props.reversed == true ? "row-reverse" : "row"};
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1199px) {
      width: 700px;
      height: 315px;
    }

    @media (max-width: 767px) {
      width: 325px;
      height: 375px;
      flex-direction: column;
      top: 40px;
    }

    ${TextArea} {
      width: 300px;
      height: ${(Props) =>
        Props.textAreaSize === "small"
          ? "148px"
          : Props.textAreaSize === "medium"
          ? "172px"
          : "198px"};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      @media (max-width: 767px) {
        width: 100%;
        height: 375px;
      }

      ${LargeText} {
        width: 300px;
        font-size: 48px;
        font-weight: 700;
        font-family: "Pretendard";
        line-height: 57px;
        text-align: left;
        height: 116px;

        @media (max-width: 767px) {
          width: 100%;
          font-size: 24px;
          line-height: 28.6px;
          height: 29px;
        }
      }
      ${SmallText} {
        width: 330px;
        font-size: 16px;
        text-align: left;
        font-weight: 400;
        font-family: "Abel";
        line-height: 24px;
        color: #6b6b6b;

        @media (max-width: 767px) {
          width: 100%;
          font-size: 15px;
          line-height: 22.5px;
          font-weight: 520;
          font-family: "Pretendard";
        }
      }
    }

    ${ImageArea} {
      max-width: 550px;
      width: 100%;
      height: 450px;

      @media (max-width: 1199px) {
        width: 385px;
        height: 315px;
      }

      @media (max-width: 767px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 325px;
        height: 265px;
      }

      img {
        width: 100%;
        height: 100%;

        @media (max-width: 1199px) {
          height: 315px;
        }

        @media (max-width: 767px) {
          height: 265px;
        }
      }
    }
  }
`;
const FirstSectionTemplate = styled(SectionTemplate)`
  height: 620px;

  @media (max-width: 1199px) {
    height: 445px;
  }

  @media (max-width: 767px) {
    height: 451px;
  }

  ${ContentsFrame} {
    top: 120px;

    @media (max-width: 1199px) {
      top: 80px;
    }
  }
`;
const MainSectionTemplate = styled.section`
  position: relative;
  margin: 0;
  background-color: #f0f6ff;
  width: 100%;
  height: 953px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
  padding-top: 70px;

  @media (max-width: 1199px) {
    height: 756px;
    padding-top: 40px;
  }

  @media (max-width: 767px) {
    height: 399px;
    padding-top: 28px;
  }

  ${TextArea} {
    line-height: 80px;
    font-size: 64px;
    text-align: center;
    font-weight: 700;
    font-family: "Pretendard";
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 767px) {
      width: 250px;
      height: 126px;
      line-height: 42px;
      font-size: 32px;
      padding: 0;
    }

    p {
      margin: 0;
    }

    ${SecondLine} {
      @media (max-width: 1199px) {
        margin: 0;
        width: 380px;
      }

      @media (max-width: 767px) {
        width: 200px;
      }
    }
  }

  ${Button} {
    max-width: 350px;
    width: 100%;
    height: 53px;

    @media (max-width: 767px) {
      max-width: 200px;
      width: 100%;
      height: 37px;

      ${ButtonLabel} {
        font-size: 14px;
      }
    }
  }

  ${ImageArea} {
    max-width: 1200px;
    width: 100%;
    height: 590px;
    padding-top: 50px;
    padding-left: 41px;
    padding-right: 41px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    @media (max-width: 1199px) {
      max-width: 700px;
      width: 100%;
      height: 343px;
      padding-top: 29px;
      padding-left: 23.8px;
      padding-right: 23.8px;
    }

    @media (max-width: 767px) {
      max-width: 325px;
      width: 100%;
      height: 160px;
      padding-top: 13.5px;
      padding-left: 11px;
      padding-right: 11px;
    }

    img {
      max-width: 1118px;
      width: 100%;
      height: 590px;

      @media (max-width: 1199px) {
        max-width: 650px;
        width: 100%;
        height: 343px;
      }

      @media (max-width: 767px) {
        max-width: 302px;
        width: 100%;
        height: 178.7px;
      }
    }
  }
`;
const MainSection = function () {
  return (
    <MainSectionTemplate>
      <TextArea>
        <FirstLine>
          <TextColor.gradient.PurpleRed>
            세상의 모든 정보
          </TextColor.gradient.PurpleRed>
          를
        </FirstLine>
        <SecondLine>쉽게 저장하고 관리해 보세요</SecondLine>
      </TextArea>
      <Button href="/signup" as="a">
        <ButtonLabel>링크 추가하기</ButtonLabel>
      </Button>
      <ImageArea>
        <img src={MainImg} />
      </ImageArea>
    </MainSectionTemplate>
  );
};
const FirstSection = function () {
  return (
    <FirstSectionTemplate>
      <ContentsFrame>
        <TextArea>
          <LargeText>
            <TextColor.gradient.RedBlue>원하는 링크</TextColor.gradient.RedBlue>
            를 저장하세요
          </LargeText>
          <SmallText>
            {"나중에 읽고 싶은 글, 다시 보고 싶은 영상, "}
            <EnterTablet />
            <EnterPC />
            {"사고 싶은 옷, "}
            <EnterMobile />
            {"기억하고 싶은 모든 것을 "}
            <EnterTablet />
            <EnterPC />한 공간에 저장하세요.
          </SmallText>
        </TextArea>
        <ImageArea>
          <img src={FirstImg} />
        </ImageArea>
      </ContentsFrame>
    </FirstSectionTemplate>
  );
};
const Section = function ({
  imgSrc,
  reversed = false,
  textAreaSize,
  children,
}) {
  return (
    <FirstSectionTemplate reversed={reversed} $textAreaSize={textAreaSize}>
      <ContentsFrame>
        <TextArea>{children}</TextArea>
        <ImageArea>
          <img src={imgSrc} />
        </ImageArea>
      </ContentsFrame>
    </FirstSectionTemplate>
  );
};

const LandingPage = function () {
  return (
    <>
      <Nav />
      <MainSection />
      <FirstSection />
      <Section imgSrc={SecondImg} reversed={true} $textAreaSize={"medium"}>
        <LargeText>
          링크를 폴더로
          <TextColor.gradient.YellowBlue> 관리</TextColor.gradient.YellowBlue>
          하세요
        </LargeText>
        <SmallText>
          {"나만의 폴더를 무제한으로 만들고 "}
          <EnterPC />
          <EnterTablet />
          {"다양하게 활용할 수 "}
          <EnterMobile />
          있습니다.
          <EnterPC />
          <EnterTablet />
        </SmallText>
      </Section>

      <Section imgSrc={ThirdImg}>
        <LargeText>
          저장한 링크를
          <TextColor.gradient.BlueWhite>공유</TextColor.gradient.BlueWhite>해
          보세요
        </LargeText>
        <SmallText>
          {"여러 링크를 폴더에 담고 공유할 수 "}
          <EnterTablet />
          {"있습니다. "}
          <EnterPC />
          {"가족, "}
          <EnterMobile />
          {"친구, 동료들에게 쉽고 "}
          <EnterTablet />
          {"빠르게 링크를 "}
          <EnterPC />
          {"공유해 보세요. "}
        </SmallText>
      </Section>

      <Section imgSrc={FourthImg} reversed={true} $textAreaSize={"small"}>
        <LargeText>
          저장한 링크를
          <TextColor.gradient.BlueRed>검색</TextColor.gradient.BlueRed>해 보세요
        </LargeText>

        <SmallText>
          {"중요한 정보들을 검색으로 쉽게 "}
          <EnterTablet />
          찾아보세요.
        </SmallText>
      </Section>

      <Footer />
    </>
  );
};

export default LandingPage;
