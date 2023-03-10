import React from 'react'
import logo from '../netflix/logo.png'
import MobileNavbar from './MobileNavbar'
import styles from './Navbar.module.css'
import SecondaryNav from './SecondaryNav'

const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <div className={styles.mainNavbar}>
                <img src={logo} alt="" className={styles.logo} />
                <MobileNavbar />
                <ul className={styles.navbarList}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">TV Shows</a></li>
                    <li><a href="/">Movies</a></li>
                    <li><a href="/">New & Popular</a></li>
                    <li><a href="/">My List</a></li>
                </ul>
            </div>
            <SecondaryNav />
        </div>

    )
}

export default Navbar
