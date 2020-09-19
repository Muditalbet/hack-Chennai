import React from 'react';
import { Link } from 'react-router-dom'
import '../CSS/Footer.css';

export default function Footer() {
    return (
        <div className='footer'>
            <h1>This is Footer</h1>
            <Link className='button' to='test'>Get Started</Link>
        </div>
        
    )
}
