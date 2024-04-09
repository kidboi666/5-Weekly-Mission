import styled from 'styled-components';
import CTA from './cta';
import LinkImg from '../assets/link.svg';

const AddLinkForm = styled.form`
  display: flex;
  width: 800px;
  padding: 16px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 15px;
  border: 1px solid #6d6afe;
  background: #fff;

  @media screen and (max-width: 1124px) {
    width: 700px;
  }
  @media screen and (max-width: 767px) {
    width: 325px;
  }
`;

const AddLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const AddInputDiv = styled.div`
  display: flex;
  gap: 12px;
  text-align: center;
  align-items: center;
`;
const AddLinkImg = styled.img`
  width: 20px;
  height: 20px;
`;

const AddLinkInput = styled.input`
  color: var(--Linkbrary-gray60, #9fa6b2);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  border: none;
`;

function AddLink() {
  return (
    <AddLinkForm>
      <AddLinkContainer>
        <AddInputDiv>
          <AddLinkImg src={LinkImg} alt="링크" />
          <AddLinkInput
            name="AddLink"
            placeholder="링크를 추가해 보세요."
          ></AddLinkInput>
        </AddInputDiv>
        <CTA
          text={'추가하기'}
          width={'80px'}
          fontSize={'14px'}
          padding={'10px 16px'}
        />
      </AddLinkContainer>
    </AddLinkForm>
  );
}

export default AddLink;
