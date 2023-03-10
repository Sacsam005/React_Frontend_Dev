import React from 'react'
import PrimaryNavbar from '../../components/PrimaryNavbar';
import SecondaryNavbar from '../../components/SecondaryNavbar';
import Logo from '../../components/Logo';
import Footer from '../Footer';
import Video from '../Video';

import MobileNavbar from '../../components/MobileNavbar';
import '../Navbar.css'
import '../../App.css'
import './Deals.css'

export default function Todo() {
    return (
        <>
            <Video />
            <div className="d-flex justify-content-around">
                <PrimaryNavbar />
                <Logo />
                <SecondaryNavbar />
                <MobileNavbar />
            </div>
            <div>
                <section className="services">

                    <h1 className="heading"> what we offer </h1>

                    <div className="box-container">

                        <div className="box">
                            <img src={require('../img/h1.jpg')} alt="" />
                            <h3>complete guide</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                            <a href="/" className="btn">read more</a>
                        </div>

                        <div className="box">
                            <img src={require('../img/h2.jpg')} alt="" />
                            <h3>custom packages</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                            <a href="/" className="btn">read more</a>
                        </div>

                        <div className="box">
                            <img src={require('../img/fam.jpg')} alt="" />
                            <h3>family trips</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                            <a href="/" className="btn">read more</a>
                        </div>

                        <div className="box">
                            <img src={require('../img/h3.jpg')} alt="" />
                            <h3>trained guides</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                            <a href="/" className="btn">read more</a>
                        </div>

                        <div className="box">
                            <img src={require('../img/h4.jpg')} alt="" />
                            <h3>adventure trail</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                            <a href="/" className="btn">read more</a>
                        </div>

                        <div className="box">
                            <img src={require('../img/h5.jpg')} alt="" />
                            <h3>various adventures</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                            <a href="/" className="btn">read more</a>
                        </div>

                    </div>

                </section>
            </div>
            <Footer />
        </>
    )
}
