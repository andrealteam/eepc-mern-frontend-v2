import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { DataTableCustom } from "../../components";
import { baseFileURLNews } from "../../services/api";
import { useForm } from "react-hook-form";
import "../for-internationals/supplier.css";
import { getMediaCoverage } from "../../services/resourcesApi";
import DatePicker from "react-datepicker";
import { format, isValid } from "date-fns";

const MediaRoom = () => {
  const [queryParams, setQueryParams] = useState({ toDate: "", fromDate: "" });

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fromDate: null,
      toDate: null,
    },
  });

  const {
    data: mediaRoom,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["media-room", queryParams],
    queryFn: () => getMediaCoverage(queryParams),
  });

  const onSubmit = (formData) => {
    const formattedFrom = isValid(formData.fromDate)
      ? format(formData.fromDate, "dd-MM-yyyy")
      : "";
    const formattedTo = isValid(formData.toDate)
      ? format(formData.toDate, "dd-MM-yyyy")
      : "";

    setQueryParams({
      fromDate: formattedFrom,
      toDate: formattedTo,
    });
  };

  const columns = [
    {
      name: "Date",
      selector: (row) => row.Published_On,
      sortable: true,
      cell: (row) => <>{format(row.Published_On, "do MMMM yyyy")}</>,
    },
    {
      name: "Newspaper",
      selector: (row) => row.News_Paper,
      cell: (row) => row.News_Paper,
    },
    {
      name: "Headline",
      selector: (row) => row.News_Headline,
      cell: (row) => row.News_Headline,
    },
    {
      name: "View",
      selector: (row) => row.PDF_File,
      cell: (row) =>
        row.PDF_File ? (
          <a
            href={baseFileURLNews + row.PDF_File}
            target="_blank"
            rel="noreferrer"
          >
            View PDF
          </a>
        ) : (
          ""
        ),
    },
    {
      name: "Link",
      selector: (row) => row.Link_URL,
      cell: (row) =>
        row.Link_URL ? (
          <a href={row.Link_URL} target="_blank" rel="noreferrer">
            Link
          </a>
        ) : (
          ""
        ),
    },
  ];

  if (isError) {
    return <p>Error: {error?.message}</p>;
  }

  return (
    <>
      <div className="supplier-container">
        <div className="row align-items-center mb-3">
          <div className="col-lg-2 mb-3 mb-lg-0">
            <p className="m-0">
              <b>Search By</b>
            </p>
          </div>
          <div className="col-lg-10 mb-3 mb-lg-0">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="row align-items-center"
            >
              <div className="col-lg-5 mb-3 mb-lg-0">
                <DatePicker
                  id="fromDate"
                  selected={watch("fromDate")}
                  onChange={(date) => setValue("fromDate", date)}
                  className="form-control"
                  placeholderText="From Date"
                  dateFormat="dd-MM-yyyy"
                  wrapperClassName="w-100"
                />
              </div>

              <div className="col-lg-5 mb-3 mb-lg-0">
                <DatePicker
                  id="toDate"
                  selected={watch("toDate")}
                  onChange={(date) => setValue("toDate", date)}
                  className="form-control"
                  placeholderText="To Date"
                  dateFormat="dd-MM-yyyy"
                  wrapperClassName="w-100"
                />
              </div>

              <div className="col-lg-2 mb-3 mb-lg-0">
                <button
                  type="submit"
                  className="btn"
                  disabled={isSubmitting || isLoading}
                >
                  {isLoading ? "Searching..." : "Search"}
                </button>
              </div>
            </form>
            {(errors.fromDate || errors.toDate) && (
              <p className="text-danger text-center mt-2">
                {errors.fromDate?.message || errors.toDate?.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Data Table */}
      {isLoading ? (
        <Skeleton height={400} />
      ) : mediaRoom?.news_data?.length > 0 ? (
        <DataTableCustom
          data={mediaRoom.news_data}
          columns={columns}
          defaultSortBy="supplier"
        />
      ) : (
        queryParams.toDate &&
        queryParams.fromDate && (
          <div className="message-container mb-5">
            <p className="text-muted">
              {`No data for Media Coverage between ${queryParams.fromDate} and ${queryParams.toDate}.`}
            </p>
          </div>
        )
      )}
    </>
  );
};

export default MediaRoom;
