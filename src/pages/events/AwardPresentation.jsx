import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";
import DataTable from "react-data-table-component";
import { getPastAwardPresentation } from "../../services/eventApi";
import { Link } from "react-router-dom";
import { formatDate, matchDate } from "../../utils/helper/DateFormatter";

const AwardPresentation = () => {
  const {
    data: PastAwards,
    isLoading: isLoadingPastAwards,
    isError: isErrorPastAwards,
    error: errorPastAwards,
  } = useQuery({
    queryKey: ["PastAwards"],
    queryFn: getPastAwardPresentation,
    gcTime: 180000,
  });

  if (isErrorPastAwards) {
    return <p>Error: {errorPastAwards?.message || "Something went wrong!"}</p>;
  }

  const national_awards = PastAwards?.national_awards || [];
  const eastern_region = PastAwards?.eastern_region || [];
  const western_region = PastAwards?.western_region || [];
  const northern_region = PastAwards?.northern_region || [];
  const southern_region = PastAwards?.southern_region || [];
  // const green_awards = PastAwards?.green_awards || [];
  const quality_awards = PastAwards?.quality_awards || [];

  const [searchTerm, setSearchTerm] = useState("");

  // Columns for the DataTable
  const columns = [
    {
      name: "Name",
      selector: (row) => (
        <Link to={`/award-presentation/${row.slug}`}>{row.name}</Link>
      ),
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => formatDate(row.date), // Format the date using the formatDate function
      sortable: true,
    },
    {
      name: "Place",
      selector: (row) => row.place,
      sortable: true,
    },
  ];

  // Filter data based on the search term
  const filteredAwards = (awards) => {
    return awards?.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        matchDate(item.date, searchTerm) || // Match date, month, or year
        item.place.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };

  return (
    <>
      {isLoadingPastAwards ? (
        <Skeleton height={700} width="100%" />
      ) : (
        <>
          <div className="row align-items-center justify-content-center">
            <h2 className="award-presentation-header col-lg-8 ">
              Archive of Past Award Presentations
            </h2>
            {/* Search Input */}
            <div className="search-container mb-4 col-lg-4">
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
            </div>
          </div>

          {/* Render DataTable for each region */}
          {[
            { title: "NATIONAL AWARDS", awards: national_awards },
            { title: "EASTERN REGION", awards: eastern_region },
            { title: "WESTERN REGION", awards: western_region },
            { title: "NORTHERN REGION", awards: northern_region },
            { title: "SOUTHERN REGION", awards: southern_region },
            // { title: "GREEN AWARDS", awards: green_awards },
            { title: "QUALITY AWARD", awards: quality_awards },
          ].map((region, index) => (
            <div className="award-container" key={index}>
              <h2>{region.title}</h2>

              {/* DataTable for each region */}
              <DataTable
                title={""}
                columns={columns}
                data={filteredAwards(region.awards)} // Filtered data for the current region
                pagination
                paginationRowsPerPageOptions={[5, 10, 15, 20]}
                paginationPerPage={5}
                responsive
                noHeader
                highlightOnHover
                striped
                defaultSortField="name"
                defaultSortAsc={true}
                customStyles={{
                  table: {
                    style: {
                      borderRadius: "8px",
                      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                    },
                  },
                  headRow: {
                    style: {
                      backgroundColor: "#f1f5f9",
                      color: "#09377a",
                      fontWeight: "600",
                      fontSize: "16px",
                    },
                  },
                  rows: {
                    style: {
                      fontSize: "14px",
                      padding: "10px 15px",
                    },
                  },
                  cells: {
                    style: {
                      padding: "10px 15px",
                    },
                  },
                  pagination: {
                    style: {
                      borderTop: "1px solid #e5e7eb",
                      backgroundColor: "#f9fafb",
                      fontSize: "14px",
                      color: "black",
                    },
                  },
                }}
              />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default AwardPresentation;
