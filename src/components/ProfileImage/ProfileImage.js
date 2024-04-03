import React from "react";
import "./ProfileImage.css";
import profileInit from "../../assets/profile_init.png";

export default function ProfileImage({ src, size }) {
  const sizeStyle = `size-${size}`;
  return (
    <img
      className={`profile-image ${sizeStyle}`}
      src={src ? src : profileInit}
      alt='프로필 이미지'
    />
  );
}
