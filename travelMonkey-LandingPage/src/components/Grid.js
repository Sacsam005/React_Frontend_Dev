import React, { useState } from 'react';
import './Cards.css';
import './Grid.css';
import { Fade } from "react-awesome-reveal";

export default function Grid() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };
    return (
        <>
            <div className="container mobile-grid">
                <h1 className='my-5'>Exciting Adventure Awaits You</h1>
                <Fade top duration={1200} triggerOnce={ true}>

                    <div className="row">

                        <div className="col-md-4">

                            <img src={require('./img/2.jpg')} alt="Travellers" />
                            <div className="card-body" onClick={handleClick}>
                                <h6 className="card-title">
                                    CAN'T MISS LAS VEGAS ATTRACTION
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


                        <div className="col-md-4">
                            <img src={require('./img/3.jpg')} alt="Travellers" />
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
                        <div className="col-md-4">
                            <img src={require('./img/5.jpg')} alt="Travellers" />
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
                </Fade >
            </div>

        </>
    )
}
