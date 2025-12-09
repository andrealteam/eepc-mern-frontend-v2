import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import DOMPurify from "dompurify";
import { useQuery } from "@tanstack/react-query";
import "../Table.css";
import { getChapters } from "../../services/membersApi";
import Skeleton from "react-loading-skeleton";
import { DataTableCustom } from "../../components";

const Chapters = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to track the search term

  const {
    data: chapters,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["chapters"],
    queryFn: getChapters,
    cacheTime: 180000,
  });

  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    details: "",
  });

  const handleOpenModal = (title, details) => {
    setModalContent({ title, details });
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Filter data based on the search term for all fields
  const filteredData = useMemo(() => {
    return chapters?.filter((item) => {
      const searchLowerCase = searchTerm.toLowerCase();
      return (
        item.sl_no.toLowerCase().includes(searchLowerCase) ||
        item.date_inauguration.toLowerCase().includes(searchLowerCase) ||
        item.city.toLowerCase().includes(searchLowerCase) ||
        item.state.toLowerCase().includes(searchLowerCase) ||
        item.convener.toLowerCase().includes(searchLowerCase) ||
        item.convener_dy.toLowerCase().includes(searchLowerCase) ||
        item.region.toLowerCase().includes(searchLowerCase)
      );
    });
  }, [chapters, searchTerm]);

  const columns = [
    {
      name: "Sl. No.",
      selector: (row) => row.sl_no,
      sortable: true,
      key: "sl_no",
      width: "11%",
      sortFunction: (rowA, rowB) => {
        return Number(rowA.sl_no) - Number(rowB.sl_no);
      },
    },
    {
      name: "Date of Inauguration",
      selector: (row) => row.date_inauguration,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Convener",
      selector: (row) => row.convener,
      sortable: true,
      cell: (row) => {
        const sanitizedConvener = DOMPurify.sanitize(row.convener);
        return (
          <div className="name-column">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleOpenModal(sanitizedConvener, row.convener_details); // Open modal with convener details
              }}
            >
              {sanitizedConvener}
            </a>
          </div>
        );
      },
    },
    {
      name: "Dy Convener",
      selector: (row) => row.convener_dy,
      sortable: true,
      cell: (row) => {
        const sanitizedDyConvener = DOMPurify.sanitize(row.convener_dy);
        return (
          <div className="name-column">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleOpenModal(sanitizedDyConvener, row.chepter_details); // Open modal with dy convener details
              }}
            >
              {sanitizedDyConvener}
            </a>
          </div>
        );
      },
    },
    {
      name: "Region",
      selector: (row) => row.region,
      sortable: true,
    },
  ];

  const data = useMemo(() => {
    return (
      filteredData?.map((item) => ({
        sl_no: item.sl_no,
        date_inauguration: item.date_inauguration,
        city: item.city,
        state: item.state,
        convener: item.convener,
        convener_details: item.convener_details,
        convener_dy: item.convener_dy,
        chepter_details: item.chepter_details,
        region: item.region,
      })) || []
    );
  }, [filteredData]);

   const commonSearchFields = ["sl_no", "date_inauguration","city","state","convener","convener_details","convener_dy","chepter_details","region"];
const commonSortBy = "sl_no";

  return (
    <>
      {isLoading ? (
        <Skeleton height={600} />
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
         

              <DataTableCustom
                title="Chapters"
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

export default Chapters;