import React from 'react'
import styles from './FooterLinks.module.css'

const FooterLinks = () => {
    const links = [
        'Audio and Subtitles',
        'Audio Description',
        'Help Center',
        'Gift Cards',
        'Media Center',
        'Inverstor Relations',
        'Jobs',
        'Terms of Use',
        'Privacy',
        'Legal Notice',
        'Cookie Preferance',
        'Impresum',
        'Contact Us',
    ];

    return (
        <ul className={styles.linkList}>
            {links.map(link => (
                <li className={styles.link} key={link}>
                    <a href="/">{link}</a></li>
            ))}
        </ul>
    )
}

export default FooterLinks;
