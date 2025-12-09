import React from "react";
import { NavLink, Link } from "react-router-dom";
import { pageBannerList } from "../utils/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ConferenceHall = () => {
  return (
    <>
      {/* Banner Section */}
      <section className="innerpage-banner position-relative">
        <div className="inner-banner-img position-relative">
          <img
            src={pageBannerList.brief.imgSrc}
            alt={pageBannerList.brief.altText}
            className="w-100"
          />
        </div>

        <div className="inner-banner-text">
          <div>
            <h1>EEPC INDIA Conference Hall</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="breadcrumb-item">
                  <NavLink to="/resources">Resources</NavLink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  EEPC INDIA Conference Hall
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Page Links Section */}
      <section className="pt-70">
        <div className="container">
          <div className="page-group">
            <NavLink
              to="/resources/mai-assistance"
              className={({ isActive }) => (isActive ? "active-page" : "")}
            >
              MAI Assistance
            </NavLink>
            <NavLink
              to="/resources/indian-missions-abroad"
              className={({ isActive }) => (isActive ? "active-page" : "")}
            >
              Indian Missions Abroad
            </NavLink>
            <NavLink
              to="/resources/overseas-missions-in-india"
              className={({ isActive }) => (isActive ? "active-page" : "")}
            >
              Overseas Missions in India
            </NavLink>
            <NavLink
              to="/resources/trade-associations"
              className={({ isActive }) => (isActive ? "active-page" : "")}
            >
              Trade Associations
            </NavLink>
            <NavLink
              to="/resources/world-customs"
              className={({ isActive }) => (isActive ? "active-page" : "")}
            >
              World Customs
            </NavLink>
            <NavLink
              to="/resources/visa"
              className={({ isActive }) => (isActive ? "active-page" : "")}
            >
              VISA
            </NavLink>
            <NavLink
              to="/resources/world-time"
              className={({ isActive }) => (isActive ? "active-page" : "")}
            >
              World Time
            </NavLink>
            <NavLink
              to="/resources/logistics"
              className={({ isActive }) => (isActive ? "active-page" : "")}
            >
              Logistics
            </NavLink>
            <NavLink
              to="/resources/conference-hall"
              className={({ isActive }) => (isActive ? "active-page" : "")}
            >
              EEPC INDIA Conference Hall
            </NavLink>
            <NavLink
              to="/resources/sexual-harassment"
              className={({ isActive }) => (isActive ? "active-page" : "")}
            >
              Sexual Harassment
            </NavLink>
            <NavLink
              to="/resources/useful-web-links"
              className={({ isActive }) => (isActive ? "active-page" : "")}
            >
              Useful Web Links
            </NavLink>
            <NavLink
              to="/resources/mhi-placement-opportunity"
              className={({ isActive }) => (isActive ? "active-page" : "")}
            >
              MHI Placement Opportunity
            </NavLink>
          </div>
        </div>
      </section>
      <section className="pt-70 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <p>
              EEPC INDIA Conference Hall at ground floor of 1/1, Wood Street,
              Vanijya Bhawan, International Trade Facilitation Centre, Kolkata
              700016 is located centrally at the heart of City of Joy within
              proximity of business centre i.e. Park Street area. It is built
              with state-of-the-art technology featuring excellent audio visual
              facility. The Hall has an annex enclosed space catering to
              refreshment and catering facility. For refreshment and catering,
              only enlisted approved vendors chosen from amongst the best in
              the city, with reasonable rates, will be allowed.
            </p>
            <p>
              The Conference Hall along with the annex are given for hire to
              members as well as non-members of EEPC INDIA.
            </p>
            <p>A few photographs showing the facilities are exhibited.</p>
            <p>
              The details of the hiring charges and procedure for booking are
              available in the two agreements provided in the link. Form A-for
              Non EEPC members and Form B- for EEPC members.
            </p>
            <Link to="/form-a" className="banner-btn banner-btn-2 me-1">
              Form A -for Non EEPC members
            </Link>
            <Link to="/form-b" className="banner-btn banner-btn-2">
              Form B - for EEPC members
            </Link>
          </div>

          <div className="col-lg-4">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.7950064382094!2d88.35199497529982!3d22.54935057950822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771af3e4638d%3A0x9c7d6f99e232bb87!2sVanijya%20Bhawan%2C%20ITFC%2C%201%2F1%2C%20Wood%20St%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal%20700016!5e0!3m2!1sen!2sin!4v1734960707379!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ConferenceHall;
