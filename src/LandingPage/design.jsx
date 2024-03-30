import styled from "styled-components";
import { Button, ButtonLabel } from "components/button";

export const MainTextArea = styled.div`
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
`;
export const MainImageArea = styled.div`
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
`;
export const ContentsFrame = styled.div`
  max-width: 998px;
  width: 100%;
  height: 450px;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: ${(props) =>
    props.reversed === true ? "row-reverse" : "row"};
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
`;
export const TextArea = styled.div`
  width: 291px;
  height: ${(Props) =>
    Props.$textAreaSize === "small"
      ? "148px"
      : Props.$textAreaSize === "medium"
      ? "172px"
      : "198px"};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1199px) {
    width: 277px;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 375px;
  }
`;
export const ImageArea = styled.div`
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
`;
export const LargeText = styled.div`
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
`;
export const SmallText = styled.div`
  font-size: 16px;
  text-align: left;
  font-weight: 500;
  font-family: "Pretendard";
  line-height: 24px;
  color: #6b6b6b;

  @media (max-width: 767px) {
    width: 100%;
    font-size: 15px;
    line-height: 22.5px;
    font-weight: 520;
  }
`;
export const SecondLine = styled.p`
  @media (max-width: 1199px) {
    margin: 0;
    width: 380px;
  }

  @media (max-width: 767px) {
    width: 200px;
  }
`;
export const SectionTemplate = styled.section`
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
`;
export const FirstSectionTemplate = styled(SectionTemplate)`
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
    ${TextArea} {
      @media (max-width: 1199px) {
        width: 270px;
      }
      @media (max-width: 767px) {
        width: 325px;
      }
    }
  }
`;
export const MainSectionTemplate = styled.section`
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
`;
