import React from "react"
import styles from "../assets/css/NavBar.module.css"
import {useMediaQuery} from "react-responsive";

import Home from '/SVG/Home.svg';
import Syllabus from '/SVG/Syllabus.svg';
import TimeTable from '/SVG/TimeTable.svg';
import About from '/SVG/About.svg';
import Calendar from '/SVG/Calendar.svg';

import { Link, useLocation } from 'react-router-dom'

function NavBar({onCalendarClick}){
    const location = useLocation();
  
    let isMobile = useMediaQuery({minWidth: 1100});
    let hideCalendar = useMediaQuery({minWidth: 870});
    
    const getActiveClass = (path) => {
        return location.pathname === path ? styles.activeNavBar : "";
    };
    

    return(
        <div className={styles.nav_bar}>
            <ul>
                <li>
                   
                    <Link to="/" className={`${styles.Link} `}>
                        
                        <div className={` ${styles.IconImage} ${getActiveClass('/')}`}><img src={Home} alt="Home" /></div>
                        {isMobile ?  <p>Home</p> : ""}
                    </Link>
                </li>
                <li>
                    <Link to="/syllabus" className={`${styles.Link} `}>
                        <div className={`${styles.IconImage} ${getActiveClass('/syllabus')}`}><img src={Syllabus} alt="Syllabus" /></div>
                        {isMobile ?  <p>Syllabus</p> : ""}
                    </Link>                    
                </li>
                <li>
                    <Link to="/timetable" className={`${styles.Link}`}>
                        
                        <div className={`${styles.IconImage} ${getActiveClass('/timetable')}`}><img src={TimeTable} alt="TimeTable" /></div>
                        {isMobile ?  <p>Time Table</p> : ""}  
                    </Link>  
                </li>
                
                <li>
                   
                <Link to="/about" className={`${styles.Link}`} >
                        <div className={`${styles.IconImage} ${getActiveClass('/about')}`}><img src={About} alt="About" /></div>
                        {isMobile ?  <p>About</p> : ""}
                    </Link>  
                </li>
                
                {location.pathname == '/'? (!hideCalendar) ? <li onClick={onCalendarClick} className={styles.Link}> 
                    <div className={`${styles.IconImage}`}><img src={Calendar} alt="Calendar" /></div>
                </li>: "" : ""}
            </ul>
        </div>
    )
}

export default NavBar;