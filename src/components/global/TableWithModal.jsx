import React from "react";
import DataTable from "react-data-table-component";
import Skeleton from "react-loading-skeleton";
// import TenderModal from "./TenderModal";
import { useLocation } from "react-router-dom";
import "../../pages/Table.css";
import SupplierModal from "../modals/SupplierModal";
import TenderModal from "../modals/TenderModal";

const TableWithModal = ({
  columns,
  data,
  isLoading,
  isError,
  error,
  onModalOpen,
  modalContent,
  openModal,
  handleCloseModal,
}) => {
  const location = useLocation(); // Get the current pathname

  // Function to render the modal based on the current pathname
  const renderModal = () => {
    if (location.pathname === "/tenders") {
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
      <TenderModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        modalContent={modalContent}
      />
    );
  };

  return (
    <>
      {isLoading ? (
        <Skeleton height={400} />
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <div className="table-container mb-5">
            <DataTable
              columns={columns}
              data={data}
              pagination
              paginationRowsPerPageOptions={[5, 10, 15, 20]}
              paginationPerPage={5}
              responsive
              noHeader
              defaultSortField="eepc_ref_no"
              highlightOnHover
              striped
              sortServer
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
              onRowClicked={(row) => onModalOpen(row)}
            />
          </div>

          {/* Render different modals based on pathname */}
          {renderModal()}
        </>
      )}
    </>
  );
};

export default TableWithModal;
