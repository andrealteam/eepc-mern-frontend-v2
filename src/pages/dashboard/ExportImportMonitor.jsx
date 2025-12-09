import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCalendarDays,
  faArrowRight,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import { getIeMonitor } from "../../services/dashboardEmployeeApi";
import { baseFileURL } from "../../services/api";

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

const ExportImportMonitor = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: ieMonitor,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["ieMonitor"],
    queryFn: getIeMonitor,
    gcTime: 180000,
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
  const filteredData = useMemo(() => {
    return (
      ieMonitor?.filter((event) => {
        const { description, date } = event;

        // Get formatted date string to be searchable
        const searchableDate = getSearchableDate(date);

        // Search logic for description, place, and formatted date
        const searchInFields = [description, searchableDate]
          .map((field) =>
            field?.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .some(Boolean);

        return searchInFields;
      }) || []
    );
  }, [ieMonitor, searchTerm]);

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
        ) : filteredData?.length === 0 ? (
          <div>No events found</div>
        ) : (
          filteredData?.map((event, index) => {
            const { description, date, link, file, image } = event;

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
                            alt={description}
                          />
                        </div>
                      </div>
                      {
                        // Check if both `link` and `file` are empty or null
                        (file === "" || file === null) &&
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
                            href={file}
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
                    {formattedDate && (
                      <div className="events-category-date-wraper d-flex align-items-center">
                        <div className="events-meta-date-wrapper events-meta-line">
                          <div className="events-meta-date">
                            <span className="events-post-date">
                              <FontAwesomeIcon icon={faCalendarDays} />
                              {formattedDate}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="events-content-wrapper">
                      <h3 className="events-post-description">{description}</h3>
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

export default ExportImportMonitor;
