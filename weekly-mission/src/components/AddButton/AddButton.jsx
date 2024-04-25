import styled from "styled-components";

const StyledAddButton = styled.button`
  width: 79px;
  height: 19px;
  font-size: 16px;
  font-weight: 500;
  color: #6d6afe;
  background-color: white;
  border: none;
  white-space: nowrap;
  cursor: pointer;
`;

const AddButton = ({ onClick }) => {
  return <StyledAddButton onClick={onClick}>폴더 추가 +</StyledAddButton>;
};

export default AddButton;
