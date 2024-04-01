import React from "react";
import { ButtonLabel } from "components/button";
import { Template, Content, Form, InputFrame, SubmitButton } from "./design";
import { Social } from "../Social";
import { LinkArea } from "../LinkArea";
import {Link} from "react-router-dom"

export const Frame = function ({ $page, onSubmit, children }) {
  const submitLabel = $page === "login" ? "로그인" : "회원가입";
  const link =
    $page === "login" ? (
      <LinkArea>
        <div>회원이 아니신가요?</div>
        <Link to="/signup"> 회원 가입하기 </Link>
      </LinkArea>
    ) : (
      <LinkArea>
        <div>이미 회원이신가요?</div>
        <Link to="/login"> 로그인 하기 </Link>
      </LinkArea>
    );
  return (
    <Template>
      <Content $page={$page}>
        <Form $page={$page} onSubmit={onSubmit}>
          {link}
          <InputFrame $page={$page}>{children}</InputFrame>
          <SubmitButton>
            <ButtonLabel>{submitLabel}</ButtonLabel>
          </SubmitButton>
        </Form>
        <Social $page={$page} />
      </Content>
    </Template>
  );
};
