import styled from "styled-components";

const StyledAllButton = styled.button`
  width: auto;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #6d6afe;
  background-color: ${(props) => (props.active ? "#6d6afe" : "#ffffff")};
  color: ${(props) => (props.active ? "#ffffff" : "#000000")};
  font-size: 16px;
  font-weight: 400;
  max-width: 150px;
  white-space: nowrap;
`;

const AllButton = ({ active, onClick }) => {
  return (
    <StyledAllButton active={active} onClick={onClick}>
      전체
    </StyledAllButton>
  );
};

export default AllButton;
