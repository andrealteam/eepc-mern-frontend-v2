import React from "react";
import { getBigMint } from "../../services/homeApi";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import bigMint from "../../services/bigMint.json";
import { formatDate } from "../../utils/helper/DateFormatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const BigMint = () => {
  const {
    data: bigMint,
    isLoading: isLoading,
    isError: isError,
    error: error,
  } = useQuery({
    queryKey: ["bigmint"],
    queryFn: getBigMint,
    gcTime: 180000,
  });

  if (isError) return <p>Error: {error.message || "Something went wrong!"}</p>;

  return (
    <>
      {isLoading ? (
        <Skeleton height={600} />
      ) : (
        <section className="pt-70 pb-70 bg-lightblue">
          <div className="container">
            <div className="flex-title">
              <h2 className="main-heading text-center mb-0">Metal Prices</h2>
              <div>
                <NavLink to="/big-mint#metal" className="btn-1">
                  Explore More
                </NavLink>
              </div>
            </div>
            <div className="bigSwiper-wrapper position-relative">
              <Swiper
                modules={[Pagination, Autoplay]}
                loop={true}
                spaceBetween={25}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                pagination={{
                  el: ".custom-s-pagination",
                  clickable: true,
                }}
                breakpoints={{
                  1024: {
                    slidesPerView: 4,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  480: {
                    slidesPerView: 1,
                  },
                  0: {
                    slidesPerView: 1,
                  },
                }}
                className="swiper bigSwiper"
              >
                {bigMint?.price?.slice(0, 6).map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="big-carousel">
                      <div className="big-top">
                        <div className="big-flag">
                          <img src={item.flagUrl} alt="" />
                          {item.countryCode}
                        </div>
                      </div>
                      <h4>{item.Title}</h4>
                      <h6>{item.GradeSize}</h6>
                      <ul>
                        <li>{formatDate(item.PublishedDateTime)}</li>
                        <li>|</li>
                        <li>{item.Frequency}</li>
                        <li>|</li>
                        <li>{item.dataSource}</li>
                      </ul>
                      <div className="big-bottom">
                        <p>
                          {item.Price}{" "}
                          {parseFloat(item.Change) >= 0 ? (
                            <span id="profit" className="ms-2">
                              <FontAwesomeIcon icon={faArrowUp} /> {item.Change}
                            </span>
                          ) : (
                            <span id="loss" className="ms-2">
                              <FontAwesomeIcon icon={faArrowDown} />{" "}
                              {item.Change}
                            </span>
                          )}
                        </p>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faArrowUp} />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Pagination */}
              <div className="swiper-pagination custom-s-pagination"></div>
            </div>

            {/* Insight */}
            <div className="flex-title mt-5">
              <h2 className="main-heading text-center mb-0">Insights</h2>
              <div>
                <NavLink to="/big-mint#insight" className="btn-1">
                  Explore More
                </NavLink>
              </div>
            </div>
            <div className="row">
              {bigMint?.news?.slice(0, 3).map((item) => (
                <div className="col-lg-4">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="insight-bx"
                  >
                    <div className="insight-img-wrapper position-relative">
                      <div className="insight-img position-relative">
                        <img src={item.imageURL} alt={item.title} />
                      </div>
                    </div>
                    <div className="insight-text">
                      <h4>{item.title}</h4>
                      <div className="commodity-box">
                        {item.commodity && `${item.commodity} / `}
                        <span>{item.subCommodityName}</span>
                      </div>
                      <div className="date">{item.postedDateTime}</div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BigMint;
