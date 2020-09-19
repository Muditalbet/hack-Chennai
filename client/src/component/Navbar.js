import React from 'react'
import '../CSS/Navbar.css';
import Logo from '../Pics/logo.png';
export default function Navbar() {
    return (
        <div className='nav'>
            <img src={Logo} alt='logo' />
            <p className='slogan'>
                Your Safety Is Everything To Us
            </p>
        </div>
    )
}
