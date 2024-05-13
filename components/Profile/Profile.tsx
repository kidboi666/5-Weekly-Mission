import React from 'react';
import profileInit from '../../assets/images/profile_init.png';
import * as S from './Profile.styled';

interface Props {
  user: string | undefined;
  src: string | undefined;
  $size?: string;
  $flextype?: string;
}

export default function Profile({
  user,
  src,
  $size = 's',
  $flextype = 'row',
}: Props) {
  return (
    <S.Wrap $flextype={$flextype}>
      <S.Img $size={$size} src={src ? src : profileInit} alt='프로필 이미지' />
      <S.Text $flextype={$flextype}>{user}</S.Text>
    </S.Wrap>
  );
}
