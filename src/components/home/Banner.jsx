import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { getHomeBanner } from "../../services/homeApi"; // Assuming getHomeBanner API exists
import { baseFileURL } from "../../services/api"; // Assuming this base URL is used for images
import Skeleton from "react-loading-skeleton";
import EEPC_award from "../../assets/images/banner/eepc-mob.jpg";

const Banner = () => {
  // Create a reference for the Swiper instance
  const swiperRef = useRef(null);

  // Fetch Home Banners
  const {
    data: homeBanners,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["banners"],
    queryFn: getHomeBanner,
    gcTime: 180000,
  });
  console.log("home banner data", homeBanners);
  if (isLoading)
    return (
      <section className="banner position-relative">
        <Skeleton height={600} />
      </section>
    );
  if (isError) return <p>Error: {error.message || "Something went wrong!"}</p>;

  return (
    <section className="pt-70 pb-70">
      <div className="container">
        <div className="bannerSwipernew position-relative">
          <div className="swiper bannerSwiper2 position-relative">
            {/* Swiper component with manual navigation */}
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              loop={true}
              spaceBetween={25}
              slidesPerView={2.3}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 2.3,
                },
                768: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              className="swiper-container" // Optional, for styling
            >
              {/* Dynamically render slides */}
              {homeBanners?.map((banner) => {
                const { id, image, title, description, link, apply_link } =
                  banner;

                return (
                  <>
                    <SwiperSlide key={id}>
                      <div className="banner-slide position-relative">
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="banner-img">
                            <img src={baseFileURL + image} alt={title} />
                          </div>
                        </a>

                        <div
                          className="banner-text"
                          style={{
                            background:
                              id == 13 || id == 14 ? "transparent" : "",
                          }}
                        >
                          <div>
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <div
                              className="banner-btn-box"
                              style={{
                                display: id == 13 || id == 14 ? "flex" : "",
                                textAlign: "center",
                                display: "flex",
                                gap: "10px",
                              }}
                            >
                              {link ? (
                                <a
                                  href={link}
                                  className="banner-btn banner-btn-2"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Know More
                                </a>
                              ) : (
                                ""
                              )}
                              {apply_link ? (
                                <a
                                  href={apply_link}
                                  className="banner-btn banner-btn-2"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Apply Now
                                </a>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>

          {/* Manual navigation buttons */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
