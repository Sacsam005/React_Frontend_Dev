import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <>
            <div className="footer-container">
                <h1 className = "text-center">OUR DESTINATION PARTNERS</h1>
                <div className="row-logo">
                    <div className="col-logo">
                        <img src={require('./img/p1.png')} alt="Social Links" />
                    </div>
                    <div className="col-logo">
                        <img src={require('./img/p2.png')} alt="Social Links" />
                    </div>
                    <div className="col-logo">
                        <img src={require('./img/p3.png')} alt="Social Links" />
                    </div>
                    <div className="col-logo">
                        <img src={require('./img/p4.png')} alt="Social Links" />
                    </div>
                    <div className="col-logo">
                        <img src={require('./img/p5.png')} alt="Social Links" />
                    </div>
                </div>

                <div className="footer-section">
                    <div className="footer-content">
                        <div className="footer-sub-content">
                            <h6>UR JOURNEY | tRAVELS AND ADVENTURES © 2021</h6>

                            <ul className="footer-item">
                                <i className="fab fa-facebook fa-2x"></i>
                                <i className="fab fa-twitter fa-2x"></i>
                                <i className="fab fa-instagram fa-2x"></i>
                                <i className="fab fa-tripadvisor fa-2x"></i>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-content">
                        <img src={require('./img/logo.png')} alt="" style={{ width: "200px", height: "100px" }} />
                    </div>

                    <div className="footer-content">
                        <ul>
                            <li className="footer-links"><Link to="/">Home</Link></li>
                            <li className="footer-links"><Link to="/deals">Deals</Link></li>
                            <li className="footer-links"><Link to="/goto">Go To</Link></li>
                            <li className="footer-links"><Link to="/todo">Things To Do</Link></li>
                            <li className="footer-links"><Link to="/signup">Blogs</Link></li>
                        </ul>
                    </div>

                    <div className="footer-content">
                        <div className="footer-sub-content">
                            <h6>Get Daily Updates</h6>
                            <input type="text" placeholder="email" /> <i className="fas fa-arrow-right" style={{ color: "goldenrod" }}></i>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}