import React, { useState } from 'react';
import * as S from './LinkInput.styled';
import Modal from '../Modal/Modal';

export default function LinkInput({ folders, counts }) {
  const [text, setText] = useState('');
  const [link, setLink] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLink(text);
    setModalVisible(true);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          type='text'
          value={text}
          onChange={handleChange}
          placeholder='링크를 추가해 보세요'
        />
        <S.StyledButton text='추가하기' type='submit' />
      </S.Form>
      {modalVisible && (
        <Modal
          title='폴더에 추가'
          semiTitle={link}
          button='추가하기'
          folders={folders}
          counts={counts}
          setVisible={setModalVisible}
        />
      )}
    </>
  );
}
