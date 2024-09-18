import styles from "../assets/css/Resources.module.css";

const resourceData = {
    "FCS": [
        {
            "title": "Youtube Playlist",
            "link": "https://youtube.com/playlist?list=PLU6SqdYcYsfKqtoZ2uDwgMya5m_x6cbOG&si=hMiqmxpHwk4zsJdK"
        },
        {
            "title": "Notes",
            "link": "/FCS/NOTES/DM unit 1and 2.pdf",
        },
        {
            "title": "PYQs",
            "link": "/FCS/PYQs/AKASH DM.pdf"
        },
        {
            "title": "PYQs",
            "link": "/FCS/PYQs/AKASH DM.pdf"
        },
        {
            "title": "PYQs",
            "link": "/FCS/PYQs/DM.pdf"
        },
        {
            "title": "PYQs",
            "link": "/FCS/PYQs/MidTerm 2023.jpg"
        }
    ],
    "DS": [
        {
            "title": "Notes Unit(3 & 4)",
            "link": "/DS/NOTES/Data Structure Unit(3 &4) Notes(SnapED).pdf",
        },
        {
            "title": "Complete Notes",
            "link": "/DS/NOTES/Data structures complete notes.pdf",
        },
        {
            "title": "Notes unit(1)",
            "link": "/DS/NOTES/DSA (UNIT-1).pdf",
        },
        {
            "title": "Notes (short notes)",
            "link": "/DS/NOTES/DSA Short Notes.pdf",
        },
        {
            "title": "Notes unit(2)",
            "link": "/DS/NOTES/DSA(UNIT-2).pdf",
        },
        {
            "title": "PYQs",
            "link": "/DS/PYQs/Data Structures MidTerm solution.pdf"
        },
        {
            "title": "PYQs",
            "link": "/DS/PYQs/Ds-Aakash.pdf"
        }
    ],
    "DLCD": [
        {
            "title": "Notes Unit(1)",
            "link": "/DLCD/NOTES/DLCD UNIT-1.pdf",
        },
        {
            "title": "Notes Unit(2)",
            "link": "/DLCD/NOTES/DLCD UNIT-2.pdf",
        }
    ],
    "OOP": [
        {
            "title": "Important Ques",
            "link": "/OOP/Important Ques/OOPS Question Bank.pdf",
        },
        {
            "title": "Notes Unit(1,2)",
            "link": "/OOP/NOTES/Unit 1 and 2 Notes OOPS.pdf",
        },
        {
            "title": "PYQs",
            "link": "/OOP/PYQs/OOPs midterm Solution.pdf",
        }

    ]
};

const LinksData = [
    {
        "title": "Tentative DateSheet",
        "url" : "https://docs.google.com/document/d/1LSpR1P7IwmunF0rD428wFR0xSxhCTsKMdNQFwCzVpXI/edit?usp=sharing"
    },
    {   
        "title": "DS programs",
        "url": "https://github.com/o0PHOENIX0o/CSE"
    }
];

const Resources = ({ subject }) => {
    console.log(subject);
    if(subject==="" || !(subject in resourceData)){
        return(
            <h4>unavailable</h4>
        )
    }
    return (
        <>
            <h4>Please note that the provided resources (including notes, links, or other content) are not my own, and I take no responsibility for their accuracy or content. If you find any errors or issues, feel free to contact me</h4>
            <ul className={styles.Selectors}>
                {resourceData[subject].map((data, i) => {
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
        </>
    )
}

export default Resources
export {LinksData}
