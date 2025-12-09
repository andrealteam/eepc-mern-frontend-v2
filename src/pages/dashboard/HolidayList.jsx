import React from "react";
import { Calendar } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { getHolidays } from "../../services/dashboardEmployeeApi";
import Skeleton from "react-loading-skeleton";
import Cookies from "js-cookie";
import { useAuth } from "../../context/AuthContext";

const HolidayList = () => {
  const { user } = useAuth();

  const emp_office = user.emp_office;

  const {
    data: holidays,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["holidays"],
    queryFn: () => getHolidays(emp_office),
    gcTime: 180000,
  });
  console.log("holidays",holidays)

  isError && <div>Error:{error}</div>;

  return (
    <>
      {isLoading ? <Skeleton height={600} /> : <Calendar holidays={holidays} />}
    </>
  );
};

export default HolidayList;
