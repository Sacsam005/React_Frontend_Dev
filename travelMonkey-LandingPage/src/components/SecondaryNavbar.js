import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'



export default function SecondaryNavbar() {


    return (
        <>
            <nav className="navbar">
                <ul className="menu-item">
                    <li className="nav-item">
                        <Link to="/goto" className='nav-links' >Go To</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/todo" className='nav-links'>Things To Do</Link>
                    </li>
                    <li className='nav-item btn-info'>
                        <Link to="/signup" className='nav-links'>SignUp</Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}
