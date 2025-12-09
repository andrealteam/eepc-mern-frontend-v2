import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faBuildingShield,
  // faCalendarDays,
  faSatellite,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const TopBoxes = () => {
  return (
    <section>
      <div className="top-boxes d-flex flex-wrap">
        <Link className="top-box col-md-3 p-3" to="/forthcoming-events">
          <FontAwesomeIcon icon={faCalendarDays} />
          {/* <FontAwesomeIcon icon={faCalendarDays} /> */}
          <h3>Forthcoming Events</h3>
          {/* <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
          </p> */}
        </Link>
        <Link className="top-box col-md-3 p-3" to="/webinars-seminars">
          <FontAwesomeIcon icon={faUsers} />
          <h3>Webinar/Seminar</h3>
          {/* <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
          </p> */}
        </Link>
        <a className="top-box col-md-3 p-3" href="#policy-highlight">
          <FontAwesomeIcon icon={faBuildingShield} />
          <h3>Policy Highlights</h3>
          {/* <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
          </p> */}
        </a>
        <a
          className="top-box col-md-3 p-3"
          href="https://techcentre.eepcindia.com/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faSatellite} />
          <h3>Technology Center</h3>
          {/* <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
          </p> */}
        </a>
      </div>
    </section>
  );
};

export default TopBoxes;
