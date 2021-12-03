import React, { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaDribbble,
  FaYoutube,
  FaPaperPlane,
  FaAngleUp,
} from "react-icons/fa";
import Logo from "../../assets/images/logo.svg";
import useEventListenser from "../../hooks/useEventListener";

const Footer = () => {
  const [show, setShow] = useState(false);
  useEventListenser("scroll", () => {
    setShow(window.scrollY > 600);
  });
  return (
    <>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        style={{
          visibility: show ? "visible" : "hidden",
          opacity: show ? 1 : 0,
          transition: "all 0.5s ease-in-out",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="back-to-top"
      >
        <FaAngleUp fill="#fff" />
      </a>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-sm-6">
                  <div className="mt_60">
                    <a href="/">
                      <img src={Logo} alt="Logo" />
                    </a>
                    <p className="footer-para-one mt_40">
                      Copyright © 2021 Grabstar.
                    </p>
                    <p className="footer-para-one">All rights reserved</p>
                    <div className="social-icon">
                      <a href="/">
                        <FaInstagram />
                      </a>
                      <a href="/">
                        <FaTwitter />
                      </a>
                      <a href="/">
                        <FaDribbble />
                      </a>
                      <a href="/">
                        <FaYoutube />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="footer-ul company-box mt_60">
                    <h2 className="footer-head">Company</h2>
                    <ul className="mt_25">
                      <li className="mt_10">
                        <a href="/">About us</a>
                      </li>
                      <li className="mt_10">
                        <a href="/">Blog</a>
                      </li>
                      <li className="mt_10">
                        <a href="/">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-sm-6">
                  <div className="footer-ul support-box mt_60">
                    <h2 className="footer-head">Support</h2>
                    <ul className="mt_25">
                      <li className="mt_10">
                        <a href="/">Help center</a>
                      </li>
                      <li className="mt_10">
                        <a href="/">Terms of service</a>
                      </li>
                      <li className="mt_10">
                        <a href="/">Privacy policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="footer-ul mt_60">
                    <h2 className="footer-head">Stay up to date</h2>
                    <div className="email-box position-relative w-100 mt_25">
                      <input type="text" placeholder="Your email address" />
                      <button type="button" className="email-submit">
                        <FaPaperPlane />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
