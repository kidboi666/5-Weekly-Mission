import styled from "styled-components";
import ShareButton from "./ShareButton";
import RenameButton from "./RenameButton";
import DeleteButton from "./DeleteButton";

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const ActionButtons = () => {
  return (
    <Wrapper>
      <ShareButton />
      <RenameButton />
      <DeleteButton />
    </Wrapper>
  );
};

export default ActionButtons;
