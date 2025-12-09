import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { AppDownloadImages } from "../../utils/constants"; // Import images from constants.js

const AppDownload = () => {
  return (
    <section className="pt-70 pb-70">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-9">
            <h3 className="sub-heading">Download</h3>
            <h2 className="main-heading">Our App</h2>
            <p>
              Experience the world of Indian engineering exports at your
              fingertips with the EEPC India app! Stay updated on upcoming
              events, access exclusive resources, and connect with global
              opportunities. From Buyer-Seller Meets to flagship exhibitions
              like INDEE and IESS, our app is your gateway to India's
              engineering expertise. Download now and explore endless
              possibilities!
            </p>
            <div className="qr-btm ">
              {/* <div className="qr-code">
                <img
                  src={AppDownloadImages.qrCode}
                  alt="QR Code"
                  className="w-100"
                />
              </div> */}
              <div className="qr-btn d-flex gap-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.eepc.eepc_mobile_app"
                  aria-label="Download on Google Play"
                  target="_blank"
                >
                  <img src={AppDownloadImages.googlePlay} alt="Google Play" />
                </a>
                <a
                  href="https://apps.apple.com/in/app/eepc-india/id6738914903"
                  aria-label="Download on the App Store"
                  target="_blank"
                >
                  <img src={AppDownloadImages.appStore} alt="App Store" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <img
              src={AppDownloadImages.mobileMockup}
              alt="Mobile Mockup"
              className="w-100 animation-updown"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
