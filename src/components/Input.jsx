import React from 'react';
import styled from 'styled-components';
import icon from '../assets/icon/search.svg';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin: 48px 0px;
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  top: 20px;
  left: 15px;
`;

const Label = styled.div`
  display: none;
`;

const LinkInput = styled.input`
  border: none;
  background-color: #f5f5f5;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
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
      <Img src={icon} alt='돋보기 아이콘' />
      <Label htmlFor='search-link'>링크를 검색해보세요</Label>
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
