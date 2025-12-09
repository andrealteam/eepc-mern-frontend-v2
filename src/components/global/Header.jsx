import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";
import StripBanner from "../../pages/home/StripBanner";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200 && window.innerWidth >= 992) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // handle window resize too

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header>
      <TopHeader />
      <div className={isSticky ? "sticky-header" : ""}>
        <Navbar />
        {/* <StripBanner /> */}
        {/* <div className="strip-banner"style={{paddingInline:"90px"}}>
          <div className="banner-text1"style={{fontSize:"25px"}}>
            EEPC India turns 70 on 21st September 2025
          </div>
          <a
            href="https://youtube.com/live/gLPahlo6L3A?feature=share"
            target="_blank"
            rel="noopener noreferrer"
            className="watch-button"
          >
            Watch Now
          </a>
        </div> */}
      </div>
      {/* <StripBanner /> */}
    </header>
  );
};

export default Header;
