import React from "react";
import FooterCard from "../../components/home/FooterCard.jsx";
import styles from "../../styles/home/FooterCard.module.css";

const FooterContainer = () => {
  return (
    <div className={styles.footerCards}>
      <FooterCard
        title="알쏭달쏭 경제 돋보기"
        description="지난주에 어떤 경제 이슈가 있었을까?"
        bgColor="#FF4C9E"
      />
      <FooterCard
        title="척척박사 경제 사전"
        description="모르는 경제금융 단어가 있다면?"
        bgColor="#8F52E5"
      />
      <FooterCard
        title="변경되어야 함"
        description="이미지 추가되면 변경"
        bgColor="#8F52E5"
      />
    </div>
  );
};

export default FooterContainer;
