
import { useState, useEffect } from 'react';

import {useMediaQuery} from "react-responsive"

import Schedule from './Schedule';
import Syllabus_content from '../Components/syllabus_content.jsx';
import TimeTableContent from '../Components/TimeTableContent.jsx'
import AboutContent from '../Components/AboutContent.jsx'



import '../assets/css/index.css';

import NavBar from '../Components/NavBar'

const App = ()=>{
    const [activePage, setActivePage] = useState('Home');
    const [isCalendarVisible, setCalendarVisible] = useState(true);
    const isScreenWideEnough = useMediaQuery({ minWidth: 870 });


    useEffect(() => {
        setCalendarVisible(isScreenWideEnough);
    }, [isScreenWideEnough]);

    const setPage=(page)=>{
        setActivePage(page);
    }

    const toggleCalendarVisibility = () => {
        setCalendarVisible(prev => !prev);
    };

    return <>
        <div className="container">
            <NavBar  onCalendarClick={activePage === "Home" ? toggleCalendarVisibility : undefined}  DisplayPage={setPage} />
            {activePage === 'Home' && <Schedule isCalendarVisible={isCalendarVisible} />}
            {activePage === 'syllabus' && <Syllabus_content />}
            {activePage === 'timetable' && <TimeTableContent />}
            {activePage === 'about' && <AboutContent />}
        </div>
    </>
}

export default App