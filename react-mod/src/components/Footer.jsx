import React from "react";

import "./Footer.css";

function Footer() {
    return (
        <footer className="footStyle">
            <nav>
                <ul className="footerLinks">
                    <li><a target="_blank" rel="noreferrer" href="https://github.com/RileyAlt"> Github</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/riley-altenburg-3a3908166/"> LinkedIn</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/riley.altenburg.7/">Facebook</a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;