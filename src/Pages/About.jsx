import '../assets/css/index.css';
import NavBar from '../Components/NavBar.jsx';

function About() {    
    return (
        <div className="container">
            <NavBar onCalendarClick={toggleCalendarVisibility} />
            "about"
        </div>
    );
}

export default About;
