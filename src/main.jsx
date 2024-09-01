import React, { useState,useEffect , useRef} from 'react';
import { createRoot } from 'react-dom/client';
import styles from './assets/css/index.module.css';
import MyCalendar from './Calendar.jsx';
import NavBar from './Components/NavBar.jsx';
import Schedule from './Schedule.jsx';

import {useMediaQuery} from "react-responsive";

const App = () => {
  const [isCalendarVisible, setCalendarVisible] = useState(true);
  const isScreenWideEnough = useMediaQuery({ minWidth: 870 });
  const calendarRef = useRef(null);

  useEffect(() => {
    setCalendarVisible(isScreenWideEnough);
  }, [isScreenWideEnough]);

 

  const handleClickOutside = (event) => {
    if (
      calendarRef.current &&
      !calendarRef.current.contains(event.target)
    ) {
      setCalendarVisible(false);
    }
  };

  const toggleCalendarVisibility = (event) => {
    event.stopPropagation();
    setCalendarVisible(prev => !prev);
    
  };

  useEffect(() => {
    if (isCalendarVisible) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isCalendarVisible]);

  console.log(isCalendarVisible);
  return (
    <div className={styles.container}>
      <NavBar onCalendarClick={toggleCalendarVisibility} />
      <Schedule />
      {isCalendarVisible && (
        <div ref={calendarRef}>
          <MyCalendar />
        </div>
      )}
    </div>
  );
};

createRoot(document.getElementById('root')).render(<App />);
