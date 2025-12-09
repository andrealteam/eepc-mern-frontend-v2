// src/components/MonthSelector.js
import React from "react";

const MonthSelector = ({ currentMonth, setCurrentMonth }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="my-4">
      <select
        className="form-select w-auto"
        value={currentMonth}
        onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
      >
        {months.map((month, index) => (
          <option key={index} value={index}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MonthSelector;
