import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logos } from "../../utils/constants";
import Menu from "../../utils/menuConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHomeAlt,
  faPhoneAlt,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  const getProfileLink = () => {
    if (!user) return "/auth/login";

    switch (user.role) {
      case "employee":
        return "/dashboard/employee-profile";
      case "member":
        return "/dashboard/member-profile";
      case "guest":
        return "/dashboard/guest-profile";
      default:
        return "/auth/login";
    }
  };

  const closeNavbar = () => {
  const navbar = document.getElementById("navbarNav");
  if (navbar && navbar.classList.contains("show")) {
    new bootstrap.Collapse(navbar).hide(); // Bootstrap 5 collapse instance
  }
};


 const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.getElementById("navbarNav");
      const toggler = document.querySelector(".navbar-toggler");

      if (
        navbar &&
        toggler &&
        navbar.classList.contains("show") && // menu is open
        !navbarRef.current.contains(event.target) &&
        !toggler.contains(event.target)
      ) {
        toggler.click(); // simulate toggle to close
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-eepc-blue">
      <div className="container-fluid" ref={navbarRef}>
        {/* Navbar toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
          </span>
        </button>

        {/* Navbar menu */}
        <div
          className="mobile-offcanvas collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            {Menu.map((menuItem, index) =>
              menuItem.subMenu ? (
                <li className="nav-item dropdown" key={index}>
                  <Link
                    className="nav-link dropdown-toggle"
                    to={menuItem.path}
                    id={`navbarDropdown${index}`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={closeNavbar}
                  >
                    {menuItem.name}
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby={`navbarDropdown${index}`}
                  >
                    {menuItem.subMenu.map((subMenuItem, subMenuIndex) => (
                      <li key={subMenuIndex}>
                        {subMenuItem.link ? (
                          <a
                            className="dropdown-item"
                            href={subMenuItem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeNavbar}
                          >
                            {subMenuItem.name}
                          </a>
                        ) : (
                          <Link className="dropdown-item" to={subMenuItem.path} onClick={closeNavbar}>
                            {subMenuItem.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nav-item" key={index}>
                  {menuItem.link ? (
                    <a
                      className="nav-link"
                      href={menuItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeNavbar}
                    >
                      {menuItem.name}
                    </a>
                  ) : (
                    <Link className="nav-link" to={menuItem.path} onClick={closeNavbar}>
                      {menuItem.name}
                    </Link>
                  )}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Right-side icons */}
        <div
          className="d-flex align-items-center gap-3"
          style={{ color: "#fff" }}
        >
          <Link to="/">
            <FontAwesomeIcon icon={faHomeAlt} />
          </Link>

          <Link to="/contact-us">
            <FontAwesomeIcon icon={faPhoneAlt} />
          </Link>

          {!user ? (
            <Link to="/auth/login">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          ) : (
            <>
              <Link
                to={getProfileLink()}
                className="text-white d-flex align-items-center"
              >
                <img
                  src="https://img.freepik.com/free-icon/user_318-563642.jpg"
                  width="25"
                  alt={user.loggedInUserName}
                  className="me-2"
                />
                {user.loggedInUserName?.slice(0, 20)}
                {user.loggedInUserName?.length > 20 && "..."}
              </Link>
              {/* <button
                className="btn btn-link text-white p-0"
                onClick={() => {
                  logout();
                  navigate("/auth/login");
                }}
                title="Logout"
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
              </button> */}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
