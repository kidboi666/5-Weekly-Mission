import styled from "styled-components";
import Button from "../Button/Button";

export const AddFolderLink_Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 20px;
`;

export const Input = styled.input`
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

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 40px;
  transform: translateY(-50%);
  margin-right: 10px;
`;

export const AddButton = styled(Button)`
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  height: 37px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
`;
