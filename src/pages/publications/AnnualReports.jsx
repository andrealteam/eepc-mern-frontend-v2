import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "../Table.css";
import { getAnnualReport } from "../../services/publicationApi";
import { baseFileURL } from "../../services/api";
import DataTable from "react-data-table-component";
import Skeleton from "react-loading-skeleton";
import { DataTableCustom } from "../../components";

const AnnualReports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: reports,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["reports"],
    queryFn: getAnnualReport,
  });

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter data based on search term
  const filteredReports = useMemo(() => {
    return (
      reports?.filter((item) => {
        const subject = item.subject.toLowerCase();
        const session = item.session.toLowerCase();
        return (
          subject.includes(searchTerm.toLowerCase()) ||
          session.includes(searchTerm.toLowerCase())
        );
      }) || []
    );
  }, [reports, searchTerm]);

  // Define columns for react-data-table-component
  const columns = [
    {
      name: "Subject",
      selector: (row) => row.subject,
      sortable: true,
      cell: (row) => <div>{row.subject}</div>,
    },
    {
      name: "Session",
      selector: (row) => row.session,
      sortable: true,
      cell: (row) => <div>{row.session}</div>,
    },
    {
      name: "Download",
      selector: (row) => row.file,
      cell: (row) => (
        <a
          href={baseFileURL + row.file}
          target="_blank"
          rel="noopener noreferrer"
          className="download-link"
        >
          Download
        </a>
      ),
    },
  ];

     const commonSearchFields = ["subject", "session"];
const commonSortBy = "subject";

  return (
    <>
      {isLoading ? (
         <Skeleton height={600} />
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          {/* Table Header Section */}
         
               <DataTableCustom
                title="Annual Reports"
          data={filteredReports || []}
          columns={columns}
          searchFields={commonSearchFields}
                defaultSortBy={commonSortBy}
                />
        </>
      )}
    </>
  );
};

export default AnnualReports;