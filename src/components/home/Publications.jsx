import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for routing
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon
import { useQuery } from "@tanstack/react-query"; // Import useQuery for fetching data
import { getPublications } from "../../services/homeApi"; // Import the function to fetch publications
import { baseFileURL } from "../../services/api";

// PublicationItem component to display individual publication details
const PublicationItem = ({ heading, image, link }) => {
  return (
    <div className="col-lg-6">
      <div className="publication-post-item">
        <div className="publication-box-content">
          <div className="publication-box-content-wrap">
            <div className="publication-box-content-inner">
              <div className="publication-service-icon">
                <img src={image} alt={heading} />
              </div>
              <div className="publication-contant-box">
                <h3 className="publication-service-title">
                  <Link to={link}>{heading}</Link>
                </h3>
              </div>
            </div>
          </div>
          <Link to={link} className="publication-service-btn" title={heading}>
            <span className="publication-button-icon-wrapper">
              <span className="publication-button-icon">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Publications = () => {
  // Fetch publications data from the API
  const {
    data: publications,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["publications"],
    queryFn: getPublications, // Assuming this function fetches the publications
    cacheTime: 180000,
  });

  // Check if data is loading or there is an error
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const { ie2, metal, import_export } = publications;

  return (
    <div className="col-lg-6">
      <h2 className="main-heading">Latest Publications</h2>
      <div className="row">
        {/* Render publication items dynamically based on API response */}

        {/* For "Indian Engineering Exports" publication */}
        {ie2?.status === "success" && (
          <PublicationItem
            key="ie2"
            heading={ie2?.data?.heading || "No Title"}
            image={ie2?.data?.image || ""}
            link={ie2?.data?.link || "/dashboard/indian-engineering-exports"}
          />
        )}

        {/* For "Metal Price Monitor" publication */}
        {metal?.status === "success" && (
          <PublicationItem
            key="metal"
            heading={metal?.data?.heading || "No Title"}
            image={metal?.data?.image || ""}
            link={metal?.data?.link || "/dashboard/metal-price-monitor"}
          />
        )}

        {/* For "Export Import Monitor" publication */}
        {import_export?.status === "success" && (
          <PublicationItem
            key="import_export"
            heading={import_export?.data?.heading || "No Title"}
            image={baseFileURL + import_export?.data?.image || ""}
            link={
              import_export?.data?.link ||
              "/dashboard/indian-engineering-exports"
            }
          />
        )}

        {/* View more button */}
        <div className="col-lg-6">
          <div className="publiction-btn-box">
            <h3>EXPLORE ALL</h3>
            <Link
              to="/publications-of-eepc-india"
              className="btn-1 mt-3"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
