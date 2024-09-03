import '../assets/css/index.css';

import NavBar from '../Components/NavBar.jsx';
import TimeTableContent from '../Components/TimeTableContent.jsx'

function TimeTable() {


    return (
        <div className="container">
            <NavBar />
            <TimeTableContent />
        </div>
    );
}

export default TimeTable;
