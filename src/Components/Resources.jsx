import styles from "../assets/css/resourse.module.css";

const resourceData=[
    {
        "title":"Youtube Playlist",
        "link":"https://youtube.com/playlist?list=PLU6SqdYcYsfKqtoZ2uDwgMya5m_x6cbOG&si=hMiqmxpHwk4zsJdK"
    }
];

const Resources = ()=>{
    return (
        <ul className={styles.Selectors}>
                {resourceData.map((data, i) => {
                    return (
                            <a 
                                href={data.link}
                                target="_blank"
                                key={i}
                            >
                                <li className={`${styles.btn}`}> {data.title} </li>
                            </a>
                    );
                })}
            </ul>
    )
}

export default Resources