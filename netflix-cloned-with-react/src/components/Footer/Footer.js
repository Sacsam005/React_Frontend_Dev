import React from 'react'
import styles from './Footer.module.css'
import FooterLinks from './FooterLinks'
import SocialLinks from './SocialLinks'


export default function Footer() {
    return (
        <footer className={styles.box}>
            <div className={styles.socialLinks}>
                <SocialLinks />
            </div>
            <FooterLinks />
            <p className="text-center text-light">This page is maintained by <span style={{ color: "red", fontWeight: "bold" }}>Sachin Samal</span></p>

        </footer>
    )
}
