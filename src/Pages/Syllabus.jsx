import React, { useEffect, useRef } from 'react';
import '../assets/css/index.css';

import NavBar from '../Components/NavBar.jsx';
import Syllabus_content from '../Components/syllabus_content.jsx';

import { useMediaQuery } from "react-responsive";



function Syllabus() {

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
        if (calendarRef.current && !calendarRef.current.contains(event.target)) {
            setCalendarVisible(false);
        }
    };

    const toggleCalendarVisibility = (event) => {
        event.stopPropagation();
        setCalendarVisible(prev => !prev);
    };
    

    return (
        <div className="container">
            <NavBar onCalendarClick={toggleCalendarVisibility} />
            <Syllabus_content/>

        </div>
    );
}

export default Syllabus;
