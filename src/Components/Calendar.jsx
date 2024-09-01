import React, { useState, useEffect } from 'react';
import styles from '../assets/css/Calendar.module.css';

const Calendar = (props) => {


  const [days, setDays] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  
  useEffect(() => {
    const now = new Date();
    const numOfDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const currentDay = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
    

    const daysArray = Array.from({ length: numOfDays + currentDay }, (_, i) => {
      if (i < currentDay) return ''; 
      return i - currentDay + 1; 
    });

    setDays(daysArray);
  }, []);

  useEffect(() => {
    console.log('Selected date:', selectedDate);
  }, [selectedDate]);

  const handleDayClick = (day) => {
    if (day && day != new Date().getDate()) {
      setSelectedDate(day);
    }
  };

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}, ${currentDate.toLocaleDateString('en-US', { weekday: 'long' })}`;
  const formattedMonth = currentDate.toLocaleDateString('en-US', { month: 'long' });


  return (
    <div className={`${styles.date_picker}`}>
            <h2><i className="fa-regular fa-calendar-days"></i> Calendar</h2>
      <div className={styles.Calendar_container}>
        <div className={styles.Calendar_bg}>
          <div className={styles.calendar__Details}>
            <div className={styles.date}>
              <h3>{formattedDate}</h3>
              <p>{formattedMonth}</p>
            </div>
            <div className={styles.Time}>
              <p>{`${currentDate.getHours()} : ${currentDate.getMinutes()}`}</p>
            </div>
          </div>
        </div>
        <div className={styles.Calendar_content}>
          <div className={styles.weeks_container}>
            <div className={styles.week}>S</div>
            <div className={styles.week}>M</div>
            <div className={styles.week}>T</div>
            <div className={styles.week}>W</div>
            <div className={styles.week}>T</div>
            <div className={styles.week}>F</div>
            <div className={styles.week}>S</div>
          </div>
          <div className={styles.Days_container}>
            {days.map((day, index) => (
              <div
                key={index}
                className={`${styles.day} ${
                  day === new Date().getDate()
                    ? styles.active : ''
                } ${
                  day === selectedDate
                    ? styles.SelectedDay : ''
                }`}
                onClick={() => handleDayClick(day)}
              >
                {day || ' '}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
