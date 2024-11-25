import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/home/FooterCard.module.css";

const FooterCard = ({ className, title, description, bgColor, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div
      className={`${styles.footerCard} ${className}`}
      style={{ backgroundColor: bgColor, cursor: "pointer" }}
      onClick={handleClick}
    >
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
    </div>
  );
};

export default FooterCard;
