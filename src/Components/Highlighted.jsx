import React, { useEffect, useState } from "react";
import styles from "../assets/css/Schedule.module.css";
import GetSchedule,{isCurrentTimeWithinRange} from "../assets/Data/Schedule.jsx";



function HighLightedContent({ selectedDay }) {
    const [Schedule, setSchedule] = useState([]);
    const [currentClass, setCurrentClass] = useState({});
    const [nextClass, setNextClass] = useState({});

    useEffect(() => {
        console.log("selectedDay---> ",selectedDay);
        const scheduleData = GetSchedule(selectedDay);
        setSchedule(scheduleData);

    }, [selectedDay]);

    useEffect(() => {
        const currentIndex = Schedule.findIndex(period => isCurrentTimeWithinRange(period.start, period.end));
        const currentPeriod = Schedule[currentIndex];
    
        if (currentIndex !== -1) {
            
            if(currentIndex + 1 < Schedule.length ){
                const nextIndex = currentIndex + 1;
                const nextPeriod = Schedule[nextIndex];
        
                if (nextPeriod) {
                    const [NsubjectCode, NroomNo] = nextPeriod.course.split('/');
                    const updatedNextPeriod = { ...nextPeriod, roomNo: NroomNo ? NroomNo.trim() : "" };
                    setNextClass(updatedNextPeriod); 
                    console.log("Next Period:", updatedNextPeriod);
                }
        
            }
            
            if (currentPeriod.course !== currentClass.course) {
                const [subjectCode, roomNo] = currentPeriod.course.split('/');
                const updatedPeriod = { ...currentPeriod, roomNo: roomNo ? roomNo.trim() : "" };
                setCurrentClass(updatedPeriod);
                console.log("Current Period:", updatedPeriod);
            }
        }
    }, [Schedule]);

    return (
        <div className={styles.middle_column}>
            <div className={styles.title_section}>
                <div className={styles.overlay}>
                    <div className={styles.header}>
                        <div className={styles.current_date}>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                        <div className={styles.current_time}>{new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}</div>
                    </div>
                    <div className={styles.class_info}>
                        <div className={`${styles.class_card} ${styles.current_class}`}>
                            <h3>Current Class</h3>
                            <p><strong>Subject: </strong>{currentClass.shortName || "--"}</p>
                            <p><strong>Teacher: </strong>{currentClass.Instructor || "--"}</p>
                            <p><strong>Room no: </strong>{currentClass.roomNo || "--"}</p>
                        </div>
                        <div className={`${styles.class_card} ${styles.next_class}`}>
                            <h3>Next Class</h3>
                            <p><strong>Subject: </strong>{nextClass.shortName || "--"}</p>
                            <p><strong>Teacher: </strong>{nextClass.Instructor || "--"}</p>
                            <p><strong>Room no: </strong>{nextClass.roomNo || "--"}</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className={styles.timeline}>
                <div className={styles.title_wrapper}>
                    <div className={styles.icon_box}>
                        <ion-icon name="book-outline" role="img" className="md hydrated" aria-label="book outline"></ion-icon>
                    </div>
                </div>

                <ul className={styles.timeline_list}>
                    {Schedule.map((period, index) => {
                        if (!period.course) {
                            return (
                                <p key={index} className={styles.break}> Break </p>
                            )
                        }
                        const isInRange = isCurrentTimeWithinRange(period.start, period.end);
                        return (
                            <li key={index} className={`${styles.timeline_item} ${isInRange ? styles.active_class : ""}`}>
                                <h4 className={styles.timeline_item_title}>{period.start} - {period.end}</h4>
                                <p className={styles.timeline_text}>{period.course}</p>
                                <p className={styles.timeline_text}>{period.name}</p>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}

export default HighLightedContent;
