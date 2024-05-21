import React from "react";
import styles from "../public/styles/index.module.css";
import Input from "../src/Components/Input/Input";
import Link from "next/link";
import Header from "../src/Components/Header/Header";
import Footer from "../src/Components/Footer/Footer";

const Index = () => {
    return (
        <>
            <Header />
            <div id='root' className={styles.index_container}>
                <p>첫 화면</p>
                <Input id='password' placeholder='내용 입력하세요' type='text' />
                <div className={styles.button_container}>
                    <Link href='/folder'>
                        <button className={`${styles.button} button`}>Folder</button>
                    </Link>
                    <Link href='/shared'>
                        <button className={`${styles.button} button`}>Shared</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Index;
