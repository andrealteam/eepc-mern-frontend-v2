// src/components/CustomCalender2.js
import React, { useState, useEffect } from "react";
import MonthSelector from "./MonthSelector";
import Day from "./Day";
import HolidayModal from "./HolidayModal";
import "./calendar.css";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = ({ holidays, title }) => {
  const currentDate = new Date();
  const [currentYear] = useState(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [selectedHoliday, setSelectedHoliday] = useState(null);

  const currentDay = currentDate.getDate();

  // Get number of days in the month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Get the weekday (0-6) of the first day of the month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Create an array for leading empty cells + days
  const calendarCells = [];

  // Push empty cells first
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarCells.push(<div className="calendar-cell empty" key={`empty-${i}`} />);
  }

  // Push each day cell
  for (let day = 1; day <= daysInMonth; day++) {
    calendarCells.push(
      <div className="calendar-cell" key={`day-${day}`}>
        <Day
          day={day}
          holidays={holidays}
          currentMonth={currentMonth}
          currentYear={currentYear}
          currentDay={currentDay}
          handleDayClick={(d) => {
            const holiday = holidays.find((h) => {
              const [dd, mm, yyyy] = h.holiday_date.split("-");
              return (
                parseInt(dd) === d &&
                parseInt(mm) - 1 === currentMonth &&
                parseInt(yyyy) === currentYear
              );
            });
            if (holiday) setSelectedHoliday(holiday);
          }}
        />
      </div>
    );
  }

  return (
    <div className="container">
      {/* Title Row */}
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-8">
          <h3>
            {title && `${title} - `}
            {new Date(currentYear, currentMonth).toLocaleString("default", {
              month: "long",
            })}{" "}
            {currentYear}
          </h3>
        </div>
        <div className="col-lg-2">
          <MonthSelector
            currentMonth={currentMonth}
            setCurrentMonth={setCurrentMonth}
          />
        </div>
      </div>

      {/* Weekday Headers */}
      <div className="calendar-grid text-center weekday-header">
        {weekDays.map((day, index) => (
          <div className="calendar-cell header" key={`weekday-${index}`}>
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="calendar-grid text-center">{calendarCells}</div>

      {/* Holiday Modal */}
      {selectedHoliday && (
        <HolidayModal
          selectedHoliday={selectedHoliday}
          setSelectedHoliday={setSelectedHoliday}
        />
      )}
    </div>
  );
};

export default Calendar;
