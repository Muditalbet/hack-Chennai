import React from 'react';
import { Link } from 'react-router-dom'
import '../CSS/Footer.css';
import Logo from '../Pics/logo.png'
export default function Footer() {
    return (
        <div className='footer'>
            <Link to='/'>
                <img src={Logo} />
            </Link>
        </div>
        
    )
}
