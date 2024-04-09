import React from 'react';
import styled from 'styled-components';
import plus from '../assets/plusIcon.svg';
function Fab() {
  return (
    <FabButton>
      폴더추가 <img src={plus} alt="폴더 추가" />
    </FabButton>
  );
}

export default Fab;

const FabButton = styled.button`
  display: inline-flex;
  padding: 8px 24px;
  align-items: flex-start;
  gap: 20px;
  border-radius: 20px;
  border: 1px solid #fff;
  background: #6d6afe;
`;
