import React from 'react';
import profileInit from '../../src/images/profile_init.png';
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
      <S.ImgBox>
        <S.Img
          $size={$size}
          src={src ? src : profileInit}
          alt='프로필 이미지'
          fill
        />
      </S.ImgBox>
      <S.Text $flextype={$flextype}>{user}</S.Text>
    </S.Wrap>
  );
}
