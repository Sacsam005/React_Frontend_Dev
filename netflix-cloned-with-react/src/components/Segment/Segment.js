import React from 'react'
import styles from './Segment.module.css'
import ph1 from '../netflix/ph1.jpg'
import ChevronRightIcon from '../icons/ChevronRightIcon'
// import ph2 from '../netflix/ph2.jpg'
// import ph3 from '../netflix/ph3.jpg'

export default function Segment({ title }) {
    return (
        <div className={styles.segment}>
            <p className={StyleSheet.title}>{title}
                <span className={styles.icon}>
                    <svg width="8" height="8" viewBox="0 0 23 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 3L21 20.5L3.5 38" stroke="white" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" />
                    </svg>
                </span>
            </p>
            <div className={styles.row}>
                <img src={ph1} alt="" />
                <img src={ph1} alt="" />
                <img src={ph1} alt="" />
                <img src={ph1} alt="" />
                <img src={ph1} alt="" />
                <img src={ph1} alt="" />
                <button className={styles.button}>
                    <ChevronRightIcon />
                </button>
            </div>

        </div >
    )
}
