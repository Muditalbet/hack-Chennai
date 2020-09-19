import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/home.css'

export default function Home() {
    return (
        <div className='homeContent'>
            <div className='headingArea'>
                <div className='homeHeadingText'>
                    <h1>Disaster Management</h1>
                    <p>A website for Disaster Management</p>
                </div>
                <div className='homeHeadingButtons'>
                    <Link to='noth'>Get Started ></Link>
                </div>
            </div>
            <div className='mainContentHome'>
                <div className='examples'>
                    <div>
                        <h1>1920 Haiyuan earthquake</h1>
                        <p>On Dec. 16, 1920, a strong earthquake hit Haiyuan Country in central China. According to a 2010 study presented at a conference in honor of the quake's 90th anniversary, 273,400 people died in the quake, most buried in landslides caused by the ground shaking.</p>
                    </div>
                    <div>
                        <img src={require('../Pics/T4maQ8QNZ4NknmTcdadbbe-970-80.jpg')} ></img>
                    </div>
                </div>
                <div className='examples'>
                    <div>
                        <img src={require('../Pics/T4maQ8QNZ4NknmTcdadbbe-970-80.jpg')} ></img>
                    </div>
                    <div>
                        <h1>1920 Haiyuan earthquake</h1>
                        <p>On Dec. 16, 1920, a strong earthquake hit Haiyuan Country in central China. According to a 2010 study presented at a conference in honor of the quake's 90th anniversary, 273,400 people died in the quake, most buried in landslides caused by the ground shaking.</p>
                    </div>
                </div>
                <div className='examples'>
                    <div>
                        <h1>1920 Haiyuan earthquake</h1>
                        <p>On Dec. 16, 1920, a strong earthquake hit Haiyuan Country in central China. According to a 2010 study presented at a conference in honor of the quake's 90th anniversary, 273,400 people died in the quake, most buried in landslides caused by the ground shaking.</p>
                    </div>
                    <div>
                        <img src={require('../Pics/T4maQ8QNZ4NknmTcdadbbe-970-80.jpg')} ></img>
                    </div>
                </div>
            </div>
            <div className='homeHeadingButtons'>
                    <Link to='test'>Get Started</Link>
            </div>
        </div>
    )
}
