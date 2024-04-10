import React from 'react';
import styled from 'styled-components';
import icon from '../assets/icon/search.svg';
import { NO_DISPLAY } from '../contants/constant';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 48px;
  margin-bottom: 48px;
  position: relative;
`;

const Icon = styled.img`
  position: absolute;
  top: 1.3rem;
  left: 1rem;
`;

const LinkInput = styled.input`
  width: 100%;
  border: none;
  background-color: #f5f5f5;
  border-radius: 1rem;
  padding: 1rem;
  padding-left: 40px;

  &::placeholder {
    font-size: 1rem;
    color: #666666;
    margin-left: 40px;
  }
`;

function Input() {
  return (
    <Container>
      <Icon src={icon} alt='돋보기 아이콘' />
      <label style={NO_DISPLAY} htmlFor='search-link'>
        링크를 검색해보세요
      </label>
      <LinkInput
        type='search'
        id='search-link'
        name='search-link'
        placeholder='링크를 검색해보세요'
      />
    </Container>
  );
}

export default Input;
