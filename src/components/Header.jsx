import React from "react";
import { useNavigate } from 'react-router-dom';

import './Header.css';

function Header(props) {
    const [activePath, setActivePath] = React.useState(window.location.pathname);
    const navigate = useNavigate();

    React.useEffect(() => {
        if(activePath == '/') {
            setActivePath('/AboutMe')
        }
    }, []);

    const headerLinks = [
        {
            path: '/AboutMe',
            text: 'About Me'
        },
        {
            path: '/Portfolio',
            text: 'Portfolio'
        },
        {
            path: '/ContactForm',
            text: 'Contact Me'
        },
        {
            path: '/Resume',
            text: 'Resume'
        }
    ];

    const handleNavigation = (path) => {
        setActivePath(path);
        navigate(path);
    };

    return (
        <header className="header">
            <h1 className="name"> Riley Altenburg</h1>
            <nav>
                <ul className="headerLinks">
                    {
                        headerLinks.map((link) => {
                            return(
                                <li key={link.path} className={activePath.startsWith(link.path) ? 'active' : 'not-active'}>
                                    <a onClick={() => handleNavigation(link.path)}>{link.text}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;