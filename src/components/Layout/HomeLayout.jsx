import React from "react";
import { pageBannerList } from "../../utils/constants";
import { NavLink, Outlet } from "react-router-dom";
import InnerBanner from "../global/InnerBanner";

const HomeLayout = () => {
  return (
    <>
      <InnerBanner />

      {/* Layout */}
      <section className="pt-70 pb-70">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-12">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeLayout;
