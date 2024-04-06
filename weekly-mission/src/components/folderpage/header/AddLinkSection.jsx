import styled from "styled-components";
import AddFolderLink from "./AddFolderLink";

const AddLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 219px;
  background-color: #edf7ff;
  padding: 32px;
`;

const AddLinkSection = () => (
  <AddLinkContainer>
    <AddFolderLink />
  </AddLinkContainer>
);

export default AddLinkSection;
