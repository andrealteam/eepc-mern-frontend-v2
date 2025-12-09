import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCalendarDays,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import { getInfoBulletin } from "../../services/dashboardEmployeeApi";
import { infoFallbackImage } from "../../utils/constants";
import { formatDate } from "../../utils/helper/DateFormatter";

const InfoBulletin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: infoBulletin,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["infoBulletin"],
    queryFn: getInfoBulletin,
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
      infoBulletin?.filter((info) => {
        const { volume_no, issue_no, date } = info;

        // Get formatted date string to be searchable
        const searchableDate = getSearchableDate(date);

        // Search logic for volume_no, issue_no, place, and formatted date
        const searchInFields = [volume_no, issue_no, searchableDate]
          .map((field) =>
            field?.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .some(Boolean);

        return searchInFields;
      }) || []
    );
  }, [infoBulletin, searchTerm]);

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
          filteredData?.map((info, index) => {
            const { volume_no, issue_no, date, link } = info;

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
                            src={infoFallbackImage}
                            className="img-fluid"
                            alt={`Volume No. ${volume_no}, Issue No. ${issue_no}`}
                          />
                        </div>
                      </div>
                      {link ? (
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
                        ""
                      )}
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
                      <h3 className="events-post-title">
                        Volume No. {volume_no}, Issue No. {issue_no}
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

export default InfoBulletin;
