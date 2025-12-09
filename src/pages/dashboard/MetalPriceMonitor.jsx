import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import { getMetalPriceMonitor } from "../../services/dashboardEmployeeApi";

const MetalPriceMonitor = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: metalPrice,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["metalPrice"],
    queryFn: getMetalPriceMonitor,
    gcTime: 180000,
  });

  const handleSearch = (event) => {
    event.preventDefault();
  };

  // Filter events based on search term
  const filteredData = useMemo(() => {
    return (
      metalPrice?.filter((info) => {
        const { year, month } = info;

        // Search logic for  date
        const searchInFields = [year, month]
          .map((field) =>
            field?.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .some(Boolean);

        return searchInFields;
      }) || []
    );
  }, [metalPrice, searchTerm]);

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
            const { year, month, image, pdf, link } = info;

            return (
              <article className="col-lg-6" key={index}>
                <div className="post-item">
                  <div className="box-content">
                    <div className="events-featured-container">
                      <div className="events-featured-img-wrapper">
                        <div className="events-featured-wrapper">
                          <img
                            src={image}
                            className="img-fluid"
                            alt={`${month}, ${year}`}
                          />
                        </div>
                      </div>
                      {
                        // Check if both `link` and `pdf` are empty or null
                        (pdf === "" || pdf === null) &&
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
                            href={pdf}
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
                    <div className="events-content-wrapper">
                      <h3 className="events-post-title">
                        {month}, {year}
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

export default MetalPriceMonitor;
