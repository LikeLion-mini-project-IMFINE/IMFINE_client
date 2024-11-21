import React from "react";
import styles from "../../styles/home/FooterCard.module.css";

const FooterCard = ({ className, title, description, bgColor }) => {
  return (
    <div
      className={`${styles.footerCard} ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
    </div>
  );
};

export default FooterCard;
