import React from "react";
import "./ProfileImage.css";

export default function ProfileImage({ src, size }) {
  const sizeStyle = `size-${size}`;
  return (
    <img
      className={`profile-image ${sizeStyle}`}
      src={src}
      alt='프로필 이미지'
    />
  );
}
