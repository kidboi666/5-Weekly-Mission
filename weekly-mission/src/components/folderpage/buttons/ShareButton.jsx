import styled from "styled-components";
import shareIcon from "../../../../image/share.png";

const ActionButton = styled.button`
  font-size: 14px;
  font-weight: 600;
  color: #9fa6b2;
  background-color: white;
  border: none;
  background-image: url(${shareIcon});
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 18px;
  padding-left: 20px;
  cursor: pointer;
`;

const ShareButton = ({ onClick }) => {
  return <ActionButton onClick={onClick}>공유</ActionButton>;
};

export default ShareButton;
