import React, { useState } from 'react';
import './Cards.css';
import Main from './Main';
import Grid from './Grid';
import Footer from './Footer';
import { Fade } from "react-awesome-reveal";


export default function Cards() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    return (
        <>
            <Fade duration={1200} triggerOnce = {true}>

                <div className="container">
                    <div className="card">
                        <img src={require('./img/1.jpg')} alt="Travellers" />
                        <div className="card-body" onClick={handleClick}>
                            <h6 className="card-title">
                                CAN'T MISS VEGAS ATTRACTION
                                <i className={click ? 'fas fa-minus' : 'fas fa-plus'}></i>
                            </h6>
                        </div>
                        <div className={click ? 'card-text active' : 'card-text'}>
                            <p className="card-info">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nihil ipsum doloremque natus pariatur
                                quae!
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={require('./img/4.jpg')} alt="Travellers" />

                        <div className="card-body" onClick={handleClick}>
                            <h6 className="card-title">
                                BEST PLACES TO VISIT
                                <i className={click ? 'fas fa-minus' : 'fas fa-plus'}></i>
                            </h6>
                        </div>
                        <div className={click ? 'card-text active' : 'card-text'}>
                            <p className="card-info">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nihil ipsum doloremque natus pariatur
                                quae!
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
            <Grid />
            <Main />
            <Footer />

        </>
    );
}
