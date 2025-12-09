import React from "react";
import { NavLink } from "react-router-dom";
// import "./subNavbar.css";

const SubNavbar = ({ menuList }) => {
  return (
    <section className="pt-70">
      <div className="container">
        <div className="page-group">
          {menuList?.map((menu, index) => {
            return (
              <NavLink
                to={menu.path}
                className={({ isActive }) => (isActive ? "active-page" : "")}
                key={index}
              >
                {menu.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SubNavbar;
