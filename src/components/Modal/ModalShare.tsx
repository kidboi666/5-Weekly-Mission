import ModalFrame from "./ModalFrame";
import styled from "styled-components";
import LinkImg from "../../asset/linkIcon.svg";
import KakaoImg from "../../asset/Kakao.svg";
import FaceImg from "../../asset/Facebook.svg";
import { KakaoFeed } from "../snsShares/KakaoShare";
import FaceBookShare from "../snsShares/FaceBookShare";
import copyUrl from "../snsShares/copyUrl";
import { ToastContainer } from "react-toastify";

const Span = styled.span`
  color: #9fa6b2;
  text-align: center;
  font-size: 14px;
  width: 100%;
  font-weight: 400;
  line-height: 22px;
  margin: 8px 0 24px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Shares = styled.div`
  display: flex;
  column-gap: 32px;
`;

const IconName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  row-gap: 10px;
  color: #373740;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  line-height: 15px;
`;

const IconContainer = styled.button<{ $color: string; $img: string }>`
  width: 42px;
  height: 42px;
  border-radius: 37.333px;
  background-color: ${({ $color }) => $color};
  background-image: url(${({ $img }) => $img});
  background-position: center;
  background-repeat: no-repeat;
`;

interface Props {
  onClick: () => void;
  info: any;
}

const ModalShare = ({ onClick, info }: Props) => {
  const url = window.location.href;
  const domain = `${url}/${info?.id}`;
  const forKakao = {
    JsKey: "없다",
    content: {
      title: "제목",
      description: "설명, 내용",
      imageUrl: "보여줄 이미지",
      link: { mobileWebUrl: domain, webUrl: domain },
    },
    btn: [
      {
        title: "버튼 이름",
        link: { mobileWebUrl: domain, webUrl: domain },
      },
    ],
  };

  return (
    <ModalFrame name="폴더 공유" onClick={onClick}>
      <Span>{info?.name}</Span>
      <Shares>
        <IconName>
          <IconContainer
            $color="#FEE500"
            $img={KakaoImg}
            onClick={() => {
              if (0) KakaoFeed(forKakao);
              console.log(
                "도메인 등록 안해서 작동 안함, 무엇보다 폴더 별로 따로 url을 등록한게 아니라서 폴더 공유가 말이 안됨"
              );
            }}
          ></IconContainer>
          <span>카카오톡</span>
        </IconName>
        <IconName>
          <FaceBookShare url={domain}>
            {/*원래라면 index.html에 og.url과 일치해야 하고 하지만, 별도로 공유하지 않았기에 생략하겠습니다.*/}
            <IconContainer
              $color="#1877F2"
              $img={FaceImg}
              as={"div"}
            ></IconContainer>
          </FaceBookShare>
          <span>페이스북</span>
        </IconName>
        <IconName>
          <IconContainer
            $color="rgba(157, 157, 157, 0.04)"
            $img={LinkImg}
            onClick={copyUrl}
          ></IconContainer>
          <span>링크 복사</span>
        </IconName>
      </Shares>
      <ToastContainer style={{ fontSize: "12px" }} />
    </ModalFrame>
  );
};

export default ModalShare;
