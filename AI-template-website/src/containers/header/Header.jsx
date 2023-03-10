import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/AI.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Make it happen with Research AI</h1>
      <p>Discover The Complete Range Of Artificial Intelligence Solutions. Artificial intelligence is intelligence demonstrated by machines, as opposed to natural intelligence displayed by animals including humans.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt="Accessed By" />
        <p>1,900 people accessed in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt="Header logo" />
    </div>
  </div>
);

export default Header;
