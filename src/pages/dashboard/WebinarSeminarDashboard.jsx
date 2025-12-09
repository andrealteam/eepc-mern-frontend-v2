import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getWebinarSeminar } from "../../services/eventApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCalendarDays,
  faArrowRight,
  faClock,
  faLocationDot,
  faHourglassHalf,
  faDollarSign,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { baseFileURL } from "../../services/api";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

// Helper function to add ordinal suffix to the day
const getOrdinalSuffix = (day) => {
  const suffixes = ["th", "st", "nd", "rd"];
  const val = day % 100;
  return day + (suffixes[(val - 20) % 10] || suffixes[val] || suffixes[0]);
};

// Function to format date
const formatDate = (dateString) => {
  if (!dateString) return null; // Return null if date is invalid

  const date = new Date(dateString);

  // Check for invalid date
  if (isNaN(date)) return null;

  const day = getOrdinalSuffix(date.getDate());
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

const WebinarSeminarDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredButton, setHoveredButton] = useState(null);
  const navigate = useNavigate();

  const handleKnowMoreClick = (url) => {
    navigate(`/webinars-seminars/${url}`);
  };

  const {
    data: webinarSeminar,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["webinarSeminar"],
    queryFn: getWebinarSeminar,
  });

  console.log("seminar data", webinarSeminar);

  const handleSearch = (event) => {
    event.preventDefault();
  };

  // Function to format and return a string for searching by date
  const getSearchableDate = (dateString) => {
    const formattedDate = formatDate(dateString);
    if (!formattedDate) return "";
    return formattedDate.toLowerCase(); // Convert to lowercase for case-insensitive search
  };

  // Filter events based on search term
  const filteredEvents = webinarSeminar?.filter((event) => {
    const {
      title,
      from_date,
      to_date,
      from_time,
      to_time,
      details,
      venue_type,
      physical_venue,
    } = event;

    // Get formatted date string to be searchable
    const searchableFromDate = getSearchableDate(from_date);
    const searchableToDate = to_date ? getSearchableDate(to_date) : "";
    const searchableFromTime = from_time ? from_time.toLowerCase() : "";
    const searchableToTime = to_time ? to_time.toLowerCase() : "";
    const sanitizedDetails = details ? details.toLowerCase() : "";

    // Search logic for title, from_date, to_date, from_time, to_time, and details
    const searchInFields = [
      title.toLowerCase(), // Convert title to lowercase for case-insensitive search
      searchableFromDate,
      searchableToDate,
      searchableFromTime,
      searchableToTime,
      sanitizedDetails,
    ]
      .map((field) => field.includes(searchTerm.toLowerCase())) // Check if search term is present in any field
      .some(Boolean);

    return searchInFields;
  });

  return (
    <>
      {/* Search Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-7">
          <div className="search-wrapper2">
            <div className="banner-search position-relative">
              <form onSubmit={handleSearch}>
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="row justify-content-center">
        {isLoading ? (
          <Skeleton height={600} />
        ) : isError ? (
          <div>Error: {error.message || "Something went wrong!"}</div>
        ) : filteredEvents?.length === 0 ? (
          <div>No events found</div>
        ) : (
          filteredEvents?.map((event, index) => {
            const {
              title,
              from_date,
              to_date,
              from_time,
              to_time,
              link,
              details,
              image,
              venue_type,
              physical_location,
              registration_deadline,
              webinar_type,
              member_fees,
              non_member_fees,
              contact_person1,
              contact_person1_email,
              contact_person1_phone,
              contact_person2,
              contact_person2_email,
              contact_person2_phone,
              url,
            } = event;

            const sanitizedData = DOMPurify.sanitize(details);

            // Check if the date is valid and should be rendered
            const formattedDate = formatDate(from_date);
            const formattedToDate = to_date ? formatDate(to_date) : null;
            const formattedFromTime = from_time ? from_time : null;
            const formattedToTime = to_time ? to_time : null;

            return (
              <div className="new-seminar-box" key={index}>
                <div className="new-seminar-img">
                  <img
                    src={baseFileURL + image}
                    className="img-fluid"
                    alt={title}
                  />
                </div>
                <div className="new-seminar-text">
                  <div className="new-seminar-content">
                    <h3 className="mb-0" style={{ cursor: "pointer" }}>
                      <a onClick={() => handleKnowMoreClick(url)}>{title}</a>
                    </h3>

                    <div className="events-category-date-wraper d-flex align-items-center">
                      <div className="events-meta-date-wrapper events-meta-line">
                        <div className="events-meta-date">
                          <span className="events-post-date">
                            <FontAwesomeIcon icon={faCalendarDays} />
                            {formattedDate}
                            {formattedToDate && ` - ${formattedToDate}`}
                          </span>
                        </div>
                      </div>
                      <div className="events-meta-date-wrapper events-meta-line">
                        <div className="events-meta-date">
                          <span className="events-post-date">
                            <FontAwesomeIcon icon={faClock} />
                            {formattedFromTime}
                            {formattedToTime && ` - ${formattedToTime}`}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p>
                        <b>
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            style={{ fontSize: "16px" }}
                          />{" "}
                          Venue:{" "}
                        </b>
                        {venue_type === "physical"
                          ? physical_location
                          : venue_type === "hybrid"
                          ? `${physical_location} / Virtual`
                          : "Virtual"}
                      </p>
                      <p>
                        <b>
                          <FontAwesomeIcon
                            icon={faHourglassHalf}
                            style={{ fontSize: "16px" }}
                          />{" "}
                          Registration Deadline:{" "}
                        </b>
                        {registration_deadline}
                      </p>
                      <p>
                        <b>
                          <FontAwesomeIcon
                            icon={faDollarSign}
                            style={{ fontSize: "16px" }}
                          />{" "}
                          Registration Fees:{" "}
                        </b>
                        {webinar_type === "free" ? (
                          "Free"
                        ) : (
                          <ul
                            style={{
                              marginTop: "5px",
                              gap: "5px",
                              display: "flex",
                              flexDirection: "column",
                              gap: "3px",
                            }}
                          >
                            <li>
                              Member : INR {member_fees}/+- GST per person
                            </li>
                            <li>
                              Non member : INR {non_member_fees}/+- GST per
                              person
                            </li>
                          </ul>
                        )}
                      </p>
                      {contact_person1 && (
                        <p>
                          <b>
                            <FontAwesomeIcon
                              icon={faUserGroup}
                              style={{ fontSize: "16px" }}
                            />{" "}
                            Contact Persons:
                          </b>
                          <ul
                            style={{
                              marginTop: "5px",
                              gap: "5px",
                              display: "flex",
                              flexDirection: "column",
                              gap: "3px",
                            }}
                          >
                            {contact_person1 && (
                              <li>
                                {contact_person1} —
                                {contact_person1_email && (
                                  <>
                                    <a
                                      href={`mailto:${contact_person1_email}`}
                                      style={{ color: "#1082d7" }}
                                    >
                                      {contact_person1_email}
                                    </a>
                                    ,
                                  </>
                                )}
                                <a
                                  href={`tel:${contact_person1_phone}`}
                                  style={{ color: "#1082d7" }}
                                >
                                  {" "}
                                  {contact_person1_phone}
                                </a>
                              </li>
                            )}

                            {contact_person2 && (
                              <li>
                                {contact_person2} —
                                {contact_person2_email && (
                                  <>
                                    <a
                                      href={`mailto:${contact_person2_email}`}
                                      style={{ color: "#1082d7" }}
                                    >
                                      {contact_person2_email}
                                    </a>
                                    ,
                                  </>
                                )}
                                <a
                                  href={`tel:${contact_person2_phone}`}
                                  style={{ color: "#1082d7" }}
                                >
                                  {" "}
                                  {contact_person2_phone}
                                </a>
                              </li>
                            )}
                          </ul>
                        </p>
                      )}
                    </div>
                    {/* <div dangerouslySetInnerHTML={{ __html: sanitizedData }} /> */}
                    <div style={{ display: "flex", gap: "10px", right: "0" }}>
                      {link && (
                        <>
                          <a href={link} target="_blank" className="btn-1">
                            Register here
                          </a>
                        </>
                      )}

                      <div
                        onClick={() => handleKnowMoreClick(url)}
                        className="btn-1"
                        style={{ cursor: "pointer" }}
                      >
                        Know More
                      </div>
                    </div>
                  </div>
                  {/* {link ? (
                    <a className="new-seminar-btn" href={link} target="_blank">
                      <span className="new-seminar-button-icon-wrapper">
                        <span className="new-seminar-button-icon">
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </span>
                    </a>
                  ) : (
                    ""
                  )} */}
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default WebinarSeminarDashboard;
