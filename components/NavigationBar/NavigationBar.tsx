import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./NavigationBar.module.scss";
import classNames from "classnames/bind";
import { NavUserProfile } from "..";
import { LOGO_ICON } from "./constant";
import { User } from "components/type";

const cx = classNames.bind(styles);

export const NavigationBar = ({ name, profile, email }: User) => {
  return (
    <div className={cx("container")} >
      <Link href="/">
        <Image 
          className={cx("image")}
          src={LOGO_ICON} 
          alt="로고 이미지 Linkbrary" 
          width={100} 
          height={100}
        />
      </Link>

      <NavUserProfile 
        name={name}  
        profile={profile}
        email={email}
      />
    </div>
  );
};
