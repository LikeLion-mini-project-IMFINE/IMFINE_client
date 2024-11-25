import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/news/NewsPage.module.css";
import homeIcon from "../../assets/images/homeIcon.png";
import bookmarkIcon from "../../assets/images/bookmarkIcon.png";
import { useNavigate } from "react-router-dom";

function NewsPage() {
  const userId = 1;
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/news/today?userId=${userId}`
        );
        console.log("Response Data:", response.data);
        setNewsData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error Response:", error.response);
        setError(
          error.response
            ? `Error ${error.response.status}: ${error.response.data.message}`
            : "뉴스 데이터를 가져오는 중 오류가 발생했습니다."
        );
        setLoading(false);
      }
    };

    fetchNewsData();
  }, [userId]);

  if (loading) {
    return <div className={styles.loading}>로딩 중...</div>;
  }

  if (error) {
    if (error.includes("500")) {
      return (
        <div className={styles.errorWithDesign}>
          <h2>이번 주의 뉴스는 전부 다 읽으셨네요!</h2>
          <p>
            더 많은 뉴스는 다음 주에 업데이트됩니다. 기다려주셔서 감사합니다!
          </p>
          <button
            className={styles.listbtn}
            onClick={() => window.location.replace("/news/list")}
          >
            다른 뉴스 보기
          </button>
        </div>
      );
    }
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.newsContainer}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <img
            src={homeIcon}
            alt="홈 아이콘"
            className={styles.icon}
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <h1 className={styles.headerTitle}>알쏭달쏭 경제 돋보기</h1>
        <div className={styles.headerRight}>
          <img src={bookmarkIcon} alt="북마크 아이콘" className={styles.icon} />
        </div>
      </header>

      <main className={styles.mainContent}>
        <label>{newsData?.title || "제목 없음"}</label>
        <div className={styles.topheader}>
          <p className={styles.subheading}>
            {newsData?.date} <br /> {newsData?.reporter || "기자 정보 없음"}
          </p>
          <button
            className={styles.gobtn}
            onClick={() => window.open(newsData?.originalUrl, "_blank")}
          >
            기사 원문 보러가기
          </button>
        </div>

        <section className={styles.keyTerms}>
          <h3>💡 알쏭 용어 한 눈에</h3>
          <ul>
            {newsData?.terms?.length > 0 ? (
              newsData.terms.map((term) => (
                <li key={term.id}>
                  <p className={styles.words}>
                    <strong>{term.term}</strong>
                    <span>란?</span>
                  </p>
                  <p>{term.meaning}</p>
                </li>
              ))
            ) : (
              <p>용어 정보가 없습니다.</p>
            )}
          </ul>
        </section>

        <section className={styles.newsSummary}>
          <h3>📢 달쏭 뉴스 한 줄에</h3>
          <p>{newsData?.summary || "요약 정보가 없습니다."}</p>
        </section>

        <section className={styles.newsDetails}>
          <p>{newsData?.content || "내용 정보가 없습니다."}</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <button
          className={styles.listbtn}
          onClick={() => window.location.replace("/news/list")}
        >
          목록보기
        </button>
        <button
          className={styles.quizbtn}
          onClick={() =>
            newsData?.quizzes?.length > 0
              ? window.location.replace(`/quiz/${newsData.quizzes[0]?.id}`)
              : alert("퀴즈 정보가 없습니다.")
          }
        >
          알쏭달쏭 경제 퀴즈 풀기
        </button>
      </footer>
    </div>
  );
}

export default NewsPage;
