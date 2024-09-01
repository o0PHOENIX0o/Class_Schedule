import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/css/index.css';

import NavBar from '../Components/NavBar.jsx';
import MyCalendar from '../Components/Calendar.jsx';
import { useMediaQuery } from "react-responsive";

function TimeTable() {
    const [isCalendarVisible, setCalendarVisible] = useState(true);
    const isScreenWideEnough = useMediaQuery({ minWidth: 870 });
    const calendarRef = useRef(null);
    const location = useLocation();

    // Set calendar visibility based on media query
    useEffect(() => {
        setCalendarVisible(isScreenWideEnough);
        console.log("isScreenWideEnough ---> ", isScreenWideEnough);
    }, [isScreenWideEnough]);

    // Reset calendar visibility on route change
    useEffect(() => {
        setCalendarVisible(isScreenWideEnough);
        console.log("Route changed to:", location.pathname);
    }, [location, isScreenWideEnough]);

    const handleClickOutside = (event) => {
        if (calendarRef.current && !calendarRef.current.contains(event.target)) {
            setCalendarVisible(false);
            console.log("handleClickOutside ---> ", isCalendarVisible);
        }
    };

    const toggleCalendarVisibility = (event) => {
        event.stopPropagation();
        setCalendarVisible(prev => !prev);
        console.log("toggleCalendarVisibility ---> ", isCalendarVisible);
    };


    console.log("--->", isCalendarVisible);

    return (
        <div className="container">
            <NavBar onCalendarClick={toggleCalendarVisibility} />
            
        </div>
    );
}

export default TimeTable;
