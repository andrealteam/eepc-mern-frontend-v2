import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle"; // Make sure Swiper CSS is included
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import DOMPurify from "dompurify";
import {
  addChartIcon,
  awardsIcon,
  demographyIcon,
  memberIcon,
} from "../../utils/constants";
import { useQuery } from "@tanstack/react-query";
import { getPastAwardPresentation } from "../../services/eventApi";
import { formatDate } from "../../utils/helper/DateFormatter";
import Skeleton from "react-loading-skeleton";
import { baseFileURL } from "../../services/api";

const Seminars = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const {
    data: PastAwards,
    isLoading: isLoadingPastAwards,
    isError: isErrorPastAwards,
    error: errorPastAwards,
  } = useQuery({
    queryKey: ["PastAwards"],
    queryFn: getPastAwardPresentation,
    gcTime: 180000,
  });

  if (isErrorPastAwards) {
    return <p>Error: {errorPastAwards?.message || "Something went wrong!"}</p>;
  }

  const national_awards = PastAwards?.national_awards?.slice(0, 3) || [];
  const eastern_region = PastAwards?.eastern_region?.slice(0, 3) || [];
  const western_region = PastAwards?.western_region?.slice(0, 3) || [];
  const northern_region = PastAwards?.northern_region?.slice(0, 3) || [];
  const southern_region = PastAwards?.southern_region?.slice(0, 3) || [];
  // const green_awards = PastAwards?.green_awards || [];
  const quality_awards = PastAwards?.quality_awards?.slice(0, 3) || [];

  const promotional_awards = PastAwards?.promotional || [];

  const awards = [
    ...national_awards,
    ...eastern_region,
    ...western_region,
    ...southern_region,
    ...quality_awards,
  ];

  if (isLoadingPastAwards)
    return <section className="banner position-relative">Loading...</section>;
  if (isErrorPastAwards)
    return <p>Error: {error.message || "Something went wrong!"}</p>;

  return (
    <div className="col-lg-5">
      <h2 className="main-heading">Useful Links</h2>
      <p>
        Explore a curated list of resources and tools to help you stay informed,
        take action, and dive deeper into sustainability topics.
      </p>
      {/* Useful Links Section */}
      <ul className="links-wrapper">
        <li>
          <div className="links-box">
            <a
              href="https://www.dgft.gov.in/CP/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="links-blue">
                <img src={demographyIcon} alt="Online RCMC" />
              </div>
              Online RCMC
            </a>
          </div>
        </li>

        <li>
          <div className="links-box">
            <a
              href="https://coo.eepcindia.com/coo/apply_now"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="links-blue">
                <img src={memberIcon} alt="Become A Member" />
              </div>
              Online Certificate of Origin
            </a>
          </div>
        </li>

        <li>
          <div className="links-box">
            <a
              href="https://export.eepcindia.com/member/capture_export_info"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="links-blue">
                <img src={addChartIcon} alt="Export Return" />
              </div>
              Export Return
            </a>
          </div>
        </li>
      </ul>

      {/* EEPC India Awards Section */}
      {promotional_awards?.length <= 0 ? (
        <h4 className="mb-4 mt-5">
          EEPC INDIA organized the most prestigious awards in the Indian
          engineering sector
        </h4>
      ) : (
        <h4 className="mb-4 mt-5">
          {promotional_awards?.length > 0
            ? promotional_awards[activeIndex]?.other_content
            : "EEPC INDIA organized the most prestigious awards in the Indian engineering sector"}
        </h4>
      )}

      {/* Swiper for the Awards Section */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={25}
        slidesPerView={1}
        loop={true} // Enable loop for continuous sliding
        pagination={{ clickable: true }} // Pagination dots
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="awards"
        onSlideChange={(swiper) => {
          // Because Swiper loops, use realIndex for actual slide index
          setActiveIndex(swiper.realIndex);
        }}
      >
        {isLoadingPastAwards ? (
          <Skeleton height={600} />
        ) : promotional_awards?.length <= 0 ? (
          awards?.map((award) => {
            const { id, name, date, place, slug } = award;

            return (
              <SwiperSlide key={id}>
                <div className="awards-box">
                  <div className="awards-img">
                    <img src={awardsIcon} alt={name} />
                  </div>
                  <div className="awards-text">
                    <h3>
                      <Link to={`/award-presentation/${slug}`}>{name}</Link>
                    </h3>
                    <p>Date: {formatDate(date)}</p>
                    <p>Place: {place}</p>
                    <Link
                      to={`/award-presentation/${slug}`}
                      className="btn-1 btn-2 mt-3"
                      aria-label="Know more about the award"
                    >
                      <FontAwesomeIcon icon={faArrowRight} /> Know More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          promotional_awards?.map((promotion) => (
            <SwiperSlide key={promotion.id}>
              <a
                href={promotion.website_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="awards-box1">
                  <div className="awards-img1">
                    <img
                      src={baseFileURL + promotion.image}
                      alt="Promotional Award"
                    />
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default Seminars;
