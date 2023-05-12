import React from "react";
import resumeAsPDF from '../assets/RileyAltenburgResumePDF.pdf';

import './Resume.css';



const Resume = () => {
    return (
       <div className="resumePage">
        <div className="resumeLink">
            <p>Resume</p>
            <a href={resumeAsPDF} download="RileyAltenburgResume.pdf">Download Resume</a>
            <hr />
        </div>
        <div className="resumeskills">
            <p>Skills and Proficiencies:</p>

            <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Communication</li>
                <li>Problem Solving</li>
            </ul>
        </div>
       </div>
    )
}

export default Resume;
