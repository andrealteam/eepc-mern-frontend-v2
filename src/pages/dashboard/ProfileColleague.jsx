import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { baseFileURL } from "../../services/api";
import Skeleton from "react-loading-skeleton";
import { getProfileById } from "../../services/dashboardEmployeeApi";
import { fallBackImage } from "../../utils/constants";

// Helper function to add ordinal suffix to the day
const getOrdinalSuffix = (day) => {
  const suffixes = ["th", "st", "nd", "rd"];
  const val = day % 100;
  return day + (suffixes[(val - 20) % 10] || suffixes[val] || suffixes[0]);
};

// Function to format date
const formatDate = (dateString) => {
  if (!dateString) return null; // Return null if date is invalid

  const date = new Date(dateString);

  // Check for invalid date
  if (isNaN(date)) return null;

  const day = getOrdinalSuffix(date.getDate());
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

const ProfileColleague = () => {
  const { eid } = useParams();

  const {
    data: profileDataById,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["profileDataById", eid],
    queryFn: () => getProfileById(eid),
    gcTime: 180000,
  });

  isError && <p>Error: {error.message || "Something went wrong!"}</p>;

  // Extract data from the response
  const {
    emp_code,
    image,
    emp_name,
    emp_designation,
    emp_office,
    emp_date_of_joining,
    emp_date_of_birth,
    emp_date_of_retirement,
    email_id,
    mobile_no,
    pan_no,
    about_me,
    passport,
    passport_no,
    passport_place_of_issue,
    passport_date_of_issue,
    passport_date_of_expiry,
    food_preference,
    extra_curricular_activities,
    acheivements,
  } = profileDataById || {};

  return (
    <>
      <div className="row">
        <div className="col-lg-3">
          {isLoading ? (
            <Skeleton height={200} />
          ) : (
            <div className="profile-card">
              <div className="profile-img">
                <img
                  src={baseFileURL + image || fallBackImage}
                  alt={emp_name}
                  className="w-100"
                  loading="lazy"
                />
              </div>
              <div className="profile-text text-center">
                <h3>{emp_name}</h3>
                <p>
                  {emp_designation} ({emp_code})
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="col-lg-9">
          <div className="row profile-details">
            <div className="col-lg-6">
              <ul>
                <li>Region : {emp_office}</li>
                <li>Date of Birth : {formatDate(emp_date_of_birth)}</li>
                <li>
                  Passport : <img src={passport} alt="" />
                </li>
                <li>Passport No. : {passport_no}</li>
                <li>Place of Issue : {passport_place_of_issue} </li>
                <li>Date of Issue : {formatDate(passport_date_of_issue)}</li>
                <li>Date of Expiry : {formatDate(passport_date_of_expiry)}</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li>Date of Joining : {formatDate(emp_date_of_joining)}</li>
                <li>
                  Date of Retirement : {formatDate(emp_date_of_retirement)}
                </li>
                <li>Email ID : {email_id}</li>
                <li>Mobile No. : {mobile_no}</li>
                <li>Pan No. : {pan_no}</li>
                <li>Food Preference : {food_preference}</li>
              </ul>
            </div>
            <hr />
            <div className="col-lg-12">
              <ul>
                <li>About Me : {about_me}</li>
                <li>
                  Extra Curricular Activities : {extra_curricular_activities}
                </li>
                <li>Acheivements : {acheivements}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileColleague;
