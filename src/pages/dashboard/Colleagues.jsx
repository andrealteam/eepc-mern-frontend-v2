import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getColleagues } from "../../services/dashboardEmployeeApi";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { baseFileURL } from "../../services/api";
import "./colleagues.css";
import { useAuth } from "../../context/AuthContext";

const Colleagues = () => {

  const { user, loading} = useAuth();
    const emp_code = user?.emp_code;

  const {
    data: colleagues,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["colleagues",emp_code],
    queryFn:()=> getColleagues(emp_code),
    enabled: !!emp_code,
    gcTime: 180000,
  });

  // Handle loading and error states
  if (isLoading) {
    return <Skeleton count={5} height={200} />;
  }

  if (isError) {
    return <div>Error loading colleagues: {error.message}</div>;
  }

  // Ensure colleagues is an array before proceeding
  if (!Array.isArray(colleagues)) {
    return <div>No colleagues data available</div>;
  }

  return (
    <>
      {colleagues.map((officeObj, officeIndex) => {
        // Loop through each office (e.g., "HO, KOLKATA")
        return Object.keys(officeObj).map((office, index) => (
          <div key={index} className="row justify-content-center">
            <div className="section-header">
              <h2>{office}</h2>
            </div>
            {/* Ensure each office has colleagues to display */}
            {Array.isArray(officeObj[office]) &&
              officeObj[office].map((colleague, colleagueIndex) => (
                <div key={colleagueIndex} className="col-lg-4 mb-4">
                  <div className="our-team">
                    <div className="picture">
                      <img
                        src={baseFileURL + colleague.image}
                        alt={colleague.emp_name}
                      />
                    </div>
                    <div className="team-content">
                      <h3 className="name">{colleague.emp_name}</h3>
                      <h4 className="title">{colleague.emp_designation}</h4>
                    </div>
                    <Link
                      to={`/dashboard/colleague-profile/${colleague.emp_code}`}
                      className="know-more"
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        ));
      })}
    </>
  );
};

export default Colleagues;
