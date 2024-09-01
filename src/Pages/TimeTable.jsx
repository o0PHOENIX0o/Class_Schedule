import '../assets/css/index.css';

import NavBar from '../Components/NavBar.jsx';

function TimeTable() {


    return (
        <div className="container">
            <NavBar onCalendarClick={toggleCalendarVisibility} />
            "time Table"
        </div>
    );
}

export default TimeTable;
