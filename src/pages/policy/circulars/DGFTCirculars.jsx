import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import DataTableCustom from "../../../components/global/DataTableCustom";
import { getDgftCirculars } from "../../../services/policyApi";
import { baseFileURLInfo } from "../../../services/api";
import { formatDate } from "../../../utils/helper/DateFormatter";

const DGFTCirculars = ({
  commonDataColumns,
  commonSearchFields,
  commonSortBy,
}) => {
  // dgftCirculars
  const {
    data: dgftCirculars = [],
    isLoadingDgftCirculars,
    isErrorDgftCirculars,
    errorDgftCirculars,
  } = useQuery({
    queryKey: ["dgftCirculars"],
    queryFn: getDgftCirculars,
  });

  return (
    <>
      {isLoadingDgftCirculars ? (
        <Skeleton height={600} />
      ) : isErrorDgftCirculars ? (
        <div>Error: {errorDgftCirculars.message}</div>
      ) : (
        <DataTableCustom
          title="DGFT Circulars"
          data={dgftCirculars}
          columns={commonDataColumns}
          searchFields={commonSearchFields}
          defaultSortBy={commonSortBy}
        />
      )}
    </>
  );
};

export default DGFTCirculars;
