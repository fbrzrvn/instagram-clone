import React from 'react';
import { languages } from '../data/languages';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrap">
        <span>About</span>
        <span>Blog</span>
        <span>Jobs</span>
        <span>Help</span>
        <span>API</span>
        <span>Privacy</span>
        <span>Terms</span>
        <span>Top Accounts</span>
        <span>Hashtags</span>
        <span>Locations</span>
      </div>
      <div className="footer__wrap">
        <span>Beauty</span>
        <span>Dance & Performance</span>
        <span>Fitness</span>
        <span>Food & Drink</span>
        <span>Home & Garden</span>
        <span>Music</span>
        <span>Visual Arts</span>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__select">
           <select name="lang" defaultValue="en">
            { languages.map((l, index) => (
              <option key={index} value={l.value}>{l.name}</option>
            ))}
          </select>
        </div>
        <div className="footer__bottom__copy">
          © 2021 Instagram from Facebook
        </div>
      </div>
    </div>
  )
}

export default Footer;
