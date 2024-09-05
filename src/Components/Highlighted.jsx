import React, { useEffect, useState } from "react";
import styles from "../assets/css/Schedule.module.css";
import GetSchedule, { isCurrentTimeWithinRange, getNextClass } from "../assets/Data/TimeTable.jsx";

function HighLightedContent({ selectedDay }) {
    const [Schedule, setSchedule] = useState([]);
    const [currentClass, setCurrentClass] = useState({});
    const [nextClass, setNextClass] = useState({});
    const [Group, SetGroup] = useState("B");

    useEffect(() => {
        const scheduleData = GetSchedule(Group, selectedDay);
        setSchedule(scheduleData); 
    }, [Group,selectedDay]);

    useEffect(() => {
        const currentIndex = Schedule.findIndex(period => isCurrentTimeWithinRange(period.start, period.end));
        let currentPeriod = {};
        let nextPeriod = {};

        if (currentIndex !== -1) {
            currentPeriod = Schedule[currentIndex];
            if (currentIndex + 1 < Schedule.length) {
                nextPeriod = Schedule[currentIndex + 1];
                if (nextPeriod.course === '') {
                    nextPeriod = Schedule[currentIndex + 2] || { course: "No upcoming classes" };
                }
            }
        } else {
            nextPeriod = getNextClass(Group, currentIndex, selectedDay);
        }


        if (currentPeriod.course !== currentClass.course) {
            const [subjectCode, roomNo] = currentPeriod.course.split('/');
            setCurrentClass({ ...currentPeriod, roomNo: roomNo ? roomNo.trim() : "" });
        }

        if (nextPeriod.course && nextPeriod.course !== nextClass.course) {
            const [NsubjectCode, NroomNo] = nextPeriod.course.split('/');
            setNextClass({ ...nextPeriod, roomNo: NroomNo ? NroomNo.trim() : "" });
        }
    }, [Group, Schedule, currentClass, nextClass]);


    const GroupData = function(event){
        let element = event.target;
        SetGroup(element.textContent);
        document.querySelectorAll(`.${element.className}`).forEach(el => el.classList.remove(styles.active_group));
        element.classList.add(styles.active_group);
    }

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
                            <p><strong>faculty: </strong>{currentClass.Faculty || "--"}</p>
                            <p><strong>Room no: </strong>{currentClass.roomNo || "--"}</p>
                        </div>
                        <div className={`${styles.class_card} ${styles.next_class}`}>
                            <h3>Next Class</h3>
                            <p><strong>Subject: </strong>{nextClass.shortName || "--"}</p>
                            <p><strong>faculty: </strong>{nextClass.Faculty || "--"}</p>
                            <p><strong>Room no: </strong>{nextClass.roomNo || "--"}</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className={styles.Group_Section}>
               <div className={styles.Group_Content}>
                <h3>Group: </h3>
               <ul className={styles.Group_List}> 
                    <li onClick={GroupData} className={`${styles.Group_Item}`}>A</li>
                    <li onClick={GroupData} className={`${styles.Group_Item} ${styles.active_group}`}>B</li>
                </ul>
               </div>
            </section>
            
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
                                <p key={index} className={`${styles.break}`}> Break </p>
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
