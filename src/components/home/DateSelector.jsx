import React, { useState, useEffect } from "react";
import styles from "../../styles/home/DateSelector.module.css";

const DateSelector = ({
  currentYear,
  currentMonth,
  setCurrentYear,
  setCurrentMonth,
}) => {
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(today.getDate());
  const [startDay, setStartDay] = useState(1);

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  useEffect(() => {
    const calculateStartDay = () => {
      if (
        currentYear === today.getFullYear() &&
        currentMonth === today.getMonth() + 1
      ) {
        const weekStart = Math.max(1, today.getDate() - (today.getDate() % 7));
        setStartDay(weekStart);
      } else {
        setStartDay(1);
      }
    };
    calculateStartDay();
  }, [currentYear, currentMonth]);

  const daysToShow = Array.from(
    { length: Math.min(7, daysInMonth - startDay + 1) },
    (_, i) => startDay + i
  );

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  const handlePrevWeek = () => {
    setStartDay(Math.max(1, startDay - 7));
  };

  const handleNextWeek = () => {
    setStartDay(Math.min(daysInMonth - 6, startDay + 7));
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 1) {
        setCurrentYear((year) => year - 1);
        return 12;
      }
      return prev - 1;
    });
    setStartDay(1);
    setSelectedDay(1);
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 12) {
        setCurrentYear((year) => year + 1);
        return 1;
      }
      return prev + 1;
    });
    setStartDay(1);
    setSelectedDay(1);
  };

  return (
    <div className={styles.topcontainer}>
      <h1 className={styles.date}>
        <button onClick={handlePrevMonth} className={styles.navButton}>
          ◀
        </button>
        {currentYear}. {String(currentMonth).padStart(2, "0")}
        <button onClick={handleNextMonth} className={styles.navButton}>
          ▶
        </button>
      </h1>
      <div className={styles.dateSelector}>
        <button
          onClick={handlePrevWeek}
          disabled={startDay === 1}
          className={styles.navButton}
        >
          ◀
        </button>
        <div className={styles.days}>
          {daysToShow.map((day) => (
            <button
              key={day}
              onClick={() => handleDaySelect(day)}
              className={`${styles.dayButton} ${
                selectedDay === day ? styles.selected : ""
              }`}
            >
              {day}
            </button>
          ))}
        </div>
        <button
          onClick={handleNextWeek}
          disabled={startDay + 7 > daysInMonth}
          className={styles.navButton}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default DateSelector;
