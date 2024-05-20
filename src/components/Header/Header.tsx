import React from "react";
import logoImg from "../../assets/svg/Linkbrary.svg";
import { useEffect, useState } from "react";
import { loginFetchData } from "../../fetchUtils";
import Profile from "../Profile/Profile";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "@/src/components/Header/Header.module.css";

function Header() {
  const [user, setUser] = useState<loginFetchData>();
  const location = useRouter();
  const isFolder = location.pathname === "/folder";

  useEffect(() => {
    async function fetchDataAndSetState() {
      const { id, name, email, profileImageSource } = await loginFetchData();
      setUser({ id, name, email, profileImageSource });
    }
    fetchDataAndSetState();
  }, []);

  return (
    <header className={`${styles.header} ${isFolder ? styles.headerStatic : ""}`}>
      <h1 className={styles.logo}>
        <a href="./">
          <Image fill src={logoImg} alt="Linkbrary" />
        </a>
      </h1>
      {user ? (
        <Profile user={user} />
      ) : (
        <Link href="/" className={`${styles.loginBtn} ${styles.btnForm01}`}>
          로그인
        </Link>
      )}
    </header>
  );
}

export default Header;
