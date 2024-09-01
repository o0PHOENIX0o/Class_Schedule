import React from "react"
import styles from "../assets/css/NavBar.module.css"
import {useMediaQuery} from "react-responsive";

function NavBar({onCalendarClick}){
    let isMobile = useMediaQuery({minWidth: 1100});
    let hideCalendar = useMediaQuery({minWidth: 870});
    
    return(
        <div className={styles.nav_bar}>
            <ul>
                <li>
                    <i className="fa-solid fa-house" ></i>
                    {isMobile ?  <p>Home</p> : ""}
                </li>
                <li>
                    <i className="fa-solid fa-align-left"></i>
                    {isMobile ?  <p>Syllabus</p> : ""}
                    
                </li>
                <li>
                    <i className="fa-solid fa-table-list"></i>
                    {isMobile ?  <p>Time Table</p> : ""}   
                    
                </li>
                
                <li>
                    <i className="fa-solid fa-user"></i>
                    {isMobile ?  <p>About</p> : ""}
                </li>
                
                {!hideCalendar ? <li onClick={onCalendarClick}>
                    <i className="fa-regular fa-calendar-days"></i>
                    {isMobile ?  <p>Time Table</p> : ""}
                </li>: ""}
            </ul>
        </div>
    )
}

export default NavBar;