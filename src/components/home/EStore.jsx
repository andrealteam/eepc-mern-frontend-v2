import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { catalogueData } from "../../utils/constants"; // Import catalogue images from constants.js
import { Link } from "react-router-dom";

const EStore = () => {
  // Create a reference for the Swiper instance
  const swiperRef = useRef(null);

  return (
    <section className="pt-70 pb-70 bg-blue">
      <div className="pattern-overlay"></div>
      <div className="container ">
        <div className="catalogue-heading estore-pattern">
          <div className="catalogue-txt">
            <h3 className="sub-heading">Digital Catalogue</h3>
            <h2 className="main-heading">E-store</h2>
          </div>
          <a
            href="https://ingineering-brands.com/"
            className="catalogue-link"
            target="_blank"
          >
            View More
          </a>
          {/* <div className="catalogue-link"> */}
        </div>
        {/* <div className="swiper-button-container">
            <button
              className="swiper-button"
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              className="swiper-button"
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div> */}
        {/* </div> */}

        {/* <div className="catalogue-swiper">
          <Swiper
            ref={swiperRef}
            spaceBetween={10}
            slidesPerView={4}
            breakpoints={{
              1024: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 3,
              },
              480: {
                slidesPerView: 2,
              },
            }}
          >
            {catalogueImages.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="catalogue-box">
                  <div className="catalogue-img">
                    <img src={item.imgSrc} alt={item.altText} />
                  </div>
                  <a href={item.link}>{item.altText}</a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}

        <div className="row">
          {catalogueData.map((item, index) => (
            <div
              key={item.id}
              className="col-lg-3 col-md-6 col-sm-12 mb-4 estore-pattern"
            >
              <div className="catalogue-box ">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="catalogue-img">
                    <img
                      src={item.imgSrc}
                      alt={item.altText}
                      className="img-fluid"
                    />
                  </div>
                  <h3>{item.altText}</h3>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EStore;
