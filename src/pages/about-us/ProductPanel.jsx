import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import DOMPurify from "dompurify";
import { useQuery } from "@tanstack/react-query";
import "../Table.css";
import { getProductPanels } from "../../services/aboutApi";
import Skeleton from "react-loading-skeleton";
import { DataTableCustom } from "../../components";

// Main component
const ProductPanelTable = () => {
  const {
    data: productPanel,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["productPanel"],
    queryFn: getProductPanels,
    gcTime: 180000,
  });
// console.log("product data",productPanel)
  // Modal state
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    convenor: "",
    details: "",
  });

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  // Handle opening the modal
  const handleOpenModal = (convenor, details) => {
    setModalContent({ convenor, details });
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter data based on the search query
  const filteredData = useMemo(() => {
    return (
      productPanel?.filter((item) => {
        return (
          item.panel_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.convenor.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.officer.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }) || []
    );
  }, [productPanel, searchQuery]);

  // Define columns for react-data-table-component
  const columns = [
    {
      name: "Sl.No.",
      selector: (row) => row.sl_no,
      sortable: true,
      key: "sl_no",
      width: "100px",
      sortFunction: (rowA, rowB) => {
        return Number(rowA.sl_no) - Number(rowB.sl_no);
      },
    },
    {
      name: "Panel Name",
      selector: (row) => row.panel_name,
      sortable: true,
      cell: (row) => {
        const sanitizedPanelName = DOMPurify.sanitize(row.panel_name);
        return <div className="panel-name">{sanitizedPanelName}</div>;
      },
    },
    {
      name: "Convenor",
      selector: (row) => row.convenor,
      sortable: true,
      cell: (row) => {
        const sanitizedConvenor = DOMPurify.sanitize(row.convenor);
        return (
          <a
            href="#"
            className="link"
            onClick={(e) => {
              e.preventDefault();
              handleOpenModal(sanitizedConvenor, row.details);
            }}
          >
            {sanitizedConvenor}
          </a>
        );
      },
    },
    {
      name: "Officer",
      selector: (row) => row.officer,
      cell: (row) => {
        const sanitizedOfficer = DOMPurify.sanitize(row.officer);
        return <div dangerouslySetInnerHTML={{ __html: sanitizedOfficer }} />;
      },
    },
  ];

  // Prepare data for the table
  const data = useMemo(() => {
    return (
      filteredData?.map((item) => ({
        sl_no: Number(item.sl_no),
        panel_name: item.panel_name,
        convenor: item.convenor,
        officer: item.officer,
        details: item.details,
      })) || []
    );
  }, [filteredData]);

  const commonSearchFields = ["panel_name", "convenor", "officer"];
const commonSortBy = "sl_no";

  return (
    <>
      {isLoading ? (
        <Skeleton height={400} />
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <p className="mb-5">
            The Council has set up different Product Panels keeping in view the
            highly diverse nature of the engineering sector. Each of these
            panels make concentrated effort to reach out its products & services
            to the global MARKET.
          </p>
          
              <DataTableCustom
                title="Product Panels"
          data={data}
          columns={columns}
          searchFields={commonSearchFields}
          defaultSortBy={commonSortBy}
                />
          

          {/* Modal for showing convenor and officer details */}
          {openModal && (
            <>
              {/* Modal */}
              <div
                className="modal fade show"
                tabIndex="-1"
                role="dialog"
                style={{ display: "block" }}
                aria-modal="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered justify-content-center myModal"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">
                        {DOMPurify.sanitize(modalContent.convenor)}
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={handleCloseModal}
                      ></button>
                    </div>
                    <div
                      className="modal-body"
                      style={{ maxHeight: "400px", overflowY: "auto" }}
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: modalContent.details,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Background overlay */}
              <div
                className="modal-backdrop fade show"
                onClick={handleCloseModal}
              ></div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ProductPanelTable;
