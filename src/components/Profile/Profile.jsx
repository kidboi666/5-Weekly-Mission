import React from 'react';
import profileInit from '../../assets/images/profile_init.png';
import * as S from './Profile.styled';

export default function Profile({ user, src, $size = 's', $flextype = 'row' }) {
  return (
    <S.Wrap $flextype={$flextype}>
      <S.Img $size={$size} src={src ? src : profileInit} alt='프로필 이미지' />
      <S.Text $flextype={$flextype}>{user}</S.Text>
    </S.Wrap>
  );
}
