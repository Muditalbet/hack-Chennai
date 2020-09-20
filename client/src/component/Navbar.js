import React from 'react'
import '../CSS/Navbar.css';
import { Link } from 'react-router-dom'
import Logo from '../Pics/logo.png';
export default function Navbar() {
    return (
        <div className='nav'>
            <Link to='/'>
                <img src={Logo} alt='logo'/>
            </Link>
            <p className='slogan'>
                Your Safety Is Everything To Us
            </p>
        </div>
    )
}
