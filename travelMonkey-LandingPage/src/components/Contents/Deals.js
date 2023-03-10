import React from 'react'
import PrimaryNavbar from '../../components/PrimaryNavbar';
import SecondaryNavbar from '../../components/SecondaryNavbar';
import Logo from '../../components/Logo';
import MobileNavbar from '../../components/MobileNavbar';
import Footer from '../Footer';
import '../Navbar.css'
import './Deals.css'
import '../../App.css'
import Video from '../Video';

export default function Deals() {


    return (
        <>
            <Video />
            <div className="d-flex justify-content-around">
                <PrimaryNavbar />
                <Logo />
                <SecondaryNavbar />
                <MobileNavbar />
            </div>

            <section className="packages" id="packages">

                <h1 className="heading">popular packages</h1>

                <div className="box-container">

                    <div className="box">
                        <div className="image">
                            <img src={require('../img/d1.jpg')} alt="" />
                        </div>
                        <div className="content">
                            <h3>featured tour package</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.</p>
                            <div className="price">$250 - $450</div>
                            <a href="/" className="btn">explore now</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={require('../img/d2.jpg')} alt="" />
                        </div>
                        <div className="content">
                            <h3>featured tour package</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.</p>
                            <div className="price">$250 - $450</div>
                            <a href="/" className="btn">explore now</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={require('../img/d3.jpg')} alt="" />
                        </div>
                        <div className="content">
                            <h3>featured tour package</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.</p>
                            <div className="price">$250 - $450</div>
                            <a href="/" className="btn">explore now</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={require('../img/d4.jpg')} alt="" />
                        </div>
                        <div className="content">
                            <h3>featured tour package</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.</p>
                            <div className="price">$250 - $450</div>
                            <a href="/" className="btn">explore now</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={require('../img/d5.jpg')} alt="" />
                        </div>
                        <div className="content">
                            <h3>featured tour package</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.</p>
                            <div className="price">$250 - $450</div>
                            <a href="/" className="btn">explore now</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={require('../img/d6.jpg')} alt="" />
                        </div>
                        <div className="content">
                            <h3>featured tour package</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.</p>
                            <div className="price">$250 - $450</div>
                            <a href="/" className="btn">explore now</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}
