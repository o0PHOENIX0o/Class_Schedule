import React, { useEffect, useRef } from 'react';
import '../assets/css/index.css';

import NavBar from '../Components/NavBar.jsx';
import Syllabus_content from '../Components/syllabus_content.jsx';




function Syllabus() {
    return (
        <div className="container">
            <NavBar/>
            <Syllabus_content/>

        </div>
    );
}

export default Syllabus;
