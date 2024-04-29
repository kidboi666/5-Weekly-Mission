import React from "react";
import styles from "./NavigationBar.module.scss";
import classNames from "classnames/bind";
import { LOGO_ICON } from "./constant";
import { Link } from "react-router-dom";
import { NavUserProfile } from "../NavUserProfile/NavUserProfile";

const cx = classNames.bind(styles);

export const NavigationBar = ({ user }) => {
  return (
    <div className={cx("container")}>
      <img src={LOGO_ICON} alt="로고 이미지 Linkbrary" />
      <NavUserProfile user={user} />
    </div>
  );
};
