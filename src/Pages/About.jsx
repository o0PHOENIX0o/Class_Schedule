import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/index.css';

import NavBar from '../Components/NavBar.jsx';
// import Highlighted from '../Components/Highlighted.jsx'
import MyCalendar from '../Components/Calendar.jsx';

import { useMediaQuery } from "react-responsive";


function About() {

    const [isCalendarVisible, setCalendarVisible] = useState(true);
    const isScreenWideEnough = useMediaQuery({ minWidth: 870 });
    const calendarRef = useRef(null);



    useEffect(() => {
        setCalendarVisible(isScreenWideEnough);
        console.log("isScreenWideEnough ---> ",isCalendarVisible);
    }, [isScreenWideEnough]);

    // const handleClickOutside = (event) => {
    //     if (calendarRef.current && !calendarRef.current.contains(event.target)) {
    //         setCalendarVisible(false);
    //         console.log("handleClickOutside ---> ",isCalendarVisible);
    //     }
    // };

    const toggleCalendarVisibility = (event) => {
        event.stopPropagation();
        console.log("toggleCalendarVisibility ---> ",isCalendarVisible);
        setCalendarVisible(prev => !prev);
        console.log("toggleCalendarVisibility ---> ",isCalendarVisible);
    };

    

    return (
        <div className="container">
            <NavBar onCalendarClick={toggleCalendarVisibility} />

        </div>
    );
}

export default About;
