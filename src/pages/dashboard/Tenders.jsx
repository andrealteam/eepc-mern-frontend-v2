import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "../../utils/helper/DateFormatter";
import { DataTableCustom, TableWithModal } from "../../components";
import { getTender } from "../../services/dashboardMemberApi ";

const Tenders = () => {
  const {
    data: tenders,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["tenders"],
    queryFn: getTender,
    gcTime: 180000,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [modalContent, setModalContent] = useState({}); // Initialize state for modalContent
  const [openModal, setOpenModal] = useState(false); // State to control modal visibility

  // Function to format and return a string for searching by date
  const getSearchableDate = (dateString) => {
    const formattedDate = formatDate(dateString);
    if (!formattedDate) return "";
    return formattedDate.toLowerCase();
  };

  // Filtered data based on search term and bid deadline check
  const filteredData = useMemo(() => {
    const todayDate = new Date().toISOString().split("T")[0];

    const filteredByDate = tenders?.filter(
      (item) => item.bid_deadline >= todayDate
    );

    return filteredByDate?.filter((item) => {
      return (
        item.eepc_ref_no.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getSearchableDate(item.bid_deadline).includes(searchTerm.toLowerCase())
      );
    });
  }, [tenders, searchTerm]);

  const columns = [
    {
      name: "Ref. No.",
      selector: (row) => row.eepc_ref_no,
      sortable: true,
    },
    {
      name: "Country",
      selector: (row) => row.country,
      sortable: true,
    },
    {
      name: "Bid Deadline",
      selector: (row) => formatDate(row.bid_deadline) || "N/A",
      sortable: true,
    },
    {
      name: "View",
      cell: (row) => (
        <button
          className="btn"
          style={{ backgroundColor: "#1a83c6", color: "#fff" }}
          onClick={() => handleOpenModal(row)} // Pass row data to handleOpenModal
        >
          View
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const handleOpenModal = (row) => {
    setModalContent({
      eepcRefNo: row.eepc_ref_no,
      tenderFor: row.tender_for,
      tenderBidNo: row.tender_bid_no,
      country: row.country,
      bidDeadline: row.bid_deadline,
      flag: row.flag,
      project: row.project,
      issuedBy: row.issued_by,
      bidSecurity: row.bid_security,
      otherDetails: row.other_details,
    });
    setOpenModal(true); // Open the modal
  };

  const handleCloseModal = () => {
    setOpenModal(false); // Close the modal
  };

  const commonSearchFields = ["eepc_ref_no", "country", "bid_deadline"];
  const commonSortBy = "eepc_ref_no";

  return (
    <>
      {/* <div className="table-header">
        <h2 className="table-title">Tenders</h2>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
      </div> */}

      {/* <TableWithModal
        columns={columns}
        data={filteredData || []}
        isLoading={isLoading}
        isError={isError}
        error={error}
        onModalOpen={handleOpenModal} // Pass handleOpenModal to TableWithModal
        modalContent={modalContent} // Pass modalContent to TableWithModal
        openModal={openModal} // Pass openModal to TableWithModal
        handleCloseModal={handleCloseModal} // Pass handleCloseModal to TableWithModal
      /> */}

      <DataTableCustom
        title="Tenders"
        data={filteredData || []}
        columns={columns}
        searchFields={commonSearchFields}
        defaultSortBy={commonSortBy}
        onModalOpen={handleOpenModal}
        handleCloseModal={handleCloseModal}
        modalContent={modalContent}
        openModal={openModal}
      />
    </>
  );
};

export default Tenders;
