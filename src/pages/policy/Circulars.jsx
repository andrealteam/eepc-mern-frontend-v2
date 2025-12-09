import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { formatDate } from "../../utils/helper/DateFormatter";
import { baseFileURLInfo } from "../../services/api";
import { DataTableCustom } from "../../components";
import {
  getCentralExcise,
  getCentralExciseCirculars,
  getCustomsCirculars,
  getCustomsNotifications,
  getDgftCirculars,
  getDgftGst,
  getDgftNotifications,
  getDgftPublicNotice,
  getDgftTradeNotices,
} from "../../services/policyApi";
import DGFTCirculars from "./circulars/DGFTCirculars";

// Define columns for react-data-table-component
const commonDataColumns = [
  {
    name: "Date",
    selector: (row) => row.date,
    sortable: true,
    cell: (row) => <>{formatDate(row.date)}</>,
  },
  {
    name: "Circular No",
    selector: (row) => row.circular_no,
    cell: (row) => (
      <a
        href={baseFileURLInfo + row.file}
        target="_blank"
        rel="noopener noreferrer"
        className="download-link"
      >
        {row.circular_no}
      </a>
    ),
    sortable: true,
  },
  {
    name: "Subject",
    selector: (row) => row.subject,
    cell: (row) => row.subject,
  },
];
const commonSearchFields = ["date", "circular_no", "subject"];
const commonSortBy = "date";

