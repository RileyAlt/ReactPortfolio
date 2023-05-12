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
        <div className="main">
            <section className="work">
                <img src={Project3} style={{width: '400px'}} alt="blue smoke" />
                <a target="_blank" rel="noreferrer"  href="https://fitnesstalks.herokuapp.com/"> Go to Project</a>
                <a target="_blank" rel="noreferrer"  href="https://github.com/Safi1317/Fitness-Talks"> Go to GitHub</a>
                <div className='photo-name'><span className="text-border"><strong> Second Group Project 2</strong></span></div>
            </section>

            <section className="work">
                <a target="_blank" rel="noreferrer"  href="https://gatewayss.github.io/recipes-for-disaster/"> Go to Project</a>
                <a target="_blank" rel="noreferrer"  href="https://github.com/Gatewayss/recipes-for-disaster"> Go to GitHub</a>
                    <img src={Project2} style={{width: '400px'}} alt="blue smoke" />
                <div className='photo-name'><span className="text-border"><strong> Frst Group Project </strong></span></div>
            </section>

            <section className="work">
                <a target="_blank" rel="noreferrer"  href="https://rileyalt.github.io/module-1-uofm/Develop/index.html#social-media-marketing"> Go to Project</a>
                <a target="_blank" rel="noreferrer"  href="https://github.com/RileyAlt/module-1-uofm"> Go to GitHub</a>
                    <img src={Project1} style={{width: '400px'}}  alt="blue smoke" />
                <div className='photo-name'><span className="text-border"><strong> First Project</strong></span></div>
            </section>
            
            <section className="work">
                <a target="_blank" rel="noreferrer"  href="https://github.com/RileyAlt/ExpressJS-NoteTaker"> Go to Project</a>
                <a target="_blank" rel="noreferrer"  href="https://github.com/RileyAlt/daily-planner-of-champions"> Go to GitHub</a>
                <img src={Project4} style={{width: '400px'}} alt="blue smoke" />
                <div className='photo-name'><span className="text-border"><strong> ExpressJs NoteTaker</strong></span></div>
            </section>

            <section className="work">
                <a target="_blank" rel="noreferrer"  href="https://github.com/RileyAlt/SQL_employeeTracker"> Go to GitHub</a>
                <img src={Project5} style={{width: '400px'}} alt="blue smoke" />
                <div className='photo-name'><span className="text-border"><strong> SQL Employee Tracker</strong></span></div>
            </section>

            <section className="work">
                <a target="_blank" rel="noreferrer"  href="https://github.com/RileyAlt/ORM_eCommerce_Back_End"> Go to GitHub</a>
                <img src={Project6} style={{width: '400px'}} alt="blue smoke" />
                <div className='photo-name'><span className="text-border"><strong> ORM Backend</strong></span></div>
            </section>
        </div>
    )
}

export default PortfolioWork;