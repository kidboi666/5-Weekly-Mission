import * as AddLinkLayout from "./AddLink.style";
import { LINK_IMAGE } from "./constant";

export const AddLink = () => {
  return (
    <AddLinkLayout.AddLinkWrap>
      <AddLinkLayout.AddLinkForm>
        <AddLinkLayout.AddLinkInputBox>
          <AddLinkLayout.AddLinkIcon src={LINK_IMAGE} />
          <AddLinkLayout.AddLinknInput
            type="text"
            placeholder="링크를 추가해 보세요"
          />
        </AddLinkLayout.AddLinkInputBox>
        <AddLinkLayout.AddLinkButton type="button" className="btn-primary">
          추가하기
        </AddLinkLayout.AddLinkButton>
      </AddLinkLayout.AddLinkForm>
    </AddLinkLayout.AddLinkWrap>
  );
};
