import styled from "styled-components";
import linkIcon from "../../../../image/link.png";
import Button from "../../shared/Button";

const AddFolderLink_Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 69px;
  border: 1px solid #6d6afe;
  border-radius: 15px;
  padding: 16px 50px;
  font-size: 16px;
  font-weight: 400;
  color: #9fa6b2;
  outline: none;
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 40px;
  transform: translateY(-50%);
  margin-right: 10px;
`;

const AddButton = styled(Button)`
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  height: 37px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
`;

const AddFolderLink = () => {
  return (
    <AddFolderLink_Container>
      <InputWrapper>
        <Image src={linkIcon} alt="Link Icon" />
        <Input type="text" placeholder="링크를 추가해 보세요." />
      </InputWrapper>
      <AddButton>추가하기</AddButton>
    </AddFolderLink_Container>
  );
};

export default AddFolderLink;
