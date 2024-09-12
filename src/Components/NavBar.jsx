import React from "react"
import styles from "../assets/css/NavBar.module.css"
import {useMediaQuery} from "react-responsive";

import Home from '/Home.svg';
import Syllabus from '/Syllabus.svg';
import TimeTable from '/TimeTable.svg';
import About from '/About.svg';
import Calendar from '/Calendar.svg';

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
                   
                    <Link to="/" className={`${styles.Link} ${getActiveClass('/')}`}>
                        <img src={Home} alt="Home" />
                        {isMobile ?  <p>Home</p> : ""}
                    </Link>
                </li>
                <li>
                    <Link to="/Syllabus" className={`${styles.Link} ${getActiveClass('/Syllabus')}`}>
                        <img src={Syllabus} alt="Syllabus" />
                        {isMobile ?  <p>Syllabus</p> : ""}
                    </Link>                    
                </li>
                <li>
                    <Link to="/TimeTable" className={`${styles.Link} ${getActiveClass('/TimeTable')}`}>
                        <img src={TimeTable} alt="TimeTable" />
                        {isMobile ?  <p>Time Table</p> : ""}  
                    </Link>  
                </li>
                
                <li>
                   
                <Link to="/About" className={`${styles.Link} ${getActiveClass('/About')}`} >
                        <img src={About} alt="About" />
                        {isMobile ?  <p>About</p> : ""}
                    </Link>  
                </li>
                
                {location.pathname == '/'? (!hideCalendar) ? <li onClick={onCalendarClick} className={styles.Link}> 
                    <img src={Calendar} alt="Calendar" />
                </li>: "" : ""}
            </ul>
        </div>
    )
}

export default NavBar;