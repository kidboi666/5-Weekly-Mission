import Image from "next/image";
import React from "react";
import styles from "./header.module.css";
import logo from "@/public/img/logo.svg";
import GradientSkyblueBtn from "@/shared/ui/button/gradientBtn/GradientSkyblueBtn";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header className={styles.container}>
      <Link href={"/"}>
        <Image src={logo} alt="logo" />
      </Link>
      <div className={styles.wrap}>
        <GradientSkyblueBtn
          text={"로그인"}
          onClick={() => router.push("/signin")}
        />
      </div>
    </header>
  );
};

export default Header;
