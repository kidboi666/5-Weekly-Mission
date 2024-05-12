// Header.js
import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { BASE_URL } from "../../constants/baseURL";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

function Header() {
    const profileData = useFetch(`${BASE_URL}users/1`);

    return (
        <header className={styles.navbar}>
            <Link href='/' className={styles.logo} tabIndex={0}>
                <Image src='/assets/logo.svg' width={133} height={24} alt='Linkbrary' />
            </Link>
            {profileData ? (
                <div className={styles.profile}>
                    <Image
                        src={profileData.data[0].image_source}
                        width={28}
                        height={28}
                        alt='profile'
                        className={styles.profile_img}
                    />
                    <span className={styles.email}>{profileData.data[0].email}</span>
                </div>
            ) : (
                <Link href='../sign/signin.html' className={styles.login_button}>
                    로그인
                </Link>
            )}
        </header>
    );
}

export default Header;
