import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/news/NewsPage.module.css";
import homeIcon from "../../assets/images/homeIcon.png";
import bookmarkIcon from "../../assets/images/bookmarkIcon.png";

function NewsPage() {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dummyNewsData = {
    title: "10월 물가 3년 9개월 만에 최저... 추가 금리인하 '촉각'",
    date: "2024.11.05",
    author: "한국경제 강민 기자",
    keyTerms: [
      {
        title: "물가란?",
        description: "사람들이 물건이나 음식을 살 때의 평균 가격이에요.",
      },
      {
        title: "금리란?",
        description: "돈을 빌리거나 저축할 때 받거나 내는 돈의 비율이에요.",
      },
    ],
    summary:
      "이번 달 물가가 많이 오르지 않았어요. 그래서 사람들이 돈 쓰기 편해질 수도 있어요.",
    details: [
      "10월에 우리나라 물가가 작년 같은 달보다 1.3%만 올랐어요. 코로나 이후로 가장 낮은 상승률이라고 해요. 물가가 4월부터 천천히 오르다가 9월과 10월에는 1%대 상승률을 기록했어요. 기름값이 많이 내린 덕분에 전체 물가가 낮아졌지만, 배추나 무 같은 채소 가격은 많이 올랐어요.",
      "한국은행은 사람들이 물건을 사기 편하도록 금리를 더 낮출지 고민하고 있어요. 그러나 집값이나 가계 빚도 생각해야 해서 신중하게 결정할 거라고 해요.",
    ],
  };

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        setLoading(true);

        setNewsData(dummyNewsData);
      } catch (error) {
        console.error("Failed to fetch news data:", error);
        setError("뉴스 데이터를 가져오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  if (loading) {
    return <div className={styles.loading}>로딩 중...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.newsContainer}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <img src={homeIcon} alt="홈 아이콘" className={styles.icon} />
        </div>
        <h1 className={styles.headerTitle}>알쏭달쏭 경제 돋보기</h1>
        <div className={styles.hzeaderRight}>
          <img src={bookmarkIcon} alt="북마크 아이콘" className={styles.icon} />
        </div>
      </header>

      <main className={styles.mainContent}>
        <label>{newsData.title}</label>
        <div className={styles.topheader}>
          <p className={styles.subheading}>
            {newsData.date} <br /> {newsData.author}
          </p>
          <button className={styles.gobtn}>기사 원문 보러가기</button>
        </div>

        <section className={styles.keyTerms}>
          <h3>💡 알쏭 용어 한 눈에</h3>
          <ul>
            {newsData.keyTerms.map((term, index) => (
              <li key={index}>
                <strong>{term.title}:</strong>
                <p>{term.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.newsSummary}>
          <h3>📢 달쏭 뉴스 한 줄에</h3>
          <p>{newsData.summary}</p>
        </section>

        <section className={styles.newsDetails}>
          {newsData.details.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>
      </main>

      <footer className={styles.footer}>
        <button className={styles.listbtn}>목록보기</button>
        <button className={styles.quizbtn}>알쏭달쏭 경제 퀴즈 풀기</button>
      </footer>
    </div>
  );
}

export default NewsPage;
