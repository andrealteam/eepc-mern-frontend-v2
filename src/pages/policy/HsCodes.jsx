import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DataTable from "react-data-table-component";
import "../Table.css";
import Skeleton from "react-loading-skeleton";
import { getHsCodes } from "../../services/policyApi";
import { DataTableCustom } from "../../components";
import { Link, useParams } from "react-router-dom";

const HsCodes = () => {
  const { hs_code } = useParams();
  console.log(hs_code);

  const {
    data: hsCodes,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["hsCodes", hs_code],
    queryFn: () => getHsCodes(hs_code),
    gcTime: 180000,
  });

  const columns = [
    {
      name: "HS Code",
      selector: (row) => row.hs_code,
      cell: (row) => <Link to={`/hs-codes/${row.hs_code}`}>{row.hs_code}</Link>,
      sortable: true,
    },
    {
      name: "Commodity Description",
      selector: (row) => row.commodity_desc,
      cell: (row) => row.commodity_desc,
      sortable: true,
    },
  ];

  return (
    <>
      {isLoading ? (
        <Skeleton height={700} />
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <DataTableCustom
            title="HS Codes"
            data={hsCodes}
            columns={columns}
            searchFields={["hs_code"]}
            defaultSortBy="hs_code"
          />
        </>
      )}
    </>
  );
};

export default HsCodes;
