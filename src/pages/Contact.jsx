// src/pages/Contact.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faFax,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import { InnerBanner } from "../components";

const Contact = () => {
  return (
    <>
      <InnerBanner />

      <section className="pt-70 pb-70">
        <div className="container">
          <h2 className="main-heading mb-5 text-center">Contact Information</h2>
          <div className="row">
            {/* Head Office - Cell */}
            <div className="col-lg-6">
              <div className="contact-cards">
                <div className="contact-text">
                  <h3>H.O. (Cell)</h3>
                  <h4>Adhip Mitra - Executive Director & Secretary</h4>
                  <h5>
                    <Link to="#">
                      ‘Vandhna’, 4th Floor 11, Tolstoy Marg New Delhi 110001
                    </Link>
                  </h5>
                  <p>
                    <FontAwesomeIcon icon={faPhone} /> (+91 11) 23353353,
                    23711124/25
                  </p>
                  {/* <p>
                    <FontAwesomeIcon icon={faFax} /> (+91 11) 23310920
                  </p> */}
                  <p>
                    <FontAwesomeIcon icon={faEnvelopeOpen} />{" "}
                    <Link to="#">eepcto@eepcindia.net</Link>
                  </p>
                </div>
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1062684224767!2d77.2190340755006!3d28.62657697566801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd34f5909d6f%3A0x3eb34fc870a2ea9a!2s11%2C%20Tolstoy%20Rd%2C%20Atul%20Grove%20Road%2C%20Janpath%2C%20Connaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1734959810942!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Head & Registered Office */}
            <div className="col-lg-6">
              <div className="contact-cards">
                <div className="contact-text">
                  <h3>Head & Registered Office</h3>
                  <h4>Rajat Srivastava - Addl. Executive Director</h4>
                  <h5>
                    <Link to="#">
                      ‘Vanijya Bhawan’, 1st Floor International Trade
                      Facilitation Centre 1/1, Wood Street Kolkata 700016
                    </Link>
                  </h5>
                  <p>
                    <FontAwesomeIcon icon={faPhone} /> (+91 33) 22890651/52
                  </p>
                  {/* <p>
                    <FontAwesomeIcon icon={faFax} /> (+91 33) 22890654
                  </p> */}
                  <p>
                    <FontAwesomeIcon icon={faEnvelopeOpen} />{" "}
                    <Link to="#">eepcho@eepcindia.net</Link>
                  </p>
                </div>
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.7950064382094!2d88.35199497529982!3d22.54935057950822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771af3e4638d%3A0x9c7d6f99e232bb87!2sVanijya%20Bhawan%2C%20ITFC%2C%201%2F1%2C%20Wood%20St%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal%20700016!5e0!3m2!1sen!2sin!4v1734960707379!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <h2 className="main-heading mb-5 text-center mt-5">
            Regional Offices
          </h2>
          <div className="row">
            {/* Eastern Region */}
            <div className="col-lg-6">
              <div className="contact-cards">
                <div className="contact-text">
                  <h3>Eastern Region</h3>
                  <h4>Jaya Basu - Regional Director</h4>
                  <h5>
                    <Link to="#">
                      ‘Vanijya Bhawan’, 2nd Floor International Trade
                      Facilitation Centre 1/1, Wood Street Kolkata 700016
                    </Link>
                  </h5>
                  <p>
                    <FontAwesomeIcon icon={faPhone} /> (+91 33) 22890673/74
                  </p>
                  {/* <p>
                    <FontAwesomeIcon icon={faFax} /> (+91 33) 22890687
                  </p> */}
                  <p>
                    <FontAwesomeIcon icon={faEnvelopeOpen} />{" "}
                    <Link to="#">eepcrokol@eepcindia.net</Link>
                  </p>
                </div>
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.7950064382094!2d88.35199497529982!3d22.54935057950822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771af3e4638d%3A0x9c7d6f99e232bb87!2sVanijya%20Bhawan%2C%20ITFC%2C%201%2F1%2C%20Wood%20St%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal%20700016!5e0!3m2!1sen!2sin!4v1734960707379!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Northern Region */}
            <div className="col-lg-6">
              <div className="contact-cards">
                <div className="contact-text">
                  <h3>Northern Region</h3>
                  <h4>Rakesh Suraj – Regional Director</h4>
                  <h5>
                    <Link to="#">
                      Flat No.10 P, Q, N, 10th Floor DCM Building, 16 Barakhamba
                      Road New Delhi - 110 001
                    </Link>
                  </h5>
                  <p>
                    <FontAwesomeIcon icon={faPhone} /> (+91 11) 23314171/74
                  </p>
                  {/* <p>
                    <FontAwesomeIcon icon={faFax} /> (+91 11) 23317795
                  </p> */}
                  <p>
                    <FontAwesomeIcon icon={faEnvelopeOpen} />{" "}
                    <Link to="#">eepcrodel@eepcindia.net</Link>
                  </p>
                </div>
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0049219336915!2d77.22345507608149!3d28.6296145842122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd33d56b9d61%3A0x615914b8740ecaa1!2sDCM%20Building!5e0!3m2!1sen!2sin!4v1734961315734!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-cards">
                <div className="contact-text">
                  <h3>Southern Region</h3>
                  <h4>J. V. Raja Gopal Rao - Regional Director</h4>
                  <h5>
                    <Link to="#">
                      Greams Dugar (3rd Floor), 149, Greams Road, Chennai -
                      600006
                    </Link>
                  </h5>
                  <p>
                    <FontAwesomeIcon icon={faPhone} /> (+91 44) 28295501,
                    28295502
                  </p>
                  {/* <p>
                    <FontAwesomeIcon icon={faFax} /> (+91 44) 28290495
                  </p> */}
                  <p>
                    <FontAwesomeIcon icon={faEnvelopeOpen} />{" "}
                    <Link to="#">eepcrochen@eepcindia.net</Link>
                  </p>
                </div>
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.620865280295!2d80.25149347490908!3d13.05978801293908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52663f9b9eb3c1%3A0xe1f9ff9c3dbc06ea!2sEEPC%20INDIA!5e0!3m2!1sen!2sin!4v1739786006405!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            {/* Western Region */}
            <div className="col-lg-6">
              <div className="contact-cards">
                <div className="contact-text">
                  <h3>Western Region</h3>
                  <h4>C. H. Nadiger - Regional Director</h4>
                  <h5>
                    <Link to="#">
                      B-202 & 220, Aurus Chambers, Annex "B", 2nd Floor, Behind
                      Mahindra Tower, S.S. Amrutwar Marg, Worli, Mumbai - 400013
                    </Link>
                  </h5>
                  <p>
                    <FontAwesomeIcon icon={faPhone} /> (+91 22) 42125555
                  </p>
                  {/* <p>
                    <FontAwesomeIcon icon={faFax} /> (+91 22) 24955486
                  </p> */}
                  <p>
                    <FontAwesomeIcon icon={faEnvelopeOpen} />{" "}
                    <Link to="#">eepcromum@eepcindia.net</Link>
                  </p>
                </div>
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.3491732014027!2d72.82024237501406!3d19.00432935421894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce93e766e2cd%3A0x1018cdabd2e988eb!2sEEPC%20Regional%20Office%20Mumbai!5e0!3m2!1sen!2sin!4v1739786282468!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Add additional regions and sub-regions here using the same pattern as above */}
          <h2 className="main-heading mb-5 text-center mt-5">
            Sub-Regional Offices
          </h2>
          <div className="row">
            {/* Bangalore */}
            <div className="col-lg-6">
              <div className="contact-cards">
                <div className="contact-text">
                  <h3>Bangalore</h3>
                  <h4>V. C. Ravish – Deputy Director</h4>
                  <h5>
                    <Link to="#">
                      Embassy Square 103, First Floor No.148, Infantry Road
                      Bengaluru 560 001
                    </Link>
                  </h5>
                  <p>
                    <FontAwesomeIcon icon={faPhone} /> 91 80 22261396 / 22268669
                  </p>
                  {/* <p>
                    <FontAwesomeIcon icon={faFax} /> 91 80 22266914
                  </p> */}
                  <p>
                    <FontAwesomeIcon icon={faEnvelopeOpen} />{" "}
                    <Link to="mailto:eepcsroblr@eepcindia.net">
                      eepcsroblr@eepcindia.net
                    </Link>
                  </p>
                </div>
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8175514019495!2d77.59134297579548!3d12.983518414615322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae166f2983f6cf%3A0x59e5897886da545c!2sEmbassy%20Square!5e0!3m2!1sen!2sin!4v1734962037885!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Hyderabad */}
            {/* <div className="col-lg-6">
              <div className="contact-cards">
                <div className="contact-text">
                  <h3>Hyderabad</h3>
                  <h5>
                    <Link to="#">
                      ‘Soham Mansion’ – 1st Floor No. 5-4-187/3 & 4/4, M. G.
                      Road Secunderabad 500003
                    </Link>
                  </h5>
                  <p>
                    <FontAwesomeIcon icon={faPhone} /> (+91 40) 27536704
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faFax} /> (+91 40) 27536705
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faEnvelopeOpen} />{" "}
                    <Link to="mailto:eepcsrohyd@eepcindia.net">
                      eepcsrohyd@eepcindia.net
                    </Link>
                  </p>
                </div>
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6336755418333!2d78.48533937585056!3d17.429359101593274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a1d41cb5bbb%3A0x1088ee4023c95656!2sSoham%20Mansion%2C%205-4-187%2C%20Mahatma%20Gandhi%20Rd%2C%20Karbala%20Maidan%2C%20Rani%20Gunj%2C%20Hyderabad%2C%20Telangana%20500003!5e0!3m2!1sen!2sin!4v1734962161924!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div> */}

            {/* Jalandhar */}
            <div className="col-lg-6">
              <div className="contact-cards">
                <div className="contact-text">
                  <h3>Jalandhar</h3>
                  <h4>Gaurav Gupta - Assistant Director</h4>
                  <h5>
                    <Link to="#">
                      Plot Comm. 1 Focal Point Jalandhar 144012
                    </Link>
                  </h5>
                  <p>
                    <FontAwesomeIcon icon={faPhone} /> (+91 181) 2602264
                  </p>
                  {/* <p>
                    <FontAwesomeIcon icon={faFax} /> (+91 181) 2601124
                  </p> */}
                  <p>
                    <FontAwesomeIcon icon={faEnvelopeOpen} />{" "}
                    <Link to="mailto:eepcsrojld@eepcindia.net">
                      eepcsrojld@eepcindia.net
                    </Link>
                  </p>
                </div>
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13626.22219347668!2d75.55773264813392!3d31.371241798655987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a508be87cb97d%3A0xff24548186a38389!2sFocal%20Point%2C%20Jalandhar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1734962269308!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Ahmedabad */}
            <div className="col-lg-6">
              <div className="contact-cards">
                <div className="contact-text">
                  <h3>Ahmedabad</h3>
                  <h4>Sudhakaran C.K. Nair – Sr. Deputy Director</h4>
                  <h5>
                    <Link to="#">
                      TF- 313/A, 3rd Floor, ATMA House Ashram Road Ahmedabad 380
                      009
                    </Link>
                  </h5>
                  <p>
                    <FontAwesomeIcon icon={faPhone} /> (+91 79)
                    26588720/26585985
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faEnvelopeOpen} />{" "}
                    <Link to="mailto:eepcsroahd@eepcindia.net">
                      eepcsroahd@eepcindia.net
                    </Link>
                  </p>
                </div>
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7415925712517!2d72.56815157594995!3d23.033258315928073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85dcd67d1d57%3A0xff78c6a22f3c739!2sAtma%20House!5e0!3m2!1sen!2sin!4v1734962518472!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-5">CIN : U51900WB1955NPL022644</p>
        </div>
      </section>
    </>
  );
};

export default Contact;
