import React,{useState, useEffect} from "react";
import styles from "../assets/css/Syllabus_content.module.css"
import GetSyllabusData from '../assets/Data/Syllabus.jsx';
import Resources from "./Resources.jsx";

const Syllabus_content = function(){
    const [data,setData] = useState(GetSyllabusData('FCS'));
    const [subject,SetSub] = useState("FCS");

    const getSylabus = function(event){
        let element = event.target;
        const newData = GetSyllabusData(element.innerText);
        SetSub(element.innerText);
        setData(newData);
        document.querySelectorAll(`.${element.className}`).forEach(el => el.classList.remove(styles.activeBtn));
        element.classList.add(styles.activeBtn);
    }

    // useEffect(()=>{
    //     setData("FCS");
    // },[subject])
    


    return(
        <div className={styles.container}>
            <h1>Syllabus</h1><hr />

            <ul className={styles.Selectors}>
                <li onClick={getSylabus} className={`${styles.btn}  ${styles.activeBtn}`}>FCS</li>
                <li onClick={getSylabus} className={styles.btn}>DS</li>
                <li onClick={getSylabus} className={styles.btn}>OS</li>
                <li onClick={getSylabus} className={styles.btn}>OOP</li>
                <li onClick={getSylabus} className={styles.btn}>DBMS</li>
                <li onClick={getSylabus} className={styles.btn}>DLCD</li>
                <li onClick={getSylabus} className={styles.btn}>ECO</li>
                <li onClick={getSylabus} className={styles.btn}>C</li>
                <li onClick={getSylabus} className={styles.btn}>Maths</li>
            </ul>
            <hr />

            <div className={styles.content}>
                <div className={styles.title}>
                    <h2>{data.Subject} ({data.ShortName})</h2>
                    <h4>faculty: {data.Faculty}</h4>
                   
                    <h4>Subject Code: {data.SubjectCode}</h4>
                    <h4>credits:{data.Credit}</h4>
                </div>
                <div className={styles.subject_container}>
                    {data.syllabus.map((syllabus,index)=>(
                        <div className={styles.subject} key={index}>
                        <h3>Unit: {syllabus.unit}</h3>
                        <div className={styles.timeline}>
                            <div className={styles.timeline_item}>
                                <h4>Title: {syllabus.title}</h4>
                                <h4>Topics:</h4>
                                <ul>
                                    {syllabus.topics.map((topic,index)=>(
                                        <li key={index}>{topic}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    ))}
                    
                </div>

            </div>
            <hr />
            <section>
                <div className={styles.title}> 
                    <h2>Resources </h2>
                </div>
                <Resources subject={subject}/>
            </section>
        </div>
    )
}

export default Syllabus_content;