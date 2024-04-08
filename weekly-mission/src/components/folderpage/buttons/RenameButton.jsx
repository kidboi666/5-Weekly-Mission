import styled from "styled-components";
import renameIcon from "../../../../image/pen.png";

const ActionButton = styled.button`
  font-size: 14px;
  font-weight: 600;
  color: #9fa6b2;
  background-color: white;
  border: none;
  background-image: url(${renameIcon});
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 18px;
  padding-left: 20px;
  cursor: pointer;
`;

const RenameButton = ({ onClick }) => {
  return <ActionButton onClick={onClick}>이름 변경</ActionButton>;
};

export default RenameButton;
