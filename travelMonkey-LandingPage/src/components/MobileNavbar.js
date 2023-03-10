import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


export default function MobileNavbar() {
    const links = [{ name: 'Home', to: '/' }, { name: 'Deals', to: '/deals' }, { name: 'Go To', to: '/goto' }, { name: 'Things To Do', to: '/todo' }];

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);



    return (
        <>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                {links.map(item => (<Link to={item.to} className="nav-links" key={item.name} onClick={closeMobileMenu}>{item.name}</Link>))}
                <li className='nav-links btn-info' ><Link to="/signup">Sign Up</Link></li>
            </ul>



        </>
    )
}
