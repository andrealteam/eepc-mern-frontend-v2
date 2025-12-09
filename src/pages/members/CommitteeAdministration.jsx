import React, { useMemo, useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import DOMPurify from "dompurify";
import { useQuery } from "@tanstack/react-query";
import "../Table.css";
import { getCommitteeAdministration } from "../../services/membersApi";
import Skeleton from "react-loading-skeleton";
import { DataTableCustom } from "../../components";

const CommitteeAdministration = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: committeeAdministration,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["committeeAdministration"],
    queryFn: getCommitteeAdministration,
    gcTime: 180000,
  });

  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    name: "",
    details: "",
  });

  const handleOpenModal = (name, details) => {
    setModalContent({ name, details });
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Filter data based on the search term, ensuring that committeeAdministration is defined
  const filteredData = useMemo(() => {
    if (!committeeAdministration) return []; // Fallback if data is not loaded
    return committeeAdministration.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.designation.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [committeeAdministration, searchTerm]); // Recalculate filteredData if committeeAdministration or searchTerm changes

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      cell: (row) => {
        const sanitizedName = DOMPurify.sanitize(row.name);
        return (
          <div className="name-column">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleOpenModal(sanitizedName, row.details);
              }}
            >
              {sanitizedName}
            </a>
          </div>
        );
      },
    },
    {
      name: "Designation",
      selector: (row) => row.designation,
      sortable: true,
    },
  ];

  const data = useMemo(() => {
    return (
      filteredData.map((item) => ({
        name: item.name,
        designation: item.designation,
        details: item.details,
      })) || []
    );
  }, [filteredData]);

   const commonSearchFields = ["name", "designation"];
const commonSortBy = "name";

  return (
    <>
      {isLoading ? (
        <Skeleton height={600} />
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          {/* Table Header Section */}
         

         

              
<DataTableCustom
                title="Committee Of Administration"
          data={data || []}
          columns={columns}
          searchFields={commonSearchFields}
                defaultSortBy={commonSortBy}
                handleCloseModal={handleCloseModal}
                modalContent={modalContent}
                openModal={openModal}
                />

         
        </>
      )}
    </>
  );
};

export default CommitteeAdministration;
