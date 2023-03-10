import React from 'react'
import styles from './Title.module.css'
import Segment from '../Segment/Segment'



export default function Titles() {
    return (
        <div className={styles.titles}>
            <Segment title="Popular on Netflix" />
            <Segment title="Continue watching for Home" />
            <Segment title="Trending Now" />
            <Segment title="Watch It Again" />
        </div>
    )
}
