import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import "../../pages/Table.css";
import { matchDate } from "../../utils/helper/DateFormatter";
import TenderModal from "../modals/TenderModal";
import SupplierModal from "../modals/SupplierModal";
import { useLocation } from "react-router-dom";
import GenericModal from "../modals/GenericModal";
import DOMPurify from "dompurify";
import Select from "react-select";

const DataTableCustom = ({
  title,
  data = [],
  columns,
  searchFields = [],
  defaultSortBy = "id",
  isPagination = true,
  onModalOpen,
  handleCloseModal,
  modalContent,
  openModal,
  isFilteration = false,
  filterOptions,
  selectedValues,
  setSelectedValue,
}) => {
  console.log("modal content", typeof isPagination);
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = useMemo(() => {
    if (!Array.isArray(data)) return [];

    // If no search fields provided, return full data without filtering
    if (!searchFields || searchFields.length === 0) {
      return data;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();

    return data.filter((item) => {
      return searchFields.some((field) => {
        const value = item[field];

        if (!value) return false;

        // If field is date, format it and search
        if (field.toLowerCase().includes("date")) {
          return matchDate(value, lowerSearchTerm);
        }

        // Else treat as string
        return value.toString().toLowerCase().includes(lowerSearchTerm);
      });
    });
  }, [data, searchTerm, searchFields]);

  // Function to render the modal based on the current pathname
  const renderModal = () => {
    if (location.pathname === "/dashboard/tenders") {
      return (
        <TenderModal
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          modalContent={modalContent}
        />
      );
    } else if (location.pathname === "/indian-suppliers") {
      return (
        <SupplierModal
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          modalContent={modalContent}
        />
      );
    }
    // Default modal if no pathname matches
    return (
      <>
        <GenericModal
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          header={
            modalContent?.name
              ? DOMPurify.sanitize(modalContent?.name)
              : DOMPurify.sanitize(modalContent?.title)
          }
          content={DOMPurify.sanitize(modalContent?.details)}
        />
      </>
    );
  };

  return (
    <>
      {title && (
        <div className="table-header">
          <h2 className="table-title">{title ? title : ""}</h2>
          {searchFields.length > 0 && (
            <div className="search-container mb-4">
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          )}
        </div>
      )}
      {isFilteration && (
        <div style={{marginBottom:"10px"}}>
          <Select
            options={filterOptions}
            value={selectedValues}
            onChange={setSelectedValue}
            isMulti
            placeholder="Filter by Panel"
          />
        </div>
      )}

      <div className="table-container mb-5">
        <DataTable
          columns={columns}
          data={filteredData}
          pagination={isPagination}
          paginationRowsPerPageOptions={[5, 10, 15, 20]}
          paginationPerPage={5}
          responsive
          noHeader
          defaultSortField={defaultSortBy}
          defaultSortAsc={true}
          highlightOnHover
          striped
          customStyles={{
            table: {
              style: {
                borderRadius: "8px",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
              },
            },
            headRow: {
              style: {
                backgroundColor: "#f1f5f9",
                color: "#09377a",
                fontWeight: "600",
                fontSize: "16px",
              },
            },
            rows: {
              style: {
                fontSize: "14px",
                padding: "10px",
                wordWrap: "break-word", // This allows content to wrap within cells
                overflow: "visible", // Ensure overflow is visible and not clipped
                whiteSpace: "normal", // Allow text to wrap
                textOverflow: "clip", // Disable ellipsis on overflowing text
              },
            },
            cells: {
              style: {
                padding: "10px",
                whiteSpace: "normal", // Allow text to wrap
                wordWrap: "break-word", // Allow text to wrap
                overflow: "visible", // Ensure overflow is visible and not clipped
                textOverflow: "clip", // Disable ellipsis on overflowing text
              },
            },
            pagination: {
              style: {
                borderTop: "1px solid #e5e7eb",
                backgroundColor: "#f9fafb",
                fontSize: "14px",
                color: "black",
              },
            },
          }}
        />
        {/* Render different modals based on pathname */}
        {renderModal()}
      </div>
    </>
  );
};

export default DataTableCustom;
