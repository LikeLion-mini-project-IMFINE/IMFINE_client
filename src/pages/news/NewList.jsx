import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/news/NewsList.module.css";
import homeIcon from "../../assets/images/homeIcon.png";
import bookmarkIcon from "../../assets/images/bookmarkIcon.png";
import { useNavigate } from "react-router-dom";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/news/list");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setNews(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p className={styles.loading}>뉴스를 불러오는 중...</p>;
  }

  if (error) {
    return <p className={styles.error}>에러 발생: {error}</p>;
  }

  return (
    <>
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
      <div className={styles.container}>
        <h1 className={styles.headerTitle}>뉴스 목록</h1>
        {news.length === 0 ? (
          <p className={styles.loading}>표시할 뉴스가 없습니다.</p>
        ) : (
          news.map((item) => (
            <div key={item.id} className={styles.newsItem}>
              <h2 className={styles.title}>
                <Link to={`/news/${item.id}`} className={styles.title}>
                  {item.title}
                </Link>
              </h2>
              <div className={styles.contentcontainer}>
                <p className={styles.summary}>{item.summary}</p>
                <p className={styles.date}>{item.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default NewsList;
