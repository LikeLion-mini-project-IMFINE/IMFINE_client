import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../../styles/news/NewsPage.module.css";
import homeIcon from "../../assets/images/homeIcon.png";
import bookmarkIcon from "../../assets/images/bookmarkIcon.png";

function NewsDetailPage() {
  const { newsId } = useParams(); // URL에서 newsId 추출
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        console.log(`Fetching data for newsId: ${newsId}`); // 디버깅용 로그
        const response = await axios.get(
          `http://localhost:8080/news/${newsId}`
        );
        console.log("Response Data:", response.data); // 응답 데이터 로그
        setNewsData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error Response:", error.response); // 오류 로그
        setError("뉴스 상세 정보를 가져오는 중 오류가 발생했습니다.");
        setLoading(false);
      }
    };

    if (newsId) {
      fetchNewsData(); // newsId가 있을 경우에만 데이터를 가져옵니다.
    }
  }, [newsId]); // newsId가 변경될 때마다 요청

  if (loading) {
    return <div className={styles.loading}>로딩 중...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!newsData) {
    return <div className={styles.error}>뉴스 데이터가 없습니다.</div>;
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
      </footer>
    </div>
  );
}

export default NewsDetailPage;
