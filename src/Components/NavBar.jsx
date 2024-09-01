import React from "react"
import styles from "../assets/css/NavBar.module.css"
import {useMediaQuery} from "react-responsive";

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
                   
                    <Link to="/" className={styles.Link}>
                        <i className={`fa-solid fa-house ${getActiveClass('/')}`}></i>
                        {isMobile ?  <p>Home</p> : ""}
                    </Link>
                </li>
                <li>
                    <Link to="/Syllabus" className={styles.Link}>
                        <i className={`fa-solid fa-align-left ${getActiveClass('/Syllabus')}`}></i>
                        {isMobile ?  <p>Syllabus</p> : ""}
                    </Link>                    
                </li>
                <li>
                    <Link to="/TimeTable" className={styles.Link}>
                        <i className={`fa-solid fa-table-list ${getActiveClass('/TimeTable')}`}></i>
                        {isMobile ?  <p>Time Table</p> : ""}  
                    </Link>  
                </li>
                
                <li>
                   
                    <Link to="/About" className={styles.Link} >
                        <i className={`fa-solid fa-user ${getActiveClass('/About')}`}></i>
                        {isMobile ?  <p>About</p> : ""}
                    </Link>  
                </li>
                
                {!hideCalendar ? <li onClick={onCalendarClick} className={styles.Link}> 
                    <i className="fa-regular fa-calendar-days"></i>
                </li>: ""}
            </ul>
        </div>
    )
}

export default NavBar;