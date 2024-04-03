import styled from "styled-components";
import Button from "../Button/Button";
import LinkIcon from "../../assets/link_icon.png";

export const StyledForm = styled.form`
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 69px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;

  padding-left: 52px;
  border-radius: 15px;
  border: 1px solid var(--primary-color);
  outline: none;
  font-size: 16px;
  background: #fff url(${LinkIcon}) no-repeat 20px 23px / 20px;

  &:placeholder {
    color: #9fa6b2;
  }
`;

export const StyledButton = styled(Button)`
  position: absolute;
  top: 16px;
  right: 20px;
  width: 80px;
  height: 37px;
  font-size: 14px;
`;
