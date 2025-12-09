import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRight,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons"; // Import necessary icons
import { pageBannerList, mockImg, mapWorldImg } from "../utils/constants";

const ForthcomingEvents = () => {
  return (
    <>
      <section className="innerpage-banner position-relative">
        <div className="inner-banner-img position-relative">
          <img
            src={pageBannerList.brief.imgSrc}
            alt={pageBannerList.brief.altText}
            className="w-100"
          />
        </div>

        <div className="inner-banner-text">
          <div>
            <h1>Forthcoming Events</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb  justify-content-center">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Events</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Forthcoming Events
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="pt-70">
        <div className="container">
          <div className="page-group">
            <a href="#" className="active-page">
              Forthcoming Events
            </a>
            <a href="#">Past Events</a>
            <a href="#">INDEE Exhibitions</a>
            <a href="#">IESS</a>
            <a href="#">Award Presentation</a>
            <a href="#">Webinars / Seminars</a>
            <a href="#">Other Events</a>
          </div>
        </div>
      </section>

      <section className="pt-70 pb-70">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-7">
              <div className="search-wrapper2">
                <div className="banner-search position-relative">
                  <form>
                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type something..."
                      />
                      <button type="submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Loop through event items */}
            {[...Array(6)].map((_, index) => (
              <article className="col-lg-4" key={index}>
                <div className="post-item">
                  <div className="box-content">
                    <div className="events-featured-container">
                      <div className="events-featured-img-wrapper">
                        <div className="events-featured-wrapper">
                          <img src={mockImg} className="img-fluid" alt="" />
                        </div>
                      </div>
                      <a className="publication-service-btn" href="#">
                        <span className="publication-button-icon-wrapper">
                          <span className="publication-button-icon">
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </span>
                      </a>
                      <div className="events-meta-cat-wrapper events-meta-line">
                        <div className="events-meta-category">
                          <a href="#" rel="category tag">
                            Dubai, UAE
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="events-category-date-wraper d-flex align-items-center">
                      <div className="events-meta-date-wrapper events-meta-line">
                        <div className="events-meta-date">
                          <span className="events-post-date">
                            <FontAwesomeIcon icon={faCalendarDays} /> 10th
                            December 2024 - 12th December 2024
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="events-content-wrapper">
                      <h3 className="events-post-title">
                        <a href="#">Which Yoga Class Is Best for Beginners?</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ForthcomingEvents;
