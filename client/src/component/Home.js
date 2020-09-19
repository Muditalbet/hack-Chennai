import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/home.css'
import About from '../Pics/about.png';
import Haiti from '../Pics/haiti.jpg';
import Sandy from '../Pics/sandy.jpg';
import Haiyan from '../Pics/haiyan.jpg';
import Tree from '../Pics/tree.jpg';

export default function Home() {
    return (
        <div className='homeContent'>
            <div className='headingArea'>
                <div className='homeHeadingText'>
                    <h1>Disaster Prevention and Management</h1>
                    <p>A Website for Managing Disasters</p>
                </div>
                <div className='homeHeadingButtons'>
                    <Link to='test'>Get Started</Link>
                </div>
            </div>
            <h1 className='aboutHead'>ABOUT US</h1>
            <div className='about'>
                <span>
                    Disaster Prevention and Management (DPM) advances knowledge in the field of disaster risk reduction and management. It particularly welcomes contributions which emphasise multi-disciplinary and multi-actor perspectives on innovative topics related to disaster risk reduction and management which can be used during real-time disaster situations. With keeping in mind the steps for a particular disastorous situation mentioned we can overcome the losses to some extent. 
                </span>
                <img src={About} /> 
            </div>
            <div className='mainContentHome'>
                <h1 className='somedis'>Some of the Recent Major Disasters that Changed the World</h1>
                <div className='examples'>
                    <div className='dis'>
                        <div className='content'>
                        <h1>HAITI EARTHQUAKE (2010)</h1>
                        <p>Even before the magnitude 7.0 earthquake, political conflict and a faltering economy had left more than 70% of Haitians in poverty – a cycle of instability that continues today. Infrastructure was weak, with many living in shantytowns.

                        But the earthquake’s impact was hard to fathom. More than 220,000 people – two percent or more of the population – were killed. One and a half million were displaced.
                        </p>
                        </div>
                        <div className='photo'> 
                            <img src={Haiti} ></img>
                        </div>
                    </div>
                    <div className='dis'>
                        <div className='photo'> 
                            <img src={Sandy} ></img>
                        </div>
                        <div className='content'>
                        <h1>HURRICANE SANDY (2012)</h1>
                        <p>A predicted Category 1 storm quickly morphed into the largest hurricane on record (at the time), causing widespread havoc through the Caribbean before crashing into the United States’ eastern seaboard, taking large swathes of New Jersey and New York. People were choked off from power and heat for days, with many trapped in high-rise buildings, unable to evacuate or procure supplies. Over 100 people died in the United States alone, many from exposure or related conditions.
                        </p>
                        </div>
                    </div>
                    <div className='dis'>
                        <div className='content'>
                        <h1>TYPHOON HAIYAN (2013)</h1>
                        <p>This Category 5 “super typhoon” crashed into the Philippines with wind speeds hovering near 200 miles per hour – at the time, the strongest cyclone ever. No matter what, Haiyan was going to be deadly. The storm surge – rising above 20 feet in some areas – shocked the world. It swept through densely populated areas, including the major city of Tacloban, leaving devastation in its wake. The storm killed approximately 7,000 people and displaced more than 4 million.
                        </p>
                        </div>
                        <div className='photo'> 
                            <img src={Haiyan} ></img>
                        </div>
                    </div>
                    <div className='dis'>
                        <div className='photo'> 
                            <img src={Tree} ></img>
                        </div>
                        <div className='content'>
                        <h1>GLOBAL WILDFIRES (2019)</h1>
                        <p>Slash-and-burn agriculture caused massive, devastating wildfires in both the Amazon and Indonesia, sickening hundreds of thousands and destroying treasured forest and rainforest lands.And months after the Camp Fire killed 85 people in California and sent shock waves through the United States, a spate of wildfires erupted across the state, displacing hundreds of thousands and threatening a future of large-scale, climate-fueled blazes.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
