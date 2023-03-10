import React from 'react'
import './Main.css'
import { Fade } from "react-awesome-reveal";

export default function Main() {
    return (
        <>
            <h1 className="text-center my-5"><i className="far fa-heart" style={{ color: "red" }}></i> FEATURED CHARITIES</h1>
            <div className="grid-container">
                <Fade duration={1200} triggerOnce = {true}>

                    <div className="grid">
                        <div className="wrapper">
                            <h1>World Health Organization</h1>
                            <div className="image-wrapper">
                                <img src={require('./img/main3.jpg')} alt="" />
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade duration={1200} triggerOnce = {true}>

                    <div className="grid">
                        <div className="wrapper">
                            <h1>Nepalese Red Cross</h1>
                            <div className="image-wrapper">
                                <img src={require('./img/main1.jpeg')} alt="" />
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade duration={1200} triggerOnce = {true}>

                    <div className="grid">
                        <div className="wrapper">
                            <h1>Haiti Food bank</h1>
                            <div className="image-wrapper">
                                <img src={require('./img/main4.jpg')} alt="" />
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade duration={1200} triggerOnce = {true}>

                    <div className="grid">
                        <div className="wrapper">
                            <h1>American Pet Care</h1>
                            <div className="image-wrapper">
                                <img src={require('./img/main2.jpg')} alt="" />
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>

        </>
    )
}
