
import styles from "../assets/css/Schedule.module.css";
import GetTimeTable from "../assets/Data/TimeTable.jsx";
import React,{useEffect, useState} from "react";

function HighLightedContent(){
    const [TimeTable,newTimeTable] = useState(GetTimeTable(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()]));

    console.log(TimeTable);

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
                                <p><strong>Subject: </strong>FCS</p>
                                <p><strong>Teacher: </strong>Dr. Rinkaj Goyal</p>
                                <p><strong>Room no: </strong>E110</p>
                            </div>
                            <div className={`${styles.class_card} ${styles.next_class}`}>
                                <h3>Next Class</h3>
                                <p><strong>Subject: </strong>DS</p>
                                <p><strong>Teacher: </strong>Navin Rajpal</p>
                                <p><strong>Room no: </strong>E110</p>
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
                        {TimeTable.map((period,index)=>{
                            if(!period.course){
                                return(
                                <p className={styles.break}> Break </p>
                                )
                            }
                            return (
                                <li key={index} className={`${styles.timeline_item}`}>
                                <h4 className={styles.timeline_item_title}>{period.start}- {period.end}</h4>
                                <p className={styles.timeline_text}>{period.course}</p>
                                <p className={styles.timeline_text}>{period.name}</p>
                            </li>
                            )
                        })}
{/*                         
                        <li className={styles.timeline_item}>
                            <h4 className={styles.timeline_item_title}>4:30 - 5:30</h4>
                            <p className={styles.timeline_text}>subject</p>
                        </li> */}
                    </ul>
                </section>
            </div>
    )
}

export default HighLightedContent;