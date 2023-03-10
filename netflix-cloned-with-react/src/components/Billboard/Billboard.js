import React from 'react'
import styles from './Billboard.module.css'
import PlayIcon from '../icons/PlayIcon'
import InfoIcon from '../icons/InfoIcon'

import title from '../img/title.jpg'
import witch from '../img/witch.jpg'

// import billboard from '../netflix/billboard.webp'


export default function Billboard() {
    return (
        <div className={styles.billboard}>
            <div className={styles.innerBillboard}>
                <img src={witch} alt="Vikings" className={styles.mainImg} />
                <div className={styles.fadeOut}></div>
                <div className={styles.info}>
                    <img src={title} alt="Vikings-title " />
                    <div className={styles.description}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi iusto excepturi laborum placeat magnam ut cupiditate totam qui! Recusandae, commodi?
                    </div>
                    <div className={styles.links}>
                        <a href="https://www.youtube.com/watch?v=F_0ZOiX8x5g" target="_blank"><PlayIcon /><span>Play</span></a>
                        <button type="button"><InfoIcon /><span>More info</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
