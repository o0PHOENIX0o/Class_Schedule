
import styles from "../assets/css/Schedule.module.css";

function HighLightedContent(){
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
                        <li className={`${styles.timeline_item} ${styles.active_class}`}>
                            <h4 className={styles.timeline_item_title}>9:00 - 10:00</h4>
                            <p className={styles.timeline_text}>subject</p>
                        </li>
                        <li className={styles.timeline_item}>
                            <h4 className={styles.timeline_item_title}>10:00 - 11:00</h4>
                            <p className={styles.timeline_text}>subject</p>
                        </li>
                        <li className={styles.timeline_item}>
                            <h4 className={styles.timeline_item_title}>11:00 - 12:00</h4>
                            <p className={styles.timeline_text}>subject</p>
                        </li>
                        <li className={styles.timeline_item}>
                            <h4 className={styles.timeline_item_title}>12:00 - 1:00</h4>
                            <p className={styles.timeline_text}>subject</p>
                        </li>
                        <li className={styles.timeline_item}>
                            <h4 className={styles.timeline_item_title}>1:00 - 1:30</h4>
                            <p className={styles.timeline_text}>subject</p>
                        </li>
                        <li className={styles.timeline_item}>
                            <h4 className={styles.timeline_item_title}>1:30 - 2:30</h4>
                            <p className={styles.timeline_text}>subject</p>
                        </li>
                        <li className={styles.timeline_item}>
                            <h4 className={styles.timeline_item_title}>2:30 - 3:30</h4>
                            <p className={styles.timeline_text}>subject</p>
                        </li>
                        <li className={styles.timeline_item}>
                            <h4 className={styles.timeline_item_title}>3:30 - 4:30</h4>
                            <p className={styles.timeline_text}>subject</p>
                        </li>
                        <li className={styles.timeline_item}>
                            <h4 className={styles.timeline_item_title}>4:30 - 5:30</h4>
                            <p className={styles.timeline_text}>subject</p>
                        </li>
                    </ul>
                </section>
            </div>
    )
}

export default HighLightedContent;