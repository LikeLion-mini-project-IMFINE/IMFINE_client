import React, { useState } from "react";
import styles from "../../styles/home/LandingPage.module.css";
import CardContainer from "./CardContainer";
import FooterContainer from "./FooterContainer";
import DateSelector from "../../components/home/DateSelector.jsx";
import menuIcon from "../../assets/images/menuIcon.png";
import notificationIcon from "../../assets/images/notificationIcon.png";
import settingIcon from "../../assets/images/settingIcon.png";

const LandingPage = () => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.leftButtons}>
          <button className={styles.navButton}>
            <img src={menuIcon} alt="메뉴" className={styles.iconImage} />
          </button>
          <button className={styles.navButton}>
            <img
              src={notificationIcon}
              alt="알림"
              className={styles.iconImage}
            />
          </button>
        </div>
        <div className={styles.rightButton}>
          <button className={styles.navButton}>
            <img src={settingIcon} alt="설정" className={styles.iconImage} />
          </button>
        </div>
      </header>
      <main className={styles.main}>
        <DateSelector
          currentYear={currentYear}
          currentMonth={currentMonth}
          setCurrentYear={setCurrentYear}
          setCurrentMonth={setCurrentMonth}
        />
        <div className={styles.rowcontainer}>
          <div className={styles.charactor}>
            캐릭터 <br />
            이미지 들어갈 곳 <br />
            like 모ㅑ모ㅑ 키우기
          </div>
          <div className={styles.notes}>
            <div className={styles.tabs}>
              <button className={styles.tabButton}>개념노트</button>
              <button className={styles.tabButton}>오답노트</button>
              <button className={styles.tabButton}>질문노트</button>
            </div>
            <div className={styles.cards}>
              <CardContainer />
            </div>
          </div>
        </div>
        <div className={styles.rowcontainer}>
          <FooterContainer />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
