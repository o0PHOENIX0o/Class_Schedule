import React,{useState, useEffect} from "react";
import styles from "../assets/css/TimeTable.module.css"
import GetSchedule from '../assets/Data/TimeTable.jsx';

const TimeTableContent = function(){
    const DaysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const [data,setData] = useState(GetSchedule("B",new Date().getDay()));
    const [title,setTitle] = useState(DaysArray[new Date().getDay()]);
    const [index,setIndex] = useState(new Date().getDay());
    const [Group, setGroup] = useState("B");
    

    useEffect(() => {
        console.log()
        setData(GetSchedule(Group,index));
        setTitle(DaysArray[index]);
    }, [Group,index])

        
    


    const getTimeTable = function(event){
        const dayIndex = event.target.id;
        setIndex(dayIndex);
        
        document.querySelectorAll(`.${styles.btn}`).forEach(el => el.classList.remove(styles.activeBtn));
        event.target.classList.add(styles.activeBtn);
    }

    const GroupData = function(event){
        setGroup(event.target.textContent);

        document.querySelectorAll(`.${styles.Group_Item}`).forEach(el => el.classList.remove(styles.active_group));
        event.target.classList.add(styles.active_group);
    }

    return(
        <div className={styles.container}>
            <h1>Time Table</h1><hr />
            <ul className={styles.Selectors}>
                {DaysArray.map((d, i) => {
                    return ((i !== 0 && i !== 6) && (
                            <li
                                key={i}
                                id={i}
                                onClick={getTimeTable}
                                className={`${styles.btn} ${i === index ? styles.activeBtn : ''}`}
                            >
                                {d.slice(0, 3)}
                            </li>
                        
                        )
                    );
                })}
            </ul>

            <hr />
            <section className={styles.Group_Section}>
               <div className={styles.Group_content}>
                <h3>Group: </h3>
               <ul className={styles.Group_List}> 
                    <li onClick={GroupData} className={`${styles.Group_Item}`}>A</li>
                    <li onClick={GroupData} className={`${styles.Group_Item} ${styles.active_group}`}>B</li>
                </ul>
               </div>
            </section>

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


