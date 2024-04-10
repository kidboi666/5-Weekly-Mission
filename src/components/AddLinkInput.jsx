import React from 'react';
import styled from 'styled-components';
import { IoIosLink as LinkIcon } from 'react-icons/io';
import { NO_DISPLAY } from '../contants/constant';

const Container = styled.div`
  width: 50rem;
  background-color: #f0f6ff;
  position: relative;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLinkIcon = styled(LinkIcon)`
  position: absolute;
  width: 2rem;
  height: 1.5rem;
  color: #6d6afe;
  left: 0.5rem;

  @media screen and (max-width: 1023px) {
    left: 2.5rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 40px;
  border-radius: 1rem;
  border: 1px solid #6d6afe;

  @media screen and (max-width: 1023px) {
    margin-right: 32px;
    margin-left: 32px;
  }
`;
const Button = styled.button`
  position: absolute;
  border: none;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  padding-right: 1rem;
  padding-left: 1rem;
  border-radius: 0.5rem;
  color: white;
  background-image: linear-gradient(90deg, #6d6afe, #6ae3fe);
  right: 2rem;

  @media screen and (max-width: 1023px) {
    right: 4rem;
  }

  @media screen and (max-width: 767px) {
    right: 3rem;
  }
`;

function AddLinkInput() {
  return (
    <Container>
      <label style={NO_DISPLAY}>링크 추가하기</label>
      <StyledLinkIcon />
      <Input placeholder='링크를 추가해보세요' />
      <Button>추가하기</Button>
    </Container>
  );
}

export default AddLinkInput;
