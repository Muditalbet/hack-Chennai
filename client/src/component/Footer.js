import React from 'react';
import { Link } from 'react-router-dom'
import '../CSS/Footer.css';
import Logo from '../Pics/logo.png'
export default function Footer() {
    return (
        <div className='footer'>
            <div>
            <Link to='/'>
                <img src={Logo} alt='logo'/>
            </Link>
            </div>
            <div className='homeHeadingButtons2'>
                    <Link to='/disasters'>Types of Disasters</Link>
                </div>
        </div>
        
    )
}
