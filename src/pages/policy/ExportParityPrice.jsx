import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";
import {
  getExportParityPrice,
  getExportParityPriceFAQ,
  getExportParityPriceTable,
} from "../../services/policyApi";
import { DataTableCustom } from "../../components";
import { baseFileURL } from "../../services/api";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import "../for-internationals/supplier.css";

const ExportParityPrice = () => {
  const [queryParams, setQueryParams] = useState({ month: "", year: "" });
  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  const currentYear = new Date().getFullYear();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      month: currentMonth,
      year: currentYear,
    },
  });

  // Get export parity info (top content + year array)
  const {
    data: exportParity,
    isLoading: isLoadingContent,
    isError: isErrorContent,
    error: errorContent,
  } = useQuery({
    queryKey: ["export-parity"],
    queryFn: getExportParityPrice,
    gcTime: 180000,
  });

  // Get FAQs
  const {
    data: faqs,
    isLoading: isLoadingFAQ,
    isError: isErrorFAQ,
    error: errorFAQ,
  } = useQuery({
    queryKey: ["export-parity-faq"],
    queryFn: getExportParityPriceFAQ,
    gcTime: 180000,
  });

  // Export parity Table data
  const {
    data: exportParityTable,
    isLoading: isLoadingExportParityTable,
    isError: isErrorExportParityTable,
    error: errorExportParityTable,
  } = useQuery({
    queryKey: ["export-parity-table", queryParams],
    queryFn: () => getExportParityPriceTable(queryParams),
  });

  const onSubmit = (formData) => {
    setQueryParams({ month: formData.month, year: formData.year });
  };

  const columns = [
    {
      name: "Supplier",
      selector: (row) => row.supplier,
      cell: (row) => row.supplier,
    },
    { name: "HRC", selector: (row) => row.hrc, cell: (row) => row.hrc },
    { name: "CRC", selector: (row) => row.crc, cell: (row) => row.crc },
    {
      name: "GP Coil",
      selector: (row) => row.gp_coil,
      cell: (row) => row.gp_coil,
    },
    {
      name: "Wire Rods",
      selector: (row) => row.wire_rods,
      cell: (row) => row.wire_rods,
    },
    {
      name: "Alloy Bars",
      selector: (row) => row.alloy_bars,
      cell: (row) => row.alloy_bars,
    },
    {
      name: "Price Details",
      selector: (row) => row.files,
      center: true,
      cell: (row) => (
        <a
          href={baseFileURL + row.files}
          target="_blank"
          rel="noopener noreferrer"
          className="download-link"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: "20px" }} />
        </a>
      ),
    },
  ];

  const sanitizedTopContent = DOMPurify.sanitize(
    exportParity?.export_parity_price || ""
  );
  const sanitizedBottomContent = DOMPurify.sanitize(
    exportParity?.export_parity_price_contact || ""
  );

  if (isErrorContent || isErrorFAQ || isErrorExportParityTable) {
    return (
      <p>
        Error:{" "}
        {errorContent?.message ||
          errorFAQ?.message ||
          errorExportParityTable?.message}
      </p>
    );
  }

  return (
    <>
      {/* Top Content */}
      {isLoadingContent ? (
        <Skeleton height={200} />
      ) : (
        <div
          className="mb-5"
          dangerouslySetInnerHTML={{ __html: sanitizedTopContent }}
        />
      )}

      {/* Form */}
      <div className="supplier-container">
        <h3 className="my-5">{`Export Parity Price for ${exportParityTable?.month} ${exportParityTable?.year}`}</h3>
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
                <select
                  {...register("month", { required: "Please select a month" })}
                  value={watch("month")}
                  className="form-select"
                >
                  {exportParityTable?.month_array?.map((month, idx) => (
                    <option value={month} key={idx}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-lg-5 mb-3 mb-lg-0">
                <select
                  {...register("year", { required: "Please select a year" })}
                  value={watch("year")}
                  className="form-select"
                >
                  {exportParityTable?.year_array?.map((year, idx) => (
                    <option value={year} key={idx}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-lg-2 mb-3 mb-lg-0">
                <button
                  type="submit"
                  className="btn"
                  disabled={isSubmitting || isLoadingExportParityTable}
                >
                  {isLoadingExportParityTable ? "Searching..." : "Search"}
                </button>
              </div>
            </form>
          </div>
          {(errors.year || errors.month) && (
            <p className="text-danger text-center mt-2">
              {errors.year.message || errors.month.message}
            </p>
          )}
        </div>
      </div>

      {/* Data Table */}
      {isLoadingExportParityTable ? (
        <Skeleton height={400} />
      ) : exportParityTable?.table_data?.length > 0 ? (
        <DataTableCustom
          data={exportParityTable.table_data}
          columns={columns}
          defaultSortBy="supplier"
          isPagination={false}
        />
      ) : (
        queryParams.month &&
        queryParams.year && (
          <div className="message-container mb-5">
            <p className="text-muted">
              {`No data for Export Parity Price for ${queryParams.month} ${queryParams.year}.`}
            </p>
          </div>
        )
      )}

      {/* FAQs */}
      <h3 className="mb-5 mt-3">Frequently Asked Questions (FAQs)</h3>
      <div className="accordion faq-accordion" id="accordionExample">
        {isLoadingFAQ ? (
          <Skeleton height={100} count={6} />
        ) : (
          faqs?.map((faq, index) => (
            <div className="accordion-item" key={faq.id}>
              <h2 className="accordion-header" id={`heading${faq.id}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${faq.id}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`collapse${faq.id}`}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(faq.question),
                    }}
                  />
                </button>
              </h2>
              <div
                id={`collapse${faq.id}`}
                className={`accordion-collapse collapse ${
                  index === 0 ? "show" : ""
                }`}
                aria-labelledby={`heading${faq.id}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(faq.answer),
                    }}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Bottom Content */}
      <div
        className="my-5"
        dangerouslySetInnerHTML={{ __html: sanitizedBottomContent }}
      />
    </>
  );
};

export default ExportParityPrice;
