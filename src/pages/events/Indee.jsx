import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DataTable from "react-data-table-component";
import "../Table.css";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";
import { getIndee, getIndeeEvents } from "../../services/eventApi";
import { DataTableCustom } from "../../components";

const Indee = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: indeeBrief,
    isLoading: isLoadingIndeeBrief,
    isError: isErrorIndeeBrief,
    error: indeeBriefError,
  } = useQuery({
    queryKey: ["indeeBrief"],
    queryFn: getIndee,
    gcTime: 180000,
  });

  // Extract data from the response
  const { indee_exhibitions } = indeeBrief || {};

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(indee_exhibitions || "");
  }, [indee_exhibitions]);

  if (isErrorIndeeBrief) {
    return <p>Error: {indeeBriefError?.message || "Something went wrong!"}</p>;
  }

  const {
    data: indee,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["indee"],
    queryFn: getIndeeEvents,
    gcTime: 180000, // Cache time (adjust if needed)
  });

  const columns = [
    {
      name: "Sl. No.",
      selector: (row) => row.id,
      sortable: true,
      width: "150px",
      sortFunction: (rowA, rowB) => {
        return Number(rowA.id) - Number(rowB.id);
      },
    },
    {
      name: "Year",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "Country",
      selector: (row) => row.country,
      sortable: true,
    },
    {
      name: "Companies Participated",
      selector: (row) => row.company_participate,
      sortable: true,
      width: "250px",
      sortFunction: (rowA, rowB) => {
        return (
          Number(rowA.company_participate) - Number(rowB.company_participate)
        );
      },
    },
  ];

  // Filter data based on the search term
  const filteredData = useMemo(() => {
    return indee?.filter((item) => {
      return (
        item.year.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.company_participate
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    });
  }, [indee, searchTerm]);

    const commonSearchFields = ["year", "city","country","company_participate"];
const commonSortBy = "year";

  return (
    <>
      {isLoadingIndeeBrief ? (
        <Skeleton height={600} />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: sanitizedMessage }} />
      )}
      {isLoading ? (
        <Skeleton height={700} />
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          {/* Table Header Section */}
         

          {/* Table Section */}
         
              <DataTableCustom
                title="INDEE Data"
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

export default Indee;
