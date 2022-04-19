import React from 'react'
import Image from '../Images/React-logo.png'

export default function NavBar() {
    return (
    <div className='navigation'>    
            <div className='left-navigation'>
                <img
                    src={Image}
                    alt="React Logo!"
                />
                <h2>React Facts</h2>
            </div>
            <div className="right-navigation">
                <h4>React Course-Project 1</h4>
            </div>
    </div>
    )
}