import React from 'react'
import styles from './SocialLinks.module.css'
import Facebook from '../icons/Facebook'
import Twitter from '../icons/Twitter'
import Instagram from '../icons/Instagram'
import Youtube from '../icons/Youtube'

export default function SocialLinks() {
    return (
        <div className={styles.box}>
            <a href="https://facebook.com" className={styles.iconLink}>
                <Facebook />
            </a >
            <a href="https://instagram.com" className={styles.iconLink}>
                <Instagram />
            </a >
            <a href="https://twitter.com" className={styles.iconLink}>
                <Twitter />
            </a >
            <a href="https://youtube.com" className={styles.iconLink}>
                <Youtube />
            </a >
        </div>
    )
}
