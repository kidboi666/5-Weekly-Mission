import styled from "styled-components";
import linkIcon from "../../assets/link.svg";
import GradientButton from "../Button/GradientButton";

function AddLink() {
  return (
    <AddLinkWrap>
      <AddLinkBackground>
        <LinkIcon src={linkIcon} alt="링크 아이콘" />
        <AddLinkInput placeholder="링크를 추가해 보세요" />
        <GradientButton size="small">추가하기</GradientButton>
      </AddLinkBackground>
    </AddLinkWrap>
  );
}

const AddLinkWrap = styled.div`
  display: flex;
  padding: 60px 320px 90px 320px;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  background: var(--Linkbrary-bg, #f0f6ff);
`;

const AddLinkBackground = styled.div`
  display: flex;
  width: 800px;
  padding: 16px 20px;
  align-items: center;
  gap: 12px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: var(--Linkbrary-white, #fff);
`;

const AddLinkInput = styled.input`
  color: var(--Linkbrary-gray60, #9fa6b2);
  border: none;
  flex-grow: 1;
`;

const LinkIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export default AddLink;
