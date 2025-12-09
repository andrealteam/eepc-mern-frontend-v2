import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DataTable from "react-data-table-component";
import { getExporterHome } from "../../services/internationalApi";
import DOMPurify from "dompurify"; // Import DOMPurify
import "../Table.css";
import Skeleton from "react-loading-skeleton";
import { DataTableCustom } from "../../components";

const ExpoterHome = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: exporter,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["exporter"],
    queryFn: getExporterHome,
    cacheTime: 180000,
  });

  // Define columns for react-data-table-component
  const columns = [
    {
      name: "Exporter Name",
      selector: (row) => row.exporter_name,
      sortable: true,
      cell: (row) => (
        <a href={row.exporter_link} target="_blank" rel="noopener noreferrer">
          {row.exporter_name}
        </a>
      ),
      width: "30%",
    },
    {
      name: "Exporter Details",
      selector: (row) => row.exporter_details,
      sortable: true,
      cell: (row) => {
        // Sanitize exporter_details before rendering
        const sanitizedDetails = DOMPurify.sanitize(row.exporter_details);
        return <div dangerouslySetInnerHTML={{ __html: sanitizedDetails }} />;
      },
    },
  ];

  // Filter data based on the search term
  const filteredData = useMemo(() => {
    if (!exporter) return [];

    return exporter.filter((item) => {
      return (
        item.exporter_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.exporter_details.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [exporter, searchTerm]);

   const commonSearchFields = ["exporter_name", "exporter_details"];
const commonSortBy = "exporter_name";

  return (
    <>
      {isLoading ? (
        <Skeleton height={600} />
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          {/* Table Header Section */}
         

          {/* Table Section */}
          
              <DataTableCustom
                title="Exporter’s Home Page"
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

export default ExpoterHome;
