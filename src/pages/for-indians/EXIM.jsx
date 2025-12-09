import React, { useMemo, useState } from "react";
import { getExim } from "../../services/indianApi";
import { useQuery } from "@tanstack/react-query";
import DataTable from "react-data-table-component";
import "../Table.css";
import Skeleton from "react-loading-skeleton";
import { DataTableCustom } from "../../components";

const EXIM = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: exim,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["exim"],
    queryFn: getExim,
  });

  const columns = [
    {
      name: "EG Name",
      selector: (row) => row.eg_name,
      sortable: true,
      cell: (row) => <div>{row.eg_name}</div>,
    },
    {
      name: "EG Details",
      selector: (row) => row.eg_details,
      sortable: true,
      cell: (row) => <div>{row.eg_details}</div>,
    },
  ];

  // Filter data based on the search term
  const filteredData = useMemo(() => {
    return exim?.filter((item) => {
      return (
        item.eg_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.eg_details.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [exim, searchTerm]);

  const commonSearchFields = ["eg_name", "eg_details"];
const commonSortBy = "eg_name";

  return (
    <section className="pb-70">
      <div className="container">
        {isLoading ? (
          <Skeleton height={400} />
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <>
                <DataTableCustom
                title="EXIM Glossary"
          data={filteredData || []}
          columns={columns}
          searchFields={commonSearchFields}
          defaultSortBy={commonSortBy}
                />
          </>
        )}
      </div>
    </section>
  );
};

export default EXIM;
