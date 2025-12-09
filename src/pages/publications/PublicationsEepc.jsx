import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import DOMPurify from "dompurify";
import { useQuery } from "@tanstack/react-query";
import "../Table.css";
import { getPublications } from "../../services/publicationApi";
import { baseFileURL } from "../../services/api";
import Skeleton from "react-loading-skeleton";
import { DataTableCustom } from "../../components";

const PublicationsEepc = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // React Query hook for fetching publications
  const {
    data: publications = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["publications"],
    queryFn: getPublications,
  });

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter data based on search term
  const filteredData = useMemo(() => {
    // Only filter if the data is an array
    if (!Array.isArray(publications)) {
      return []; // Prevent filter if data is not an array
    }

    return publications?.filter((item) => {
      const date = new Date(item.date);
      const formattedDate = date
        .toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
        .toLowerCase();
      const description = item.description.toLowerCase();
      return (
        formattedDate.includes(searchTerm.toLowerCase()) ||
        description.includes(searchTerm.toLowerCase())
      );
    });
  }, [publications, searchTerm]);

  // Define columns for react-data-table-component
  const columns = [
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
      cell: (row) => {
        const date = new Date(row.date);
        const formattedDate = date.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
        return <div>{formattedDate}</div>;
      },
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
      cell: (row) => {
        const sanitizedDescription = DOMPurify.sanitize(row.description);
        return <div>{sanitizedDescription}</div>;
      },
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

    const commonSearchFields = ["date", "description"];
const commonSortBy = "date";

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
                title="Publications of EEPC India"
          data={filteredData || []}
          columns={columns}
          searchFields={commonSearchFields}
                defaultSortBy={commonSortBy}
                />
        </>
      )}
    </>
  );
};

export default PublicationsEepc;
