import GradientSkyblueBtn from "@/components/button/ui/GradientSkyblueBtn";
import Image from "next/image";
import React from "react";
import hero from "@/public/img/home/hero.png";
import styles from "@/widgets/home/styles/mainSection.module.css";

const MainSection = () => {
  return (
    <section className={styles.container}>
      <p className={styles.heading}>
        <span className={styles.gradient}>세상의 모든 정보</span>
        를<br />
        쉽게 저장하고 관리해 보세요
      </p>
      <div className={styles.btnWrap}>
        <GradientSkyblueBtn text="링크 추가하기" />
      </div>
      <Image src={hero} alt="hero_img" />
    </section>
  );
};

export default MainSection;
