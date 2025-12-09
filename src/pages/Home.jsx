import {
  AppDownload,
  Banner,
  BigMint,
  EStore,
  PhotoGallery,
  PolicyHighlights,
  Publications,
  Seminars,
  TopBoxes,
  Upcoming,
} from "../components";
import BannerPlatinum from "../components/home/BannerPlatinum";
import StripBanner from "./home/StripBanner";

const Home = () => {
  return (
    <>
      {/* <div className="strip-banner">
          <div className="banner-text1">
            40th EEPC India Western Region Export Awards for 2021-2022
          </div>
          <a
            href="https://youtube.com/live/FLKeefMhHR4?feature=share"
            target="_blank"
            rel="noopener noreferrer"
            className="watch-button"
          >
            Watch Now
          </a>
        </div> */}

      <Banner />
      {/* {new Date() < new Date("2025-06-25T00:00:00") && ( */}

      {/* )} */}

      <TopBoxes />
      <StripBanner />
      <section className="pt-70 pb-70">
        <div className="container">
          <div className="row justify-content-between">
            <Publications />
            <Seminars />
          </div>
        </div>
      </section>
      <BigMint />
      <Upcoming />
      <PolicyHighlights />
      <AppDownload />
      <EStore />
      <PhotoGallery />

      {/* <BannerPlatinum /> */}
    </>
  );
};

export default Home;
