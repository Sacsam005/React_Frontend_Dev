import React from 'react'
import './Hero.css'

export default function Video() {
    return (
        <>
            <video
                src={require("./vids/vid2.mp4")}
                autoPlay={true}
                loop={true}
                controls={false}
                muted
                playsInline
                type="video/mp4"
            />

        </>
    )
}