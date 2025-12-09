import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle"; // Ensure this is included for Swiper's styles
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { bannerList, Logos } from "../../utils/constants.js"; // Import from constants
import { getHomeBanner } from "../../services/homeApi.js";
import { baseFileURL } from "../../services/api.js";

const Banner = () => {
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

  if (isLoading)
    return <section className="banner position-relative">Loading...</section>;
  if (isError) return <p>Error: {error.message || "Something went wrong!"}</p>;

  return (
    <section className="banner position-relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true} // Enable loop for continuous sliding
        pagination={{ clickable: true }} // Pagination dots
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="swiper-container" // Optional, for styling
      >
        {/* Dynamically render slides */}
        {homeBanners?.map((banner, index) => {
          const { id, image, title, date, place, link } = banner;

          return (
            <SwiperSlide key={id}>
              <div className="banner-slide position-relative">
                <div className="banner-img">
                  <img src={baseFileURL + image} alt={title} />
                </div>
                <div className="banner-text">
                  <div>
                    <div className="banner-logo">
                      {/* <img src={Logos.Bmge.imgSrc} alt={Logos.Bmge.altText} /> */}
                    </div>
                    <h2>{title}</h2>
                    {/* <h4>{date}</h4>
                    <h5>{place}</h5> */}
                    <div className="banner-btn-box">
                      <a
                        href={link}
                        target="_blank"
                        className="banner-btn banner-btn-2"
                      >
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Search Section */}
      <div className="search-wrapper">
        <div className="banner-search position-relative">
          <form>
            <div className="position-relative">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type something..."
                />
              </div>
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i> Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Banner;
