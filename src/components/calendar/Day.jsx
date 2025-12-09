import React from "react";

const Day = ({
  day,
  holidays,
  currentMonth,
  currentYear,
  currentDay,
  handleDayClick,
}) => {
  const date = new Date(currentYear, currentMonth, day);

  const isWeekend = date.getDay() === 0 || date.getDay() === 6;

  const isHoliday = holidays?.some((holiday) => {
    const [dd, mm, yyyy] = holiday.holiday_date.split("-");
    return (
      parseInt(dd) === day &&
      parseInt(mm) - 1 === currentMonth &&
      parseInt(yyyy) === currentYear
    );
  });

  const isCurrentDay =
    currentMonth === new Date().getMonth() &&
    currentYear === new Date().getFullYear() &&
    currentDay === day;

  const holidayDetails = holidays.find((holiday) => {
    const [dd, mm, yyyy] = holiday.holiday_date.split("-");
    return (
      parseInt(dd) === day &&
      parseInt(mm) - 1 === currentMonth &&
      parseInt(yyyy) === currentYear
    );
  });

  // ✅ Get day name like "Sun", "Mon", etc.
  const dayName = date.toLocaleDateString("en-US", { weekday: "short" }); // "Sun", "Mon", etc.

  return (
    <div
      className={`day ${isHoliday ? "holiday" : ""} ${
        isCurrentDay ? "current-day" : ""
      } ${isWeekend ? "weekend" : ""}`}
      onClick={() => handleDayClick(day)}
    >
      {/* Add the day name */}
      {/* <div className="day-name">{dayName}</div> */}
      <span className="day-number">{day}</span>
      {holidayDetails && (
        <div className="holiday-name">{holidayDetails.holiday_name}</div>
      )}
    </div>
  );
};

export default Day;
