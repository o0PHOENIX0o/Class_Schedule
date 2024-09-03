import style from '../assets/css/About.module.css'
const AboutContent = function(){
    return(
        <div className={style.container}>
            <h1>About My Schedule Website</h1>
            <p>Hey there! Welcome to the <span className={style.highlight}>Schedule Website</span>—your new best friend for keeping track of classes and staying on top of your syllabus. Whether you’re trying to figure out where you need to be next or checking up on what’s coming up, we’ve got you covered.</p>

            <h2>What Can You Do Here?</h2>
            <p>We’ve packed this site with all the tools you need to manage your academic life like a pro. Here’s a quick look at what you can do:</p>
            <ul>
                <li><span className={style.highlight}>Home Page:</span> Find out what class is happening now, what's up next, and see your whole week at a glance. Plus, use the calendar to look up any specific day you’re interested in.</li>
                <li><span className={style.highlight}>Syllabus Page:</span> Need to check the syllabus for a subject? Just click on the subject button, and boom—you've got all the details right there.</li>
                <li><span className={style.highlight}>Timetable Page:</span> Want to see your schedule for a particular day? Click on any day of the week, and see what classes are lined up.</li>
            </ul>

            <h2>Why Choose This Website?</h2>
            <p>We know staying organized can be tough, especially with everything else you’ve got going on. That’s why I created the <span className={style.highlight}>Schedule Website</span>—to make life a little easier. Here’s how I can help you out:</p>
            <ul>
                <li>Get a quick look at what’s happening now and what's coming up next</li>
                <li>Access all your syllabuses whenever you need them</li>
                <li>Keep your academic schedule on track even if your career isn't</li>
            </ul>

            <h2>Get in Touch</h2>

                <div className={style.social_icons}>
                    <a href="https://github.com/o0PHOENIX0o" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/ujjwal-lehri" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="mailto:your-ujjwallehri@33.com"><i className="fas fa-envelope"></i></a>
                </div>
              
            </div>
    )
}

export default AboutContent