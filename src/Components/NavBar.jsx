import React, { useState } from "react"
import styles from "../assets/css/NavBar.module.css"
import { useMediaQuery } from "react-responsive";

import Home from '/SVG/Home.svg';
import Syllabus from '/SVG/Syllabus.svg';
import TimeTable from '/SVG/TimeTable.svg';
import About from '/SVG/About.svg';
import Calendar from '/SVG/Calendar.svg';



function NavBar({ onCalendarClick, DisplayPage }) {
    const [activePage, setActivePage] = useState('Home');
    let isMobile = useMediaQuery({ minWidth: 1100 });
    let hideCalendar = useMediaQuery({ minWidth: 870 });

    const setPage = (page) => {
        setActivePage(page);
        DisplayPage(page);
    }

    return (
        <div className={styles.nav_bar}>
            <ul>
                <li>

                    <div onClick={() => setPage('Home')} className={`${styles.Link} `}>
                        <div className={`${styles.IconImage} ${activePage === 'Home' ? styles.activeNavBar : ''}`}><img src={Home} alt="Home" /></div>
                        {isMobile ? <p>Home</p> : ""}
                    </div>
                </li>
                <li>
                    <div onClick={() => setPage('syllabus')} className={`${styles.Link} `}>
                        <div className={`${styles.IconImage} ${activePage === 'syllabus' ? styles.activeNavBar : ''}`}><img src={Syllabus} alt="Syllabus" /></div>
                        {isMobile ? <p>Syllabus</p> : ""}
                    </div>
                </li>
                <li>
                    <div onClick={() => setPage('timetable')} className={`${styles.Link}`}>

                        <div className={`${styles.IconImage} ${activePage === 'timetable' ? styles.activeNavBar : ''}`}><img src={TimeTable} alt="TimeTable" /></div>
                        {isMobile ? <p>Time Table</p> : ""}
                    </div>
                </li>

                <li>

                    <div onClick={() => setPage('about')} className={`${styles.Link}`} >
                        <div className={`${styles.IconImage} ${activePage === 'about' ? styles.activeNavBar : ''}`}><img src={About} alt="About" /></div>
                        {isMobile ? <p>About</p> : ""}
                    </div>
                </li>

                {activePage === 'Home' ? (!hideCalendar) ? <li onClick={onCalendarClick} className={styles.Link}>
                    <div className={`${styles.IconImage}`}><img src={Calendar} alt="Calendar" /></div>
                </li> : "" : ""}
            </ul>
        </div>
    )
}

export default NavBar;