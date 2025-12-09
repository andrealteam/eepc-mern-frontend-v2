import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCalendarDays,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { baseFileURL } from "../../services/api";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";
import { getOtherEvents } from "../../services/eventApi";

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

const OtherEvents = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: otherEvents,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["otherEvents"],
    queryFn: getOtherEvents,
  });

  const handleSearch = (event) => {
    event.preventDefault();
  };

  // Function to format and return a string for searching by date
  const getSearchableDate = (dateString) => {
    if (!dateString) return ""; // Return empty string if dateString is falsy
    const formattedDate = formatDate(dateString);
    if (!formattedDate) return ""; // Return empty string if formatting fails
    return formattedDate.toLowerCase(); // Convert to lowercase for case-insensitive search
  };

  // Filter events based on search term
  const filteredEvents = otherEvents?.filter((event) => {
    const { trade_fairs_events, from_date, to_date, place, country, details } =
      event;

    // Get formatted date string to be searchable
    const searchableFromDate = getSearchableDate(from_date);
    const searchableToDate = to_date ? getSearchableDate(to_date) : "";
    const searchablePlace = place ? place.toLowerCase() : ""; // Safe toLowerCase
    const searchableCountry = country ? country.toLowerCase() : ""; // Safe toLowerCase
    const sanitizedDetails = details ? details.toLowerCase() : ""; // Safe toLowerCase

    const searchInFields = [
      trade_fairs_events ? trade_fairs_events.toLowerCase() : "", // Safe toLowerCase
      searchableFromDate,
      searchableToDate,
      searchablePlace,
      searchableCountry,
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
              trade_fairs_events,
              date,
              to_date,
              link,
              details,
              flag,
              place,
              circular,
            } = event;

            const sanitizedData = DOMPurify.sanitize(details);

            // Check if the date is valid and should be rendered
            const formattedDate = formatDate(date);
            const formattedToDate = to_date ? formatDate(to_date) : null;

            return (
              <div className="new-seminar-box other-events" key={index}>
                <div className="new-seminar-text">
                  <div className="new-seminar-content">
                    <div className="events-category-date-wraper d-flex align-items-center">
                      <div className="events-meta-date-wrapper events-meta-line">
                        <div className="events-meta-date">
                          <span className="events-post-date">
                            <img
                              src={flag}
                              className="img-fluid"
                              alt={trade_fairs_events}
                            />
                          </span>
                        </div>
                      </div>
                      <div className="events-meta-date-wrapper events-meta-line">
                        <div className="events-meta-date">
                          <span className="events-post-date">
                            <FontAwesomeIcon icon={faCalendarDays} />
                            {formattedDate}
                            {formattedToDate && ` - ${formattedToDate}`}
                          </span>
                        </div>
                      </div>
                    </div>
                    <h3 className="mb-0">
                      <a href={link} target="_blank">
                        {trade_fairs_events}
                      </a>
                    </h3>
                    <p className="mb-3">
                      <b>Venue: </b>
                      {place}
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: sanitizedData }} />
                  </div>
                  {
                    // Check if both `link` and `circular` are empty or null
                    (circular === "" || circular === null) &&
                    (link === "" || link === null) ? null : link ? (
                      <a
                        className="publication-service-btn"
                        href={link}
                        target="_blank"
                      >
                        <span className="publication-button-icon-wrapper">
                          <span className="publication-button-icon">
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </span>
                      </a>
                    ) : (
                      <a
                        className="publication-service-btn"
                        href={baseFileURL + circular}
                        target="_blank"
                      >
                        <span className="publication-button-icon-wrapper">
                          <span className="publication-button-icon">
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </span>
                      </a>
                    )
                  }
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default OtherEvents;
