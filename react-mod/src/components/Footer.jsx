import React from "react";
import { Link } from 'react-router-dom';

function Footer (){
    return (
        <footer className="header">
            <Link to="/https://github.com/RileyAlt"> GitHub</Link>
            <Link to="/https://www.linkedin.com/in/riley-altenburg-3a3908166/"> LinkedIn</Link>
            <Link to="/https://www.facebook.com/riley.altenburg.7/"> FaceBook</Link>
        </footer>
    )
}


export default Footer;