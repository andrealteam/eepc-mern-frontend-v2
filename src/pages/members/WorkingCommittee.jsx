import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DataTable from "react-data-table-component";
import DOMPurify from "dompurify";
import { getWorkingCommittee } from "../../services/membersApi";
import Skeleton from "react-loading-skeleton";
import "../Table.css";
import { DataTableCustom } from "../../components";

const WorkingCommittee = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    name: "",
    details: "",
  });

  const {
    data: workingCommittee,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["workingCommittee"],
    queryFn: getWorkingCommittee,
    cacheTime: 180000,
  });

  // Filter data based on the search term
  const filteredData = useMemo(() => {
    return (
      workingCommittee?.filter((item) => {
        return (
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.designation.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }) || []
    );
  }, [workingCommittee, searchTerm]);

  // Prepare data for the table
  const data = useMemo(() => {
    return filteredData.map((item) => ({
      name: item.name,
      designation: item.designation,
      details: item.details,
    }));
  }, [filteredData]);

  const handleOpenModal = (name, details) => {
    setModalContent({ name, details });
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

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
         
              

<DataTableCustom
                title="Working Committee"
          data={filteredData || []}
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

export default WorkingCommittee;
