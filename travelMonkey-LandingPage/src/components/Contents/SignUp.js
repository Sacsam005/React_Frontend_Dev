import React from 'react'
import PrimaryNavbar from '../../components/PrimaryNavbar';
import SecondaryNavbar from '../../components/SecondaryNavbar';
import Logo from '../../components/Logo';
import MobileNavbar from '../../components/MobileNavbar';
import Footer from '../Footer';
import Video from '../Video';
import '../Navbar.css'
import './Deals.css'
import '../../App.css'


export default function SignUp() {
    return (
        <>
            <Video />
            <div className="d-flex justify-content-around">
                <PrimaryNavbar />
                <Logo />
                <SecondaryNavbar />
                <MobileNavbar />
            </div>

            <section className="blogs" id="blogs">

                <h1 className="heading">do sign-up for our daily posts </h1>

                <div className="swiper blogs-slider">

                    <div className="swiper-wrapper">

                        <div className="swiper-slide slide">
                            <img src={require('../img/blog1.jpg')} alt="" />
                            <div className="icons">
                                <a href="/"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                                <a href="/"> <i className="fas fa-user"></i> by Sacsam005 </a>
                            </div>
                            <h3>blog title goes here.</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                            <a href="/" className="btn">read more</a>
                        </div>

                        <div className="swiper-slide slide">
                            <img src={require('../img/blog2.jpg')} alt="" />
                            <div className="icons">
                                <a href="/"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                                <a href="/"> <i className="fas fa-user"></i> by Sacsam005 </a>
                            </div>
                            <h3>blog title goes here.</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                            <a href="/" className="btn">read more</a>
                        </div>

                        <div className="swiper-slide slide">
                            <img src={require('../img/blog3.jpg')} alt="" />
                            <div className="icons">
                                <a href="/"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                                <a href="/"> <i className="fas fa-user"></i> by Sacsam005 </a>
                            </div>
                            <h3>blog title goes here.</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                            <a href="/" className="btn">read more</a>
                        </div>

                        <div className="swiper-slide slide">
                            <img src={require('../img/blog4.jpg')} alt="" />
                            <div className="icons">
                                <a href="/"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                                <a href="/"> <i className="fas fa-user"></i> by Sacsam005 </a>
                            </div>
                            <h3>blog title goes here.</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                            <a href="/" className="btn">read more</a>
                        </div>

                        <div className="swiper-slide slide">
                            <img src={require('../img/blog5.jpg')} alt="" />
                            <div className="icons">
                                <a href="/"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                                <a href="/"> <i className="fas fa-user"></i> by Sacsam005 </a>
                            </div>
                            <h3>blog title goes here.</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                            <a href="/" className="btn">read more</a>
                        </div>

                        <div className="swiper-slide slide">
                            <img src={require('../img/blog6.jpg')} alt="" />
                            <div className="icons">
                                <a href="/"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                                <a href="/"> <i className="fas fa-user"></i> by Sacsam005 </a>
                            </div>
                            <h3>blog title goes here.</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                            <a href="/" className="btn">read more</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}