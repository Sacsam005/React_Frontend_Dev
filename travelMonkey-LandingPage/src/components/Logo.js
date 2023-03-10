import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


export default function Logo() {
    return (
        <>
            <Link to="/" className="navbar-logo">
                <img src={require("./img/logo.png")} alt="logo" style={{ width: "200px" }} />
            </Link>
        </>
    )
}
