import React, { useEffect } from "react";
import { getBigMint } from "../../services/homeApi";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import bigMint from "../../services/bigMint.json";
import { formatDate } from "../../utils/helper/DateFormatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowRight,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const BigMintDetails = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
        <Skeleton height={250} count={2} className="mb-3" />
      ) : (
        <>
          <h2 className="main-heading mb-4" id="metal">
            Metal Prices
          </h2>

          <div className="row justify-content-center">
            {bigMint?.price.map((item) => (
              <div className="col-lg-4 mb-3">
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
                          <FontAwesomeIcon icon={faArrowDown} /> {item.Change}
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
              </div>
            ))}
          </div>
          {/* Insights */}
          <h2 className="main-heading mt-5 mb-4" id="insight">
            Insights
          </h2>

          <div className="insight-inner">
            <div className="row justify-content-center">
              {bigMint?.news.map((item) => (
                <div className="col-lg-12">
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
                      <p className="desc">{item.description}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          {/* Events */}
          <h2 className="main-heading mt-5 mb-4" id="event">
            Events
          </h2>
          <div className="row">
            {bigMint?.event.length === 0 ? (
              <div>No events found</div>
            ) : (
              bigMint?.event.map((item) => (
                <article className="col-lg-6">
                  <div className="post-item">
                    <div className="box-content">
                      <div className="events-featured-container">
                        <div className="events-featured-img-wrapper">
                          <div className="events-featured-wrapper">
                            <img
                              src={item.image}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>

                        <a
                          className="publication-service-btn"
                          href={item.href}
                          target="_blank"
                        >
                          <span className="publication-button-icon-wrapper">
                            <span className="publication-button-icon">
                              <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </>
      )}
    </>
  );
};

export default BigMintDetails;
