import React, { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import BannerTitle from "./BannerTitle";
import { pageBannerList } from "../../utils/constants";

const InnerBanner = ({ customTitle }) => {
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
    <>
      <section
        className="innerpage-banner position-relative bg-blue"
        style={{ marginTop: isSticky ? "10rem" : undefined }}
      >
        <div className="pattern-overlay"></div>
        <div className="inner-banner-text">
         <h1>{customTitle ? customTitle.toUpperCase() : <BannerTitle />}</h1>
          {/* <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="breadcrumb-item">Membership</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Member List
                    </li>
                  </ol>
                </nav> */}
        </div>
      </section>
    </>
  );
};

export default InnerBanner;
