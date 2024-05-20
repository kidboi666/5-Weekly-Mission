import React from "react";
import styles from "./Main.module.css";
import Image from "next/image";
import mainImg01 from "@/src/assets/images/main/sec02_img1.png";
import mainImg02 from "@/src/assets/images/main/sec02_img2.png";
import mainImg03 from "@/src/assets/images/main/sec02_img3.png";
import mainImg04 from "@/src/assets/images/main/sec02_img4.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.section01}>
          <h2>
            <span className="textGradient">세상의 모든 정보를</span>
            <br className="br" />
            쉽게 저장하고 관리해 보세요
          </h2>
          <button className="btnForm01" type="button">
            링크 추가하기
          </button>
        </section>
        <section className={styles.section02}>
          <div className="wrap">
            <ul>
              <li className="flexBox">
                <div className={styles.textBox}>
                  <h3>
                    <span className="textGradient">원하는 링크</span>를<br className="br" />
                    저장하세요
                  </h3>
                  <p>
                    나중에 읽고 싶은 글, 다시 보고 싶은 영상,
                    <br className="br" />
                    사고 싶은 옷, 기억하고 싶은 모든 것을
                    <br className="br" />한 공간에 저장하세요.
                  </p>
                </div>
                <div className={styles.imgBox}>
                  <Image src={mainImg01} alt="" />
                </div>
              </li>
              <li className="flexBox">
                <div className={styles.imgBox}>
                  <Image src={mainImg02} alt="" />
                </div>
                <div className={styles.textBox}>
                  <h3>
                    링크를 폴더로
                    <br className="br" />
                    <span className="textGradient">관리</span>하세요
                  </h3>
                  <p>
                    나만의 폴더를 무제한으로 만들고
                    <br className="br" />
                    다양하게 활용할 수 있습니다.
                  </p>
                </div>
              </li>
              <li className="flexBox">
                <div className={styles.textBox}>
                  <h3>
                    저장한 링크를
                    <br className="br" />
                    <span className="textGradient">공유</span>해 보세요.
                  </h3>
                  <p>
                    여러 링크를 폴더에 담고 공유할 수 있습니다.
                    <br className="br" />
                    가족, 친구, 동료들에게 쉽고 빠르게 링크를
                    <br className="br" />
                    공유해 보세요.
                  </p>
                </div>
                <div className={styles.imgBox}>
                  <Image src={mainImg03} alt="" />
                </div>
              </li>
              <li className="flexBox">
                <div className={styles.imgBox}>
                  <Image src={mainImg04} alt="" />
                </div>
                <div className={styles.textBox}>
                  <h3>
                    저장한 링크를
                    <br className="br" />
                    <span className="textGradient">검색</span>해 보세요
                  </h3>
                  <p>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
