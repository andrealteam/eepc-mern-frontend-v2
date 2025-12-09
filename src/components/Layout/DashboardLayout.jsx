import React from "react";
import { Outlet } from "react-router-dom";
import { DashboardMenu } from "../../utils/sidebarMenuConfig";
import InnerBanner from "../global/InnerBanner";
import SidebarDashboard from "../global/SidebarDashboard";
import { useAuth } from "../../context/AuthContext";

const DashboardLayout = () => {
  const { user } = useAuth(); // get user from context

  let menuList = [];

  if (user?.role) {
    switch (user.role) {
      case "employee":
        menuList = DashboardMenu.employee;
        break;
      case "member":
        menuList = DashboardMenu.member;
        break;
      case "guest":
        menuList = DashboardMenu.guest;
        break;
      default:
        menuList = [];
        break;
    }
  }

  return (
    <>
      <InnerBanner />
      {/* Layout */}
      <section className="pt-70 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SidebarDashboard menuList={menuList} />
            </div>
            <div className="col-lg-9">
              <div className="ms-4">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardLayout;
