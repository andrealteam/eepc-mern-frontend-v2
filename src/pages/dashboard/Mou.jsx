import { useQuery } from "@tanstack/react-query";
import React, { useMemo, useState } from "react";
import { getMou } from "../../services/dashboardEmployeeApi";
import Skeleton from "react-loading-skeleton";
import DOMPurify from "dompurify";
import DataTable from "react-data-table-component";
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

const Mou = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: mou,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["mou"],
    queryFn: getMou,
  });

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to format and return a string for searching by date
  const getSearchableDate = (dateString) => {
    const formattedDate = formatDate(dateString);
    if (!formattedDate) return "";
    return formattedDate.toLowerCase(); // Convert to lowercase for case-insensitive search
  };

  // Filter data based on search term
  const filteredData = useMemo(() => {
    return (
      mou?.filter((item) => {
        const { mou_date, agreement_desc } = item;

        // Sanitize agreement_desc for HTML content
        const sanitizedDesc = DOMPurify.sanitize(agreement_desc);

        // Get formatted date string to be searchable
        const searchableDate = getSearchableDate(mou_date);

        // Search logic for agreement_desc and formatted date
        const searchInFields = [sanitizedDesc, searchableDate]
          .map((field) =>
            field?.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .some(Boolean);

        return searchInFields;
      }) || []
    );
  }, [mou, searchTerm]);

  // Define columns for react-data-table-component
  const columns = [
    {
      name: "Date",
      selector: (row) => row.mou_date,
      sortable: true,
      cell: (row) => <div>{formatDate(row.mou_date)}</div>,
    },
    {
      name: "MOUs",
      selector: (row) => row.agreement_desc,
      sortable: true,
      cell: (row) => (
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(row.agreement_desc),
          }}
        />
      ),
    },
    {
      name: "View",
      selector: (row) => row.file,
      cell: (row) => (
        <a
          href={baseFileURL + row.file}
          target="_blank"
          rel="noopener noreferrer"
          className="download-link"
        >
          View
        </a>
      ),
    },
  ];

  return (
    <>
      {isLoading ? (
        <div>
          <Skeleton height={600} />
        </div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          {/* Table Header Section */}
          <div className="table-header">
            <h2 className="table-title">MOUs</h2>
            {/* Search Input */}
            <div className="search-container mb-4">
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          {/* Table Section */}
          <div className="table-container mb-5">
            <DataTable
              title={""}
              columns={columns}
              data={filteredData} // Using filtered data here
              pagination
              paginationRowsPerPageOptions={[5, 10, 15, 20]}
              paginationPerPage={5}
              responsive
              noHeader
              defaultSortField="sl_no" // Default sorting by Sl. No.
              defaultSortAsc={true}
              highlightOnHover
              striped
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
                    padding: "10px",
                    wordWrap: "break-word", // Prevent horizontal overflow
                  },
                },
                cells: {
                  style: {
                    padding: "10px 15px",
                    whiteSpace: "normal", // Allow text to wrap
                    wordWrap: "break-word", // Prevent text overflow
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
        </>
      )}
    </>
  );
};

export default Mou;
