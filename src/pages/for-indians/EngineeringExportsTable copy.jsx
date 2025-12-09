import React, { useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import "../Table.css";

const EngineeringExportsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Static Data for the Table
  const staticData = [
    // Ferrous Group
    {
      product_panel: "Ferrous",
      mar_23: "",
      mar_24: "",
      growth_mar: "",
      year_22_23: "",
      year_23_24: "",
      growth_year: "",
      isGroup: true, // Group Header
    },
    {
      product_panel: "Iron and Steel",
      mar_23: "1376.4",
      mar_24: "1157.3",
      growth_mar: "-16%",
      year_22_23: "13397.5",
      year_23_24: "11859.4",
      growth_year: "-11%",
      isGroup: false,
    },
    {
      product_panel: "Products of Iron and Steel",
      mar_23: "926.1",
      mar_24: "994.8",
      growth_mar: "7%",
      year_22_23: "9768.6",
      year_23_24: "9892.9",
      growth_year: "1%",
      isGroup: false,
    },
    {
      product_panel: "Sub Total",
      mar_23: "2302.6",
      mar_24: "2152.2",
      growth_mar: "-7%",
      year_22_23: "23166.0",
      year_23_24: "21752.2",
      growth_year: "-6%",
      isGroup: true, // Subtotal Row (Bold)
    },
    
    // Non-Ferrous Group
    {
      product_panel: "Non-ferrous",
      mar_23: "",
      mar_24: "",
      growth_mar: "",
      year_22_23: "",
      year_23_24: "",
      growth_year: "",
      isGroup: true, // Group Header
    },
    {
      product_panel: "Aluminium and Products",
      mar_23: "500.0",
      mar_24: "540.0",
      growth_mar: "8%",
      year_22_23: "5400.0",
      year_23_24: "5600.0",
      growth_year: "4%",
      isGroup: false,
    },
    {
      product_panel: "Copper and Products",
      mar_23: "300.0",
      mar_24: "320.0",
      growth_mar: "6.7%",
      year_22_23: "3000.0",
      year_23_24: "3200.0",
      growth_year: "6.7%",
      isGroup: false,
    },
    {
      product_panel: "Sub Total",
      mar_23: "800.0",
      mar_24: "860.0",
      growth_mar: "7.5%",
      year_22_23: "8400.0",
      year_23_24: "8800.0",
      growth_year: "4.8%",
      isGroup: true, // Subtotal Row (Bold)
    },

    // Total Row
    {
      product_panel: "Total Engineering Exports",
      mar_23: "3102.6",
      mar_24: "3012.2",
      growth_mar: "-2.9%",
      year_22_23: "31566.0",
      year_23_24: "30552.2",
      growth_year: "-3.2%",
      isGroup: true, // Total Row (Bold)
    },
  ];

  // Define table columns
  const columns = [
    {
      name: "Product Panel",
      selector: (row) => row.product_panel,
      sortable: true,
      cell: (row) =>
        row.isGroup ? (
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "16px",
              backgroundColor: "#f1f5f9",
              padding: "10px",
            }}
          >
            {row.product_panel}
          </div>
        ) : (
          row.product_panel
        ), // Group headers styled differently
    },
    {
      name: "Mar-23",
      selector: (row) => row.mar_23,
      sortable: true,
    },
    {
      name: "Mar-24",
      selector: (row) => row.mar_24,
      sortable: true,
    },
    {
      name: "Growth (Mar)",
      selector: (row) => row.growth_mar,
      sortable: true,
    },
    {
      name: "2022-23",
      selector: (row) => row.year_22_23,
      sortable: true,
    },
    {
      name: "2023-24",
      selector: (row) => row.year_23_24,
      sortable: true,
    },
    {
      name: "Growth (Annual)",
      selector: (row) => row.growth_year,
      sortable: true,
    },
  ];

  // Filter data based on search term
  const filteredData = useMemo(() => {
    return staticData.filter((item) => {
      if (item.isGroup) return true; // Always include group headers
      return (
        item.product_panel?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.mar_23?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.mar_24?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.growth_mar?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.year_22_23?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.year_23_24?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.growth_year?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [staticData, searchTerm]);

  // Custom table styles
  const customStyles = {
    table: {
      style: {
        borderRadius: "8px",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        tableLayout: "auto",
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
        wordWrap: "break-word",
      },
    },
    cells: {
      style: {
        padding: "10px",
        whiteSpace: "normal",
        wordWrap: "break-word",
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
  };

  return (
    <section className="pb-70">
      <div className="container">
        {/* Header Section */}
        <div className="table-header">
          <h2 className="table-title">Engineering Exports Data</h2>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="table-container mb-5">
          <DataTable
            title={""}
            columns={columns}
            data={filteredData || []}
            pagination
            paginationRowsPerPageOptions={[5, 10, 15, 20]}
            paginationPerPage={5}
            responsive
            noHeader
            defaultSortField="product_panel"
            defaultSortAsc={true}
            highlightOnHover
            striped
            customStyles={customStyles}
          />
        </div>
      </div>
    </section>
  );
};

export default EngineeringExportsTable;
