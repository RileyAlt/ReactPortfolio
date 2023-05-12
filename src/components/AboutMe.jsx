import React from "react";
import myImage from '../assets/profilepic.png';

import './AboutMe.css';

const AboutMe = () => {

    return (
        <div className="aboutMeContainer">
            <img className="imgsrc"  src={myImage} alt="Headshot good looking dude " />
            <p className="biograph"> 
                Wrestling was the first thing I truly enjoyed and Loved to do, as life went along
                 and sports competitive sense went away, I was in search of something new. 
                 I started with the mortgage industry, wanting to work with clients helping people get into homes, 
                 I had to rely alot on the clients to get items to me and i didnt link chasing down people for me to do my work.
                 It became less and less of a passion for me. This is where software development comes in. 
                 I get all the great aspects of challengeing myself everyday, and not having to chase people down to do work. 
                 The work is there in front of me.
            </p>
        </div>  
    )
}


export default AboutMe;