const Circulars = () => {
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
  // dgft-public-notice
  const {
    data: dgftPublicNotices = [],
    isLoadingDgftPublicNotices,
    isErrorDgftPublicNotices,
    errorDgftPublicNotices,
  } = useQuery({
    queryKey: ["dgftPublicNotices"],
    queryFn: getDgftPublicNotice,
  });
  // dgft-notifications
  const {
    data: dgftNotifications = [],
    isLoadingDgftNotifications,
    isErrorDgftNotifications,
    errorDgftNotifications,
  } = useQuery({
    queryKey: ["dgftNotifications"],
    queryFn: getDgftNotifications,
  });
  // dgft-notifications
  const {
    data: dgftTradeNotices = [],
    isLoadingDgftTradeNotices,
    isErrorDgftTradeNotices,
    errorDgftTradeNotices,
  } = useQuery({
    queryKey: ["dgftTradeNotices"],
    queryFn: getDgftTradeNotices,
  });
  // dgft-gst-circular-notification-details
  const {
    data: dgftGst = [],
    isLoadingDgftGst,
    isErrorDgftGst,
    errorDgftGst,
  } = useQuery({
    queryKey: ["dgftGst"],
    queryFn: getDgftGst,
  });
  // dgft-rbi
  const {
    data: dgftRbi = [],
    isLoadingDgftRbi,
    isErrorDgftRbi,
    errorDgftRbi,
  } = useQuery({
    queryKey: ["dgftRbi"],
    queryFn: getDgftGst,
  });
  // customs-notifications
  const {
    data: customsNotifications = [],
    isLoadingCustomsNotifications,
    isErrorCustomsNotifications,
    errorCustomsNotifications,
  } = useQuery({
    queryKey: ["customsNotifications"],
    queryFn: getCustomsNotifications,
  });
  // customs-notifications
  const {
    data: customsCirculars = [],
    isLoadingCustomsCirculars,
    isErrorCustomsCirculars,
    errorCustomsCirculars,
  } = useQuery({
    queryKey: ["customsCirculars"],
    queryFn: getCustomsCirculars,
  });
  // central-excise-notifications
  const {
    data: centralExcise = [],
    isLoadingCentralExcise,
    isErrorCentralExcise,
    errorCentralExcise,
  } = useQuery({
    queryKey: ["centralExcise"],
    queryFn: getCentralExcise,
  });
  // central-excise-circulars
  const {
    data: centralExciseCirculars = [],
    isLoadingCentralExciseCirculars,
    isErrorCentralExciseCirculars,
    errorCentralExciseCirculars,
  } = useQuery({
    queryKey: ["centralExciseCirculars"],
    queryFn: getCentralExciseCirculars,
  });

  return (
    <>
      <DGFTCirculars
        commonDataColumns={commonDataColumns}
        commonSearchFields={commonSearchFields}
        commonSortBy={commonSortBy}
      />
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
      {isLoadingDgftPublicNotices ? (
        <Skeleton height={600} />
      ) : isErrorDgftPublicNotices ? (
        <div>Error: {errorDgftPublicNotices.message}</div>
      ) : (
        <DataTableCustom
          title="DGFT Public Notices"
          data={dgftPublicNotices}
          columns={commonDataColumns}
          searchFields={commonSearchFields}
          defaultSortBy={commonSortBy}
        />
      )}
      {isLoadingDgftNotifications ? (
        <Skeleton height={600} />
      ) : isErrorDgftNotifications ? (
        <div>Error: {errorDgftNotifications.message}</div>
      ) : (
        <DataTableCustom
          title="DGFT Notificaions"
          data={dgftNotifications}
          columns={commonDataColumns}
          searchFields={commonSearchFields}
          defaultSortBy={commonSortBy}
        />
      )}
      {isLoadingDgftTradeNotices ? (
        <Skeleton height={600} />
      ) : isErrorDgftTradeNotices ? (
        <div>Error: {errorDgftTradeNotices.message}</div>
      ) : (
        <DataTableCustom
          title="DGFT Trade Notices"
          data={dgftTradeNotices}
          columns={commonDataColumns}
          searchFields={commonSearchFields}
          defaultSortBy={commonSortBy}
        />
      )}
      {isLoadingDgftGst ? (
        <Skeleton height={600} />
      ) : isErrorDgftGst ? (
        <div>Error: {errorDgftGst.message}</div>
      ) : (
        <DataTableCustom
          title="GST Circulars/Notifications"
          data={dgftGst}
          columns={commonDataColumns}
          searchFields={commonSearchFields}
          defaultSortBy={commonSortBy}
        />
      )}
      {isLoadingDgftRbi ? (
        <Skeleton height={600} />
      ) : isErrorDgftRbi ? (
        <div>Error: {errorDgftRbi.message}</div>
      ) : (
        <DataTableCustom
          title="RBI Circulars"
          data={dgftRbi}
          columns={commonDataColumns}
          searchFields={commonSearchFields}
          defaultSortBy={commonSortBy}
        />
      )}
      {isLoadingCustomsNotifications ? (
        <Skeleton height={600} />
      ) : isErrorCustomsNotifications ? (
        <div>Error: {errorCustomsNotifications.message}</div>
      ) : (
        <DataTableCustom
          title="Custom Notifications"
          data={customsNotifications}
          columns={commonDataColumns}
          searchFields={commonSearchFields}
          defaultSortBy={commonSortBy}
        />
      )}
      {isLoadingCustomsCirculars ? (
        <Skeleton height={600} />
      ) : isErrorCustomsCirculars ? (
        <div>Error: {errorCustomsCirculars.message}</div>
      ) : (
        <DataTableCustom
          title="Customs Circulars"
          data={customsCirculars}
          columns={commonDataColumns}
          searchFields={commonSearchFields}
          defaultSortBy={commonSortBy}
        />
      )}
      {isLoadingCentralExcise ? (
        <Skeleton height={600} />
      ) : isErrorCentralExcise ? (
        <div>Error: {errorCentralExcise.message}</div>
      ) : (
        <DataTableCustom
          title="Central Excise Notifications"
          data={centralExcise}
          columns={commonDataColumns}
          searchFields={commonSearchFields}
          defaultSortBy={commonSortBy}
        />
      )}
      {isLoadingCentralExciseCirculars ? (
        <Skeleton height={600} />
      ) : isErrorCentralExciseCirculars ? (
        <div>Error: {errorCentralExciseCirculars.message}</div>
      ) : (
        <DataTableCustom
          title="Central Excise Circulars"
          data={centralExciseCirculars}
          columns={commonDataColumns}
          searchFields={commonSearchFields}
          defaultSortBy={commonSortBy}
        />
      )}
    </>
  );
};

export default Circulars;
