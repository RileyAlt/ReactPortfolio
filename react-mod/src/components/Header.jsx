import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Link to="/">Riley Altenburg</Link>
            <Link to="/AboutMe">About Me</Link>
            <Link to="/Portfolio">Portfolio</Link>
            <Link to="/ContactForm">Contact Me</Link>
            <Link to="/Resume">Resume</Link>
        </header>
    )
}

export default Header;