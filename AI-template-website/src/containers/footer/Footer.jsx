import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <i className="fab fa-servicestack fa-3x" style={{ color: "cyan" }}></i>

        <p>AI research center, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Related Studies</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>AI Research Center</p>
        <p>123-567890</p>
        <p>info@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 AI Research | All rights reserved</p>
      <p>This page is created and maintained by Sacsam005</p>
    </div>
  </div>
);

export default Footer;
