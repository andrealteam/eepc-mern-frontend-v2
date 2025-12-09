import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DataTable from "react-data-table-component";
import "../Table.css";
import { getDepbRates } from "../../services/policyApi";
import Skeleton from "react-loading-skeleton";
import { DataTableCustom } from "../../components";

const DepbRates = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: depbRates,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["depbRates"],
    queryFn: getDepbRates,
  });

  // Filter data based on the search term
  

  const columns = [
    {
      name: "Sl.No",
      selector: (row) => row.full_no,
      sortable: true,
      sortFunction: (rowA, rowB) => {
        return Number(rowA.full_no) - Number(rowB.full_no);
      },
      cell: (row) => <div>{row.full_no}</div>,
    },
    {
      name: "Description",
      selector: (row) => row.depb_desc,
      sortable: true,
      cell: (row) => <div>{row.depb_desc}</div>,
    },
    {
      name: "DEPB Rate",
      selector: (row) => row.depb_rate,
      sortable: true,
      cell: (row) => <div>{row.depb_rate}</div>,
    },
    {
      name: "Value (Rs.) Cap",
      selector: (row) => row.depb_value,
      sortable: true,
      cell: (row) => <div>{row.depb_value}</div>,
    },
  ];

   const commonSearchFields = ["full_no", "depb_desc","depb_rate","depb_value"];
const commonSortBy = "full_no";

  return (
    <>
      {isLoading ? (
        <Skeleton height={600} />
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
         
              
               <DataTableCustom
                title="DEPB Rates"
          data={depbRates || []}
          columns={columns}
          searchFields={commonSearchFields}
                defaultSortBy={commonSortBy}
                />
        </>
      )}
    </>
  );
};

export default DepbRates;
