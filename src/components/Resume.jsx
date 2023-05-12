import React from "react";
import resumeAsPDF from '../assets/RileyAltenburgResumePDF.pdf';
import downloadLogo from '../assets/downloadLogo.png'
import './Resume.css';

const Resume = () => {
    return (
       <div className="resumePage">
        <div className="resumeLink">
            <a className="download-link" href={resumeAsPDF} download="RileyAltenburgResume.pdf">
                Download Resume
                <img src={downloadLogo} className="download-icon"/>
            </a>
        </div>
        <div className="resumeskills">
            <p className="skillsHeader">Skills and Proficiencies:</p>
            <ul className="skillsList">
                <li>React</li>
                <li>Node.js</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>MongoDB</li>
                <li>Communication</li>
                <li>Problem Solving</li>
            </ul>
        </div>
       </div>
    )
}

export default Resume;
