import React from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { InternationalsMenu } from "../../utils/sidebarMenuConfig";
import Sidebar from "../global/Sidebar";
import InnerBanner from "../global/InnerBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const InternationalLayout = () => {
  const navigate = useNavigate();
  return (
    <>
      <InnerBanner />

      {/* Layout */}
     <section className="pt-70 pb-70">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-9">
              {/* in mobile view */}
               <div className="back-btn d-block d-lg-none">
                <Link
                  onClick={() => navigate(-1)}
                  aria-label="Go back to previous page"
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  <span>&nbsp;Go Back</span>
                </Link>
              </div>

              <div className="ms-4">
                <Outlet />
              </div>
            </div>
            <div className="col-lg-3">
             {/* in desktop view */}
             <div className="back-btn d-none d-lg-block">
                <Link
                  onClick={() => navigate(-1)}
                  aria-label="Go back to previous page"
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  <span>&nbsp;Go Back</span>
                </Link>
              </div>

              <Sidebar menuList={InternationalsMenu} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InternationalLayout;
