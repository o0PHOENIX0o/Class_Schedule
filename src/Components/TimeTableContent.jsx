import React,{useState} from "react";
import styles from "../assets/css/TimeTable.module.css"
import GetSchedule from '../assets/Data/TimeTable.jsx';

const TimeTableContent = function(){
    const [data,setData] = useState(GetSchedule(1));
    const [title,settitle] = useState("Monday");
    const DaysArray = ["Sunday", "Mon", "Tue", "Wed", "Thu", "Fri", "Saturday"];

    const getTimeTable = function(event){
        let element = event.target;
        settitle(element.innerText);
        const index = DaysArray.findIndex((day) => day === element.innerText);
        setData(GetSchedule(index));
        const activeElement = document.querySelector(`.${styles.activeBtn}`);
        if (activeElement) 
            activeElement.classList.remove(styles.activeBtn);
        
        element.classList.add(styles.activeBtn);
    }


    return(
        <div className={styles.container}>
            <h1>Time Table</h1><hr />
            <ul className={styles.Selectors}>
                <li onClick={getTimeTable} className={`${styles.btn}  ${styles.activeBtn}`}>Mon</li>
                <li onClick={getTimeTable} className={styles.btn}>Tue</li>
                <li onClick={getTimeTable} className={styles.btn}>Wed</li>
                <li onClick={getTimeTable} className={styles.btn}>Thu</li>
                <li onClick={getTimeTable} className={styles.btn}>Fri</li>
            </ul>

            <hr />

            <div className={styles.content}>
                <div className={styles.title}>
                    <h2>{title}</h2>
                </div>
                <div className={styles.subject_container}>
                    {data.map((content,index)=>{
                        const [SubCode, RoomNo] = content.course.split('/');
                        if(content.course === ''){
                            return (
                                <div className={styles.timeline} key={index}>
                                <div className={styles.timeline_item}>
                                    <h3>{content.name}</h3>
                                    <p>{content.start} - {content.end}</p>
                                </div>
                            </div>
                            )
                        }
                        
                        return(
                            <div className={styles.timeline} key={index}>
                                <div className={styles.timeline_item}>
                                    <h3>{SubCode} - {content.name} ({content.shortName})</h3>
                                    <p>{content.start} - {content.end}</p>
                                    <p><strong>Faculty:</strong> {content.Faculty}</p>
                                    <p><strong>Room no:</strong> {RoomNo} </p>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>

            </div>
        </div>
    )
}

export default TimeTableContent;


