import { useState } from 'react';
import Image from 'next/image';
import eyeOff from '@/assets/icons/eye-off.svg';
import eyeOn from '@/assets/icons/eye-on.svg';
import React from 'react';

interface EyeProps {
  onClick: () => void;
}

const Eye: React.FC<EyeProps> = ({ onClick }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onClickHandler = () => {
    setIsPasswordVisible((prev) => !prev);
    onClick();
  };

  return (
    <div onClick={onClickHandler} style={{ cursor: 'pointer' }}>
      <Image
        src={isPasswordVisible ? eyeOn : eyeOff}
        alt='비밀번호 표시 아이콘'
      />
    </div>
  );
};

export default Eye;
