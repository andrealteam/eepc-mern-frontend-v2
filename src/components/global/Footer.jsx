import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faFax,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faYoutube,
  faLinkedinIn,
  faInstagram,
  faPinterest,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Logos } from "../../utils/constants";
import ScrollToTopButton from "./ScrollToTopButton";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container position-relative z-1">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-left">
                <div className="left-1">
                  <Link className="" to="/">
                    <img
                      src={Logos.logoRight.imgSrc} // Use logoRight from Logos object
                      alt={Logos.logoRight.altText} // Use altText from Logos object
                    />
                  </Link>
                  <p>
                    ‘Vanijya Bhawan’, 1st Floor International Trade Facilitation
                    Centre 1/1, Wood Street Kolkata 700016
                  </p>
                </div>

                <div className="left-2">
                  <ul>
                    <li>
                      <a href="tel:(+91 33) 22890651/52">
                        <FontAwesomeIcon icon={faPhone} />
                        (+91 33) 22890651/52
                      </a>
                    </li>
                    {/* <li>
                      <a href="tel:(+91 33) 22890654">
                        <FontAwesomeIcon icon={faFax} />
                        (+91 33) 22890654
                      </a>
                    </li> */}
                    <li>
                      <a href="mailto:eepcho@eepcindia.net">
                        <FontAwesomeIcon icon={faEnvelopeOpen} />
                        eepcho@eepcindia.net
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="left-3">
                  <ul className="footer-social">
                    <li>
                      <a
                        href="https://www.facebook.com/eepcind/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/eepcindia?lang=en/&mx=2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faXTwitter} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/c/eepcindia/?themeRefresh=1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://in.linkedin.com/company/eepc-india/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/eepc_india/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://in.pinterest.com/eepcindia/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faPinterest} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="footer-right">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-6">
                    <div className="footer-links">
                      <h4>Quick Links</h4>
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/sitemap">Sitemap</Link>
                        </li>
                        <li>
                          <Link to="/career">Carrer</Link>
                        </li>
                        <li>
                          <Link to="/publications-of-eepc-india">
                            Publications
                          </Link>
                        </li>
                        <li>
                          <Link to="/contact-us">Contact us</Link>
                        </li>
                        <li>
                          <Link to="/enquiry-form">Get in touch with us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-6">
                    <div className="footer-links">
                      <h4>Resources</h4>
                      <ul>
                        <li>
                          <NavLink to="/media-room">Media Room</NavLink>
                        </li>
                        <li>
                          <Link to="/gallery/indee">Photo Gallery</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-6">
                    <div className="footer-links">
                      <h4>Legal</h4>
                      <ul>
                        <li>
                          <Link to="/terms-of-use">Terms of Use</Link>
                        </li>
                        <li>
                          <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link to="/disclaimer">Disclaimer</Link>
                        </li>
                        <li>
                          <Link to="/refund-and-cancellation-policy">
                            Refund and Cancellation Policy
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="copy-sec">
            <p>
              © 2024 EEPC INDIA. All rights reserved
              {/* <a
                href="https://www.eepcindia.org/backend/files/EEPCINDIA%20_SAFE%20TO%20HOST.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website Security Audit Certificate
              </a> */}
            </p>
          </div>
        </div>

        <div className="footer-map">
          <img
            src="src/assets/images/map.png"
            alt="Location Map"
            className="w-100"
          />
        </div>
      </footer>

      <ScrollToTopButton />

      {/* <Link to="/contact-us">
        <div className="callFloat">
          <FontAwesomeIcon icon={faPhone} />
        </div>
      </Link> */}
    </>
  );
};

export default Footer;
