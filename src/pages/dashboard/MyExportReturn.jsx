import React, { useMemo, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { getExportReturn } from "../../services/dashboardMemberApi ";
import DataTable from "react-data-table-component";
import DOMPurify from "dompurify";
import "./profile.css";

const MyExportReturn = () => {
  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  const { user, loading, error } = useAuth();

  if (error) return <div>Error: {error}</div>; // Show any authentication errors

  const member_id = user.member_id;

  // Fetch profile data using the emp_code from AuthContext
  const {
    data: exportReturn,
    isLoading,
    isError,
    error: exportReturnError,
  } = useQuery({
    queryKey: ["exportReturn", member_id],
    queryFn: () => getExportReturn(member_id),
    gcTime: 180000,
  });

  if (isError)
    return <p>Error: {exportReturnError.message || "Something went wrong!"}</p>;

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter data based on the search query
  const filteredData = useMemo(() => {
    return (
      exportReturn?.filter((item) => {
        return (
          item.Id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.Reporting_Year.toLowerCase().includes(
            searchQuery.toLowerCase()
          ) ||
          item.Reporting_Month.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }) || []
    );
  }, [exportReturn, searchQuery]);

  // Define columns for react-data-table-component
  const columns = [
    {
      name: "Id",
      selector: (row) => row.Id,
      sortable: true,
      key: "Id",
      width: "80px",
      sortFunction: (rowA, rowB) => {
        return Number(rowA.Id) - Number(rowB.Id);
      },
    },
    {
      name: "Reporting Year",
      selector: (row) => row.Reporting_Year,
      cell: (row) => row.Reporting_Year,
    },
    {
      name: "Reporting Month",
      selector: (row) => row.Reporting_Month,
      cell: (row) => row.Reporting_Month,
      sortable: true,
    },

    {
      name: "Export Performance Data",
      selector: (row) => row.ExportPerformanceData,
      cell: (row) => {
        const sanitizedData = DOMPurify.sanitize(row.ExportPerformanceData);
        return <div dangerouslySetInnerHTML={{ __html: sanitizedData }} />;
      },
    },
    {
      name: "Cumulative Export",
      selector: (row) => row.cumulative_export,
      cell: (row) => {
        const sanitizedData = DOMPurify.sanitize(row.cumulative_export);
        return <div dangerouslySetInnerHTML={{ __html: sanitizedData }} />;
      },
    },
    {
      name: "Deemed Export Data",
      selector: (row) => row.DeemedExportData,
      cell: (row) => {
        const sanitizedData = DOMPurify.sanitize(row.DeemedExportData);
        return <div dangerouslySetInnerHTML={{ __html: sanitizedData }} />;
      },
    },
  ];

  // Prepare data for the table
  const data = useMemo(() => {
    return (
      filteredData?.map((item) => ({
        Id: Number(item.Id),
        Reporting_Year: item.Reporting_Year,
        Reporting_Month: item.Reporting_Month,
        ExportPerformanceData: item.ExportPerformanceData,
        DeemedExportData: item.DeemedExportData,
        cumulative_export: item.cumulative_export,
      })) || []
    );
  }, [filteredData]);

  return (
    <>
      {isLoading ? (
        <Skeleton height={600} />
      ) : (
        <>
          <div className="mb-5">
            <p>
              EEPC India has introduced a facility for filing monthly export
              return online. Kindly furnish monthly returns of exports including
              NIL returns by the 15th day of every month. For any query in this
              regard, please contact Mr. Nilanjan Goswami at{" "}
              <a href="mailto:ngoswami@eepcindia.net" className="link">
                ngoswami@eepcindia.net
              </a>
            </p>
            <div>
              <a
                className="btn-1"
                target="_blank"
                href="http://export.eepcindia.com/member/capture_export_info"
              >
                <span>Submit Export Return</span>
              </a>
            </div>
          </div>
          {/* Table Header Section */}
          <div className="table-header">
            <h2 className="table-title">Product Panels</h2>
            {/* Search Input */}
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          {/* Table Section */}
          <div className="table-container mb-5">
            <DataTable
              title={""}
              columns={columns}
              data={data}
              pagination
              paginationRowsPerPageOptions={[10, 15, 20]}
              paginationPerPage={10}
              responsive
              noHeader
              defaultSortField="id"
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
                headCells: {
                  style: {
                    whiteSpace: "break-spaces",
                    wordWrap: "break-word",
                  },
                },
                rows: {
                  style: {
                    fontSize: "14px",
                    padding: "10px 15px",
                    wordWrap: "break-word",
                  },
                },
                cells: {
                  style: {
                    padding: "10px 15px",
                    whiteSpace: "break-spaces", // Allow text to wrap
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

export default MyExportReturn;
