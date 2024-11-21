import React from "react";
import styles from "../../styles/home/CardComponent.module.css";

const CardComponent = ({ header, title, subtitle }) => {
  const getBackgroundColor = (header) => {
    switch (header) {
      case "기초개념":
        return "#3986FF";
      case "심화개념":
        return "#68A3FF";
      case "실전개념":
        return "#9AC1FF";
      default:
        return "white";
    }
  };

  return (
    <div
      className={styles.card}
      style={{ backgroundColor: getBackgroundColor(header) }}
    >
      <div className={styles.header}>{header || "기본 헤더"}</div>
      <div className={styles.content}>
        <div className={styles.title}>{title || "기본 타이틀"}</div>
        <div className={styles.subtitle}>{subtitle || "기본 서브타이틀"}</div>
      </div>
    </div>
  );
};

export default CardComponent;
