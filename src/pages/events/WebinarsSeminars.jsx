import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getWebinarSeminar } from "../../services/eventApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCalendarDays,
  faArrowRight,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { baseFileURL } from "../../services/api";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";
import { formatDate } from "../../utils/helper/DateFormatter";



const WebinarsSeminars = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: webinarSeminar,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["webinarSeminar"],
    queryFn: getWebinarSeminar,
  });

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
    const { title, from_date, to_date, from_time, to_time, details } = event;

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
                    <h3 className="mb-0">
                      <a href={link}>{title}</a>
                    </h3>
                    <div dangerouslySetInnerHTML={{ __html: sanitizedData }} />
                  </div>
                  {link ? (
                    <a className="new-seminar-btn" href={link} target="_blank">
                      <span className="new-seminar-button-icon-wrapper">
                        <span className="new-seminar-button-icon">
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </span>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default WebinarsSeminars;
