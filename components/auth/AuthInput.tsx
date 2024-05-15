import styled from "styled-components";
import { GRAY3, PRIMARY, WHITE } from "../color";
import { FocusEvent, MouseEvent, RefObject, useState } from "react";
import Image from "next/image";

const Div = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 18px 31px 18px 15px;
  border-radius: 8px;
  border: 1px solid ${GRAY3};
  background: ${WHITE};
  outline: none;
  color: #373740;
  font-size: 16px;
  line-height: 24px;

  &:focus {
    border-color: ${PRIMARY};
  }
`;

const Button = styled.button`
  position: absolute;
  top: 22px;
  right: 15px;
  height: 16px;
  width: 16px;
`;

interface AuthInputProps {
  type: string;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  id?: string;
  Ref: RefObject<HTMLInputElement>;
}

const AuthInput = ({ type, onBlur, id, Ref }: AuthInputProps) => {
  const [hide, setHide] = useState<boolean>(true);
  const [inputType, setInputType] = useState<string>(type);

  const eyeClick = (e: MouseEvent) => {
    setHide(!hide);
    if (inputType === "password") setInputType("text");
    if (inputType === "text") setInputType("password");
  };

  return (
    <Div>
      <Input id={id} type={inputType} onBlur={onBlur} ref={Ref} />
      {type === "password" && (
        <Button type="button" onClick={eyeClick}>
          {hide ? (
            <Image src="/eye-on.svg" fill alt="숨김상태" />
          ) : (
            <Image src="/eye-off.svg" fill alt="보임상태" />
          )}
        </Button>
      )}
    </Div>
  );
};

export default AuthInput;
