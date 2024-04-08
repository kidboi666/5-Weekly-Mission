import styled from "styled-components";
import deleteIcon from "../../../../image/delete.png";

const ActionButton = styled.button`
  font-size: 14px;
  font-weight: 600;
  color: #9fa6b2;
  background-color: white;
  border: none;
  background-image: url(${deleteIcon});
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 18px;
  padding-left: 20px;
  cursor: pointer;
`;

const DeleteButton = ({ onClick }) => {
  return <ActionButton onClick={onClick}>삭제</ActionButton>;
};

export default DeleteButton;
