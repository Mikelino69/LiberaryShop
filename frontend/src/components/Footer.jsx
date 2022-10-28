import React from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#team">team</a>
          </div>

          <div className="box">
            <h3>extra links</h3>
            <a href="/">my account</a>
            <a href="/">my order</a>

            <a href="/">privacy policy</a>
          </div>
          <div className="box">
            <h3>contact info</h3>
            <a href="/">
              <FontAwesomeIcon icon={faPhone} className="fa" />
              +1 614 263 1624
            </a>

            <a href="/" className="email">
              <FontAwesomeIcon icon={faEnvelope} className="fa" />
              malina@gmail.com
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faMapLocationDot} className="fa" />
              2116 Arlington Ave
            </a>
          </div>
          <div className="box">
            <h3>Follow Us</h3>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} className="fa" />
              facebook
            </a>
            <a href="https://twitter.com/">
              <FontAwesomeIcon icon={faTwitter} className="fa" />
              twitter
            </a>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} className="fa" />
              instagram
            </a>
          </div>
        </div>
        <div className="credit">
          created by Ms. Bolonina, Mr. Michael, Mr.Almousa, Mr. Al-khafaji
          <span> Web Developer </span>| all rights reserved!
        </div>
      </div>
    </div>
  );
};

export default Footer;
