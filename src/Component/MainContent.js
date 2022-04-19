import React from "react";
import Image from '../Images/Group.png'

export default function MainContent() {
    return (
        <div className="main-content">
            <h2>Fun facts about React</h2>
            <ul>
                <li><span>Was first released in 2013</span></li>
                <li><span>Was originally created by Jordan Walke</span></li>
                <li><span>Has well over 100k stars on Github</span></li>
                <li><span>is maintained by Facebook</span></li>
                <li><span>Powers thousands of enterprise apps, including<br /> mobile apps </span></li>
            </ul>
            <img src={Image} alt="React Logo!" className="image" />
        </div>
    )
}