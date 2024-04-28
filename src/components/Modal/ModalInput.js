import styled from "styled-components";
import { PRIMARY } from "../color";

const Input = styled.input`
  width: 280px;
  padding: 18px 15px;
  border-radius: 8px;
  border: 1px solid #ccd5e3;
  color: #373740;
  font-size: 16px;
  line-height: 24px;
  margin: 24px 0 15px;

  &::placeholder {
    color: #9fa6b2;
  }

  &:focus {
    border: 1px solid ${PRIMARY};
    outline: none;
  }
`;

const ModalInput = () => {
  return <Input type="text" placeholder="내용 입력" />;
};

export default ModalInput;
