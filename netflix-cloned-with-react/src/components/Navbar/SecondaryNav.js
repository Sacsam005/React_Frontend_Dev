import React from 'react'
import Billboardsetting from '../Billboard/Billboardsetting'
import styles from './SecondaryNav.module.css'
import NotifyIcon from '../icons/Notification'
import Search from './Search'
import Usermenu from '../icons/Usermenu'

export default function SecondaryNav() {
    return (
        <div className={styles.box}>
            <div className={styles.navItem}><Search /></div>
            <div className={styles.navItem}><NotifyIcon /></div>
            <div className={styles.navItem}><Usermenu /></div>
            <div className={styles.navItem}> <Billboardsetting /></div>
        </div>
    )
}
