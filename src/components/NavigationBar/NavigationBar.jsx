import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.scss";
import classNames from "classnames/bind";
import { NavUserProfile } from "../";
import { LOGO_ICON } from "./constant";

const cx = classNames.bind(styles);

export const NavigationBar = ({ user }) => {
  return (
    <div className={cx("container")}>
      <Link to="/">
        <img src={LOGO_ICON} alt="로고 이미지 Linkbrary" />
      </Link>

      <NavUserProfile user={user} />
    </div>
  );
};
