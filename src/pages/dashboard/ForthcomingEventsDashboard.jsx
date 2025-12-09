import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getForthcomingEvents } from "../../services/eventApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCalendarDays,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { baseFileURL } from "../../services/api";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";

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

const ForthcomingEventsDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: forthcoming,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["forthcoming"],
    queryFn: getForthcomingEvents,
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
  const filteredEvents = forthcoming?.filter((event) => {
    const { trade_fairs_events, date, to_date, place } = event;

    // Get formatted date string to be searchable
    const searchableDate = getSearchableDate(date);

    // Search logic for trade_fairs_events, place, and formatted date
    const searchInFields = [
      trade_fairs_events,
      place,
      searchableDate,
      to_date ? getSearchableDate(to_date) : "",
    ]
      .map((field) => field?.toLowerCase().includes(searchTerm.toLowerCase()))
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
              place,
              locationLink,
              image,
              circular,
            } = event;

            const sanitizedPlace = DOMPurify.sanitize(place);

            // Check if the date is valid and should be rendered
            const formattedDate = formatDate(date);

            return (
              <article className="col-lg-6" key={index}>
                <div className="post-item">
                  <div className="box-content">
                    <div className="events-featured-container">
                      <div className="events-featured-img-wrapper">
                        <div className="events-featured-wrapper">
                          <img
                            src={baseFileURL + image}
                            className="img-fluid"
                            alt={trade_fairs_events}
                          />
                        </div>
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

                      <div className="events-meta-cat-wrapper events-meta-line">
                        <div className="events-meta-category">
                          <a href={locationLink} rel="category tag">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: sanitizedPlace,
                              }}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    {formattedDate && (
                      <div className="events-category-date-wraper d-flex align-items-center">
                        <div className="events-meta-date-wrapper events-meta-line">
                          <div className="events-meta-date">
                            <span className="events-post-date">
                              <FontAwesomeIcon icon={faCalendarDays} />
                              {formattedDate}{" "}
                              {to_date && `- ${formatDate(to_date)}`}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="events-content-wrapper">
                      <h3 className="events-post-title">
                        <a href={link} target="_blank">
                          {trade_fairs_events}
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>
    </>
  );
};

export default ForthcomingEventsDashboard;
