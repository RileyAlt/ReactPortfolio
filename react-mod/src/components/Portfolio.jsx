import React from "react";
import Project1 from '../assets/digital-marketing-meeting.jpg';
import Project2 from '../assets/groupproj1.png';
import Project3 from '../assets/fitness.png';
import Project4 from '../assets/running-app.png';
import Project5 from '../assets/WorkingApp.png';
import Project6 from '../assets/WorkingCategory.png';


import './Portfolio.css';

const PortfolioWork = () => {
    return (
        <div className="project-list">
            <div className="project">
                <img src={Project3} className="projectimg" alt="training sports app" />
                <div className="projectDetails">
                    <h2>Second Group Project 2</h2>
                    <div className="projectLinks">
                        <a target="_blank" rel="noreferrer"  href="https://fitnesstalks.herokuapp.com/"> Go to Project</a>
                        <a target="_blank" rel="noreferrer"  href="https://github.com/Safi1317/Fitness-Talks"> Go to GitHub</a>
                    </div>
                </div>
            </div>

            <div className="project">
                <img src={Project2} className="projectimg" alt="cant decide what to eat" />
                <div className="projectDetails">
                    <h2>First Group Project </h2>
                    <div className="projectLinks">
                        <a target="_blank" rel="noreferrer"  href="https://gatewayss.github.io/recipes-for-disaster/"> Go to Project</a>
                        <a target="_blank" rel="noreferrer"  href="https://github.com/Gatewayss/recipes-for-disaster"> Go to GitHub</a>
                    </div>
                </div>
            </div>

            <div className="project">
                <img src={Project1} className="projectimg" alt="debugging" />
                <div className="projectDetails">
                    <h2>First Project </h2>
                    <div className="projectLinks">
                        <a target="_blank" rel="noreferrer"  href="https://rileyalt.github.io/module-1-uofm/Develop/index.html#social-media-marketing"> Go to Project</a>
                        <a target="_blank" rel="noreferrer"  href="https://github.com/RileyAlt/module-1-uofm"> Go to GitHub</a>
                    </div>
                </div>
            </div>

            <div className="project">
                <img src={Project4} className="projectimg" alt="note taker" />
                <div className="projectDetails">
                    <h2>ExpressJS NoteTaker</h2>
                    <div className="projectLinks">
                        <a target="_blank" rel="noreferrer"  href="https://github.com/RileyAlt/ExpressJS-NoteTaker"> Go to Project</a>
                        <a target="_blank" rel="noreferrer"  href="https://github.com/RileyAlt/daily-planner-of-champions"> Go to GitHub</a>
                    </div>
                </div>
            </div>


            <div className="project">
                <img src={Project5} className="projectimg" alt="SQL EmployeeTracker" />
                <div className="projectDetails">
                    <h2>SQL EmployeeTracker</h2>
                    <div className="projectLinks">
                        <a target="_blank" rel="noreferrer"  href="https://github.com/RileyAlt/SQL_employeeTracker"> Go to GitHub</a>
                    </div>
                </div>
            </div>


            <div className="project">
                <img src={Project6} className="projectimg" alt="ORM Backend" />
                <div className="projectDetails">
                    <h2>SORM Backend</h2>
                    <div className="projectLinks">
                        <a target="_blank" rel="noreferrer"  href="https://github.com/RileyAlt/ORM_eCommerce_Back_End"> Go to GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioWork;