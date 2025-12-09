import React from "react";

const PastExecutiveDirectors = () => {
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2", fontWeight: "bold" }}>
            <th style={cellStyle}>Sr. No.</th>
            <th style={cellStyle}>Year</th>
            <th style={cellStyle}>Past Secretariat Head</th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            index={1}
            year="1955"
            name="Dr. R.D. Vidyarthi - First Head of the Secretariat"
          />

          {/* <SectionRow text="Name of the Past Executive Directors" /> */}
          <TableRow index={2} year="1971-84" name="Late Dr. R.K. Singh" />
          <TableRow index={3} year="1984 -95" name="Late V Kumar" />
          <TableRow index={4} year="1995-99" name="Late G Chandra" />
          <TableRow index={5} year="1999-2007" name="Late C.S. Shukla" />
          <TableRow index={6} year="2007-12" name="Mr. R Maitra" />

          {/* <SectionRow text="Name of Past Executive Director & Secretary" /> */}
          <TableRow index={7} year="2012-18" name="Mr. Bhaskar Sarkar" />

          {/* <SectionRow text="Name of Past Executive Director" /> */}
          <TableRow index={8} year="2018 - 2024" name="Mr. Suranjan Gupta" />
          <TableRow index={9} year="Since 2024" name="Mr. Adhip Mitra" />

          {/* 
          <SectionRow text="Executive Director & Secretary" />
          <TableRow index={9} year="July 1, 2024 onwards" name="Mr. Adhip Mitra" /> */}
        </tbody>
      </table>
    </div>
  );
};

const TableRow = ({ index, year, name }) => {
  const isEven = index % 2 === 0;
  return (
    <tr style={{ backgroundColor: isEven ? "#f9f9f9" : "#ffffff" }}>
      <td style={cellStyle}>{index}</td>
      <td style={cellStyle}>{year}</td>
      <td style={cellStyle}>{name}</td>
    </tr>
  );
};

const SectionRow = ({ text }) => (
  <tr>
    <td
      colSpan="3"
      style={{
        ...cellStyle,
        backgroundColor: "#e0e7ff",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      {text}
    </td>
  </tr>
);

const cellStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "left",
};

export default PastExecutiveDirectors;
