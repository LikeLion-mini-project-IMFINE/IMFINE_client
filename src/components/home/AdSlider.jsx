import React, { useState, useEffect } from "react";
import styles from "../../styles/home/AdSlider.module.css";
import ad1 from "../../assets/images/ad1.png";
import ad2 from "../../assets/images/ad2.png";
import ad3 from "../../assets/images/ad3.png";

const AdSlider = () => {
  const ads = [
    { id: 1, image: ad1, alt: "척척박사 경제 사전 오픈 광고" },
    { id: 2, image: ad2, alt: "최신 경제 정보 광고" },
    { id: 3, image: ad3, alt: "척척박사 경제 공부 광고" },
  ];

  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prevAd) => (prevAd + 1) % ads.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [ads.length]);

  const handleNext = () => {
    setCurrentAd((currentAd + 1) % ads.length);
  };

  const handlePrev = () => {
    setCurrentAd((currentAd - 1 + ads.length) % ads.length);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.ad}>
        <button
          className={`${styles.arrow} ${styles.left}`}
          onClick={handlePrev}
        >
          &lt;
        </button>
        <img
          src={ads[currentAd].image}
          alt={ads[currentAd].alt}
          className={styles.image}
        />
        <button
          className={`${styles.arrow} ${styles.right}`}
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default AdSlider;
