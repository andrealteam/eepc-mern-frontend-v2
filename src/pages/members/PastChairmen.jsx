import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import DOMPurify from "dompurify";
import { useQuery } from "@tanstack/react-query";
import "../Table.css";
import { getPastChairmen } from "../../services/membersApi";
import Skeleton from "react-loading-skeleton";
import { DataTableCustom } from "../../components";

const PastChairmen = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: pastChairmen,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["pastChairmen"],
    queryFn: getPastChairmen,
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

  // Filter data based on the search term
  const filteredData = useMemo(() => {
    return pastChairmen?.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [pastChairmen]);

  const columns = [
    {
      name: "Year",
      selector: (row) => row.year,
      sortable: true,
    },
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
                {
                  row.highlights &&
                    handleOpenModal(sanitizedName, row.highlights);
                } // Open modal with the highlights
              }}
            >
              {sanitizedName}
            </a>
          </div>
        );
      },
    },
    {
      name: "Highlights",
      selector: (row) => row.highlights,
      sortable: true,
      cell: (row) => {
        if (!row.highlights) return null; // 👈 Hide if no data

        const sanitizedHighlights = DOMPurify.sanitize(row.highlights);
        return (
          <a
            href="#"
            className="link"
            onClick={(e) => {
              e.preventDefault();
              handleOpenModal(row.name, sanitizedHighlights);
            }}
          >
            View Highlights
          </a>
        );
      },
    },
    {
      name: "Contact",
      selector: (row) => row.contact,
      sortable: true,
      cell: (row) => {
        const sanitizedContact = DOMPurify.sanitize(row.contact);
        return (
          <a
            href="#"
            className="link"
            onClick={(e) => {
              e.preventDefault();
              handleOpenModal(row.name, sanitizedContact);
            }}
          >
            View Contact
          </a>
        );
      },
    },
  ];

  const data = useMemo(() => {
    return (
      filteredData?.map((item) => ({
        year: item.year,
        name: item.name,
        highlights: item.highlights,
        contact: item.contact,
      })) || []
    );
  }, [filteredData]);

  const commonSearchFields = ["year", "name", "highlights", "contact"];
  const commonSortBy = "year";

  return (
    <>
      {isLoading ? (
        <Skeleton height={400} />
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <DataTableCustom
            // title="Working Committee"
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

export default PastChairmen;
