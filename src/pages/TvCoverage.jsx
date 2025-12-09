import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { pageBannerList, mockImg, mapWorldImg } from "../utils/constants";

const TvCoverage = () => {
  const tvLinks = [
    "https://youtu.be/gD35E3begOA",
    "https://youtu.be/gD35E3begOA",
    "https://youtu.be/gD35E3begOA",
    "https://youtu.be/gD35E3begOA",
    "https://youtu.be/gD35E3begOA",
    "https://youtu.be/gD35E3begOA",
  ];

  const imgSrc = "http://i3.ytimg.com/vi/gD35E3begOA/hqdefault.jpg"; // Common image URL

  return (
    <>
      {/* Banner Section */}
      <section >
        <div className="inner-banner-img position-relative">
          <img
            src={pageBannerList.brief.imgSrc}
            alt={pageBannerList.brief.altText}
            className="w-100"
          />
        </div>

        <div className="inner-banner-text">
          <div>
            <h1>TV Coverage</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="breadcrumb-item">
                  <NavLink to="/media-room">Media Room</NavLink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  TV Coverage
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Page Links Section */}
      <section className="pt-70">
        <div className="container">
          <div className="page-group">
            <NavLink
              to="/media-room/media-coverage"
              className={({ isActive }) => (isActive ? "active-page" : "")}
            >
              Media Coverage
            </NavLink>
            <NavLink
              to="/media-room/tv-coverage"
              className={({ isActive }) => (isActive ? "active-page" : "")}
            >
              TV Coverage
            </NavLink>
          </div>
        </div>
      </section>

      <section className="pt-70 pb-70">
        <div className="container">
          <div className="row">
            {/* Loop through the tvLinks array to dynamically create TV coverage blocks */}
            {tvLinks.map((link, index) => (
              <div className="col-lg-4" key={index}>
                <div className="tv-box">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={imgSrc}
                      className="video"
                      alt={`TV Coverage ${index + 1}`}
                    />
                  </a>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tv-icon"
                  >
                    <FontAwesomeIcon icon={faCirclePlay} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TvCoverage;
