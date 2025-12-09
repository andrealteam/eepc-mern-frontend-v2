import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ menuList }) => {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      {/* <div className="back-btn">
        <Link
          onClick={() => navigate(-1)}
          aria-label="Go back to previous page"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>&nbsp;Go Back</span>
        </Link>
      </div> */}
      <div className="page-group">
        {menuList?.map((menu, index) => {
          return menu.path ? (
            // If the menu has a 'path', use NavLink
            <NavLink
              to={menu.path}
              className={({ isActive }) => (isActive ? "active-page" : "")}
              key={index}
            >
              {menu.name}
            </NavLink>
          ) : (
            // If the menu has a 'link', use a regular <a> tag
            <a
              href={menu.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="nav-link"
            >
              {menu.name}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
