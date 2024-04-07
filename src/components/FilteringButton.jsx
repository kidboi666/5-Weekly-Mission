import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useFetchData from '../hooks/useFetchData';

const Button = styled.button`
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  margin-right: 0.5rem;
`;

const NoneClickedButton = styled(Button)`
  border: 1px solid #6d6afe;
  background-color: white;
  cursor: pointer;
`;

const ClickedButton = styled(Button)`
  border: none;
  background-color: #6d6afe;
  color: white;
`;

function FilteringButton({ id, title, defaultButton }) {
  const [isClicked, setIsClicked] = useState(defaultButton);

  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log(isClicked + '에서' + !isClicked + '로 바뀜!');
  };

  return (
    <>
      {isClicked ? (
        <ClickedButton onClick={handleClick}>{title}</ClickedButton>
      ) : (
        <NoneClickedButton onClick={handleClick}>{title}</NoneClickedButton>
      )}
    </>
  );
}

export default FilteringButton;
