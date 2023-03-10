import React from 'react'
import styles from './Navbar.module.css'

export default function MobileNavbar() {
    return (
        <>
            <ul className={styles.onlyMobile}>
                <div className="btn btn-dark dropdown-toggle text-light" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"><a href="/">Home</a></div>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" href="/">Home</a></li>
                    <li><a class="dropdown-item" href="/">TV Shows</a></li>
                    <li><a class="dropdown-item" href="/">Movies</a></li>
                    <li><a class="dropdown-item" href="/">New & Popular</a></li>
                    <li><a class="dropdown-item" href="/">My List</a></li>
                </div>
            </ul>
        </>
    )
}
