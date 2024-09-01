import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/index.css';

import NavBar from '../Components/NavBar.jsx';
import Highlighted from '../Components/Highlighted.jsx'
import MyCalendar from '../Components/Calendar.jsx';

import { useMediaQuery } from "react-responsive";


function Schedule() {

    const [isCalendarVisible, setCalendarVisible] = useState(true);
    const [isIconCLicked, setIconCLicked] = useState(false);
    const isScreenWideEnough = useMediaQuery({ minWidth: 870 });
    const calendarRef = useRef(null);

    useEffect(() => {
        setCalendarVisible(true);
        document.removeEventListener('click', handleClickOutside);
    }, []);

    useEffect(() => {
        setCalendarVisible(isScreenWideEnough);
    }, [isScreenWideEnough]);

    const handleClickOutside = (event) => {
        if (isIconCLicked && calendarRef.current && !calendarRef.current.contains(event.target)) {
            setCalendarVisible(false);
            setIconCLicked(false);
        }
    };

    const toggleCalendarVisibility = (event) => {
        event.stopPropagation();
        setIconCLicked(true);
        setCalendarVisible(prev => !prev);
    };

    useEffect(() => {
        if (isIconCLicked) {
            document.addEventListener('click', handleClickOutside);
        } else {
        document.removeEventListener('click', handleClickOutside);
        }
        return () => {
        document.removeEventListener('click', handleClickOutside);
        };
    }, [isIconCLicked]);




    return (
        <div className="container">
            <NavBar onCalendarClick={toggleCalendarVisibility} />
            
            <Highlighted/>

            {isCalendarVisible && (
                <div ref={calendarRef}>
                    <MyCalendar />
                </div>
            )}
        </div>
    );
}

export default Schedule;
