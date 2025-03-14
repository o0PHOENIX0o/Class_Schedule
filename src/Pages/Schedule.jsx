import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/index.css';

import NavBar from '../Components/NavBar.jsx';
import Highlighted from '../Components/Highlighted.jsx'
import MyCalendar from '../Components/Calendar.jsx';
import ImpLinks from '../Components/ImpLinks.jsx';

import { useMediaQuery } from "react-responsive";


function Schedule({isCalendarVisible}) {
   

    const [Day, setNewDay] = useState(new Date().getDay());
    const isScreenWideEnough = useMediaQuery({ minWidth: 870 });
    const calendarRef = useRef(null);

    
    function handleClick(day) {
        setNewDay(day);
    }

    return (
        
            <div className='ABS'>
                <Highlighted selectedDay={Day}/>

                <div className='RightSideBar'>
                    {isCalendarVisible && (
                        <div ref={calendarRef} className='CalendarDiv'>
                            <MyCalendar newSchedule={handleClick}/>
                        </div>
                    )}
                    <ImpLinks/>
                </div>
            </div>
    );
}

export default Schedule;
