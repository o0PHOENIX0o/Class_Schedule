
import styles from "../assets/css/Syllabus_Content.module.css"

const Syllabus_Content = function(){
        // <div className={styles.container}>
        //     <ul className={styles.Selectors}>
        //         <li className={styles.btn}>FCS</li>
        //         <li className={styles.btn}>DS</li>
        //         <li className={styles.btn}>OS</li>
        //         <li className={styles.btn}>OOP</li>
        //         <li className={styles.btn}>DBMS</li>
        //         <li className={styles.btn}>DLCD</li>
        //         <li className={styles.btn}>ECO</li>
        //         <li className={styles.btn}>C</li>
        //         <li className={styles.btn}>Maths</li>
        //     </ul>
        //     <hr />

        //     <div className="content">
        //         <div className={styles.title}>
        //             <h2>Syllabus FCS</h2>
        //             <h4>ICT 201</h4>
        //         </div>
        //         <ul className="subject_container">
        //             <h3>Unit 1</h3>
        //             <h4>TItle: Sets, Logic, and Relation</h4>
        //             <h4>Topics:</h4>
        //             <ul>
        //                 <li>Sets, Subsets, powerset, operations on sets</li>
        //                 <li>Propositional Logic, Rules of inferences in propositional logic</li>
        //                 <li>Quantifiers, Predicates and validity, Predicate Logic, normal forms</li>
        //                 <li>Proof Techniques: Direct Proof, Proof by Contraposition, proof by contradiction</li>
        //             </ul>
        //         </ul>
        //     </div>
        // </div>
    return(
        <div className={styles.container}>
            <ul className={styles.Selectors}>
                <li className={`${styles.btn}  ${styles.activeBtn}`}>FCS</li>
                <li className={styles.btn}>DS</li>
                <li className={styles.btn}>OS</li>
                <li className={styles.btn}>OOP</li>
                <li className={styles.btn}>DBMS</li>
                <li className={styles.btn}>DLCD</li>
                <li className={styles.btn}>ECO</li>
                <li className={styles.btn}>C</li>
                <li className={styles.btn}>Maths</li>
            </ul>
            <hr />

            <div className={styles.content}>
                <div className={styles.title}>
                    <h2>Syllabus FCS</h2>
                    <h4>ICT 201</h4>
                </div>
                <div className={styles.subject_container}>
                    <div className={styles.subject}>
                        <h3>Unit 1</h3>
                        <div className={styles.timeline}>
                            <div className={styles.timeline_item}>
                                <h4>Title: Sets, Logic, and Relation</h4>
                                <h4>Topics:</h4>
                                <ul>
                                    <li>Sets, Subsets, powerset, operations on sets</li>
                                    <li>Propositional Logic, Rules of inferences in propositional logic</li>
                                    <li>Quantifiers, Predicates and validity, Predicate Logic, normal forms</li>
                                    <li>Proof Techniques: Direct Proof, Proof by Contraposition, proof by contradiction</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.subject}>
                        <h3>Unit 1</h3>
                        <div className={styles.timeline}>
                            <div className={styles.timeline_item}>
                                <h4>Title: Sets, Logic, and Relation</h4>
                                <h4>Topics:</h4>
                                <ul>
                                    <li>Sets, Subsets, powerset, operations on sets</li>
                                    <li>Propositional Logic, Rules of inferences in propositional logic</li>
                                    <li>Quantifiers, Predicates and validity, Predicate Logic, normal forms</li>
                                    <li>Proof Techniques: Direct Proof, Proof by Contraposition, proof by contradiction</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Syllabus_Content;