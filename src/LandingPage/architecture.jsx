import React from "react";
import MainImg from "./imgSrc/img_landing_main.png";
import FirstImg from "./imgSrc/img1_landing.svg";
import SecondImg from "./imgSrc/img2_landing.svg";
import ThirdImg from "./imgSrc/img3_landing.svg";
import FourthImg from "./imgSrc/img4_landing.svg";
import { Button, ButtonLabel } from "components/button";
import TextColor from "palette/text-color";
import {
  MainTextArea,
  MainImageArea,
  ContentsFrame,
  TextArea,
  ImageArea,
  LargeText,
  SmallText,
  SecondLine,
  SectionTemplate,
  FirstSectionTemplate,
  MainSectionTemplate,
} from "./design";

export const MainSection = function () {
  return (
    <MainSectionTemplate>
      <MainTextArea>
        <p>
          <TextColor.gradient.PurpleRed>
            세상의 모든 정보
          </TextColor.gradient.PurpleRed>
          를
        </p>
        <SecondLine>쉽게 저장하고 관리해 보세요</SecondLine>
      </MainTextArea>
      <Button href="/signup" as="a">
        <ButtonLabel>링크 추가하기</ButtonLabel>
      </Button>
      <MainImageArea>
        <img src={MainImg} alt={"랜딩 페이지 메인 이미지"}/>
      </MainImageArea>
    </MainSectionTemplate>
  );
};
export const FirstSection = function () {
  return (
    <FirstSectionTemplate>
      <ContentsFrame>
        <TextArea>
          <LargeText>
            <TextColor.gradient.RedBlue>원하는 링크</TextColor.gradient.RedBlue>
            를 저장하세요
          </LargeText>
          <SmallText>
            나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
            싶은 모든 것을 한 공간에 저장하세요.
          </SmallText>
        </TextArea>
        <ImageArea>
          <img src={FirstImg} />
        </ImageArea>
      </ContentsFrame>
    </FirstSectionTemplate>
  );
};
export const Section = function ({
  imgSrc,
  reversed = false,
  $textAreaSize,
  children,
}) {
  return (
    <SectionTemplate>
      <ContentsFrame reversed={reversed}>
        <TextArea $textAreaSize={$textAreaSize}>{children}</TextArea>
        <ImageArea>
          <img src={imgSrc} />
        </ImageArea>
      </ContentsFrame>
    </SectionTemplate>
  );
};
export const Sections = function () {
  return (
    <>
      <Section imgSrc={SecondImg} reversed={true} $textAreaSize={"medium"}>
        <LargeText>
          링크를 폴더로
          <TextColor.gradient.YellowBlue> 관리</TextColor.gradient.YellowBlue>
          하세요
        </LargeText>
        <SmallText>
          나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
        </SmallText>
      </Section>

      <Section imgSrc={ThirdImg}>
        <LargeText>
          저장한 링크를
          <TextColor.gradient.BlueWhite>공유</TextColor.gradient.BlueWhite>해
          보세요
        </LargeText>
        <SmallText>
          여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
          쉽고 빠르게 링크를 공유해 보세요.
        </SmallText>
      </Section>

      <Section imgSrc={FourthImg} reversed={true} $textAreaSize={"small"}>
        <LargeText>
          저장한 링크를
          <TextColor.gradient.BlueRed>검색</TextColor.gradient.BlueRed>해 보세요
        </LargeText>

        <SmallText>중요한 정보들을 검색으로 쉽게 찾아보세요.</SmallText>
      </Section>
    </>
  );
};
