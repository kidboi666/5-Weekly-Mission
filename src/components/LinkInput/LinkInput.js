import React from "react";
import * as S from "./LinkInput.styled";

export default function LinkInput() {
  return (
    <S.StyledForm>
      <S.StyledInput type='text' placeholder='링크를 추가해 보세요' />
      <S.StyledButton text='추가하기' type='submit' />
    </S.StyledForm>
  );
}
