import React from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'

export default function PrimaryNavbar() {
    return (
        <>
            <nav className="navbar">
                <ul className="menu-item">
                    <li className="nav-item">
                        <Link to="/" className='nav-links' >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/deals" className='nav-links' >Deals</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
