import React from 'react'
import PrimaryNavbar from '../../components/PrimaryNavbar';
import SecondaryNavbar from '../../components/SecondaryNavbar';
import Logo from '../../components/Logo';
import Background1 from '../img/travel1.jpg';
import Background2 from '../img/travel3.jpg';
import Background3 from '../img/travel2.jpg';
import Footer from '../Footer';
import MobileNavbar from '../../components/MobileNavbar';
import '../Navbar.css'
import '../../App.css'
import './Deals.css'
import Video from '../Video';




export default function Goto() {
    return (
        <>
            <Video />
            <div className="d-flex justify-content-around">
                <PrimaryNavbar />
                <Logo />
                <SecondaryNavbar />
                <MobileNavbar />
            </div>

            <section className="home" id="home">

                <div className="swiper home-slider">

                    <div className="swiper-wrapper swipper-no-padding">

                        <div className="swiper-slide">
                            <div className="box" style={{ backgroundImage: `url(${Background1})` }}>
                                <div className="content">
                                    <span>never stop</span>
                                    <h3>exploring</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                                    <a href="/" className="btn" id="highlight">get started</a>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="box second" style={{ background: `url(${Background2})` }}>
                                <div className="content">
                                    <span>make tour</span>
                                    <h3>amazing</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                                    <a href="/" className="btn" id="highlight">get started</a>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="box" style={{ background: `url(${Background3})` }}>
                                <div className="content">
                                    <span>Exciting</span>
                                    <h3>Adventure</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                                    <a href="/" className="btn" id="highlight">get started</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>

                </div>

            </section>

            <section className="category">

                <h1 className="heading">adventure idea!</h1>

                <div className="box-container">

                    <div className="box">
                        <img src={require('../img/ad1.jpg')} alt="" />
                        <h3>biking</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                        <a href="/" className="btn">read more</a>
                    </div>

                    <div className="box">
                        <img src={require('../img/d2.jpg')} alt="" />
                        <h3>canoeing</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                        <a href="/" className="btn">read more</a>
                    </div>

                    <div className="box">
                        <img src={require('../img/d3.jpg')} alt="" />
                        <h3>boating</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                        <a href="/" className="btn">read more</a>
                    </div>

                    <div className="box">
                        <img src={require('../img/blog4.jpg')} alt="" />
                        <h3>trekking</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                        <a href="/" className="btn">read more</a>
                    </div>
                </div>
            </section>

            <section className="about" id="about">

                <div className="image">
                    <img src={require('../img/fam.jpg')} alt="" />
                </div>

                <div className="content">
                    <h3>memorable outdoor experiences</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque voluptates corrupti natus necessitatibus beatae voluptatibus, deserunt quo soluta minima libero laborum, corporis error esse vitae placeat blanditiis reiciendis vel? Minima.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta doloremque placeat porro, ipsam quia at beatae atque odit iste?</p>
                    <a href="/" className="btn">read more</a>
                </div>
            </section>
            <Footer />
        </>

    )
}
