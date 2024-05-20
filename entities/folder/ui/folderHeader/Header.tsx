import Image from "next/image";
import React from "react";
import logo from "@/public/img/logo.svg";
import styles from "./header.module.css";

import Link from "next/link";
import useGetUserData from "../../model/useGetUserData";

const Header = () => {
  const { userData, error } = useGetUserData();

  return (
    <header className={styles.container}>
      <Link href={"/"}>
        <Image src={logo} alt="logo" />
      </Link>
      <div className={styles.profile}>
        <Image
          className="profileImg"
          src={
            userData?.image_source ||
            "https://ssl.pstatic.net/sstatic/search/common/og_v3.png"
          }
          alt="user profile"
          width={28}
          height={28}
        />
        <p className={styles.email}>{userData?.email}</p>
      </div>
    </header>
  );
};

export default Header;
