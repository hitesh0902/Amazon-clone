import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer_row">
          <div>
            <h2 className="footer__title">Get to Know Us</h2>
            <ul className="footer__titleList">
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">Press Releases</Link>
              </li>
              <li>
                <Link to="/">Amazon Cares</Link>
              </li>
              <li>
                <Link to="/">Gift a Smile</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="footer__title">Connect With Us</h2>
            <ul className="footer__titleList">
              <li>
                <Link to="/">Facebook</Link>
              </li>
              <li>
                <Link to="/">Twitter</Link>
              </li>
              <li>
                <Link to="/">Instagram</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="footer__title">Make Money With Us</h2>
            <ul className="footer__titleList">
              <li>
                <Link to="/">Sell on Amazon</Link>
              </li>
              <li>
                <Link to="/">Sell under Amazon Accelerator</Link>
              </li>
              <li>
                <Link to="/">Become an Affiliate</Link>
              </li>
              <li>
                <Link to="/">Fulfilment by Amazon</Link>
              </li>
              <li>
                <Link to="/">Advertise Your Products</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="footer__title">Let Us Help You</h2>
            <ul className="footer__titleList">
              <li>
                <Link to="/">Your Account</Link>
              </li>
              <li>
                <Link to="/">Returns Centre</Link>
              </li>
              <li>
                <Link to="/">100% Purchase Protection</Link>
              </li>
              <li>
                <Link to="/">Amazon App Download</Link>
              </li>
              <li>
                <Link to="/">Amazon Assistant Download</Link>
              </li>
              <li>
                <Link to="/">Help</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__logo">
        <Link to="/">
          <img
            className="footer__image"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="brand-logo"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
