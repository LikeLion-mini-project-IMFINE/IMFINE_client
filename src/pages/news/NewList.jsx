import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    return <p style={{ textAlign: "center" }}>뉴스를 불러오는 중...</p>;
  }

  if (error) {
    return (
      <p style={{ color: "red", textAlign: "center" }}>에러 발생: {error}</p>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>뉴스 목록</h1>
      {news.length === 0 ? (
        <p style={{ textAlign: "center" }}>표시할 뉴스가 없습니다.</p>
      ) : (
        news.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "15px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 style={{ fontSize: "18px", margin: "0 0 10px" }}>
              <Link
                to={`/news/${item.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                {item.title}
              </Link>
            </h2>
            <p style={{ color: "#666", fontSize: "14px", margin: "0 0 10px" }}>
              {item.date}
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.5", margin: "0" }}>
              {item.summary}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsList;
