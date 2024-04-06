import {
  LinkFormTemplate,
  Form,
  InputBox,
  LinkIcon,
  InputField,
} from "./design";
import { Button, ButtonLabel } from "components/button";
import IconImg from "./imgSrc/link.svg";
export const LinkForm = function () {
  return (
    <LinkFormTemplate>
      <Form>
        <InputBox>
          <LinkIcon src={IconImg} alt="링크 아이콘"/>
          <InputField placeholder = {"링크를 추가해 보세요"}/>
        </InputBox>
        <Button>
          <ButtonLabel>추가하기</ButtonLabel>
        </Button>
      </Form>
    </LinkFormTemplate>
  );
};